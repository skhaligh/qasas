// Family voices: stories recorded by the family and children's short voice notes.
// Everything stays on this device (IndexedDB). Nothing is uploaded anywhere.

// ---------- storage ----------
const DB = 'qasas-audio', ST = 'clips';
let dbp = null;
const open = () => dbp || (dbp = new Promise((res, rej) => {
  const r = indexedDB.open(DB, 1);
  r.onupgradeneeded = () => r.result.createObjectStore(ST);
  r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
}));
const tx = async (mode, fn) => {
  const d = await open();
  return new Promise((res, rej) => { const t = d.transaction(ST, mode), q = fn(t.objectStore(ST)); t.oncomplete = () => res(q && q.result); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error); });
};
// A clip is { buf: ArrayBuffer, mime, dur (seconds), cues: [{ t, id }] }.
// Keys: "r:<recordingId>:<page>" for story pages, "n:<noteId>" for voice notes.
export const Clips = {
  put: (key, clip) => tx('readwrite', (s) => s.put(clip, key)),
  get: (key) => tx('readonly', (s) => s.get(key)),
  del: (key) => tx('readwrite', (s) => s.delete(key)),
};

// ---------- microphone ----------
let stream = null, recorder = null, chunks = [], t0 = 0;
const pickMime = () => ['audio/mp4;codecs=mp4a.40.2', 'audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'].find((m) => MediaRecorder.isTypeSupported(m)) || '';
const session = (type) => { try { if (navigator.audioSession) navigator.audioSession.type = type; } catch (e) { /* not supported */ } };
export const Mic = {
  get supported() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder && window.indexedDB); },
  get on() { return !!recorder && recorder.state === 'recording'; },
  get elapsed() { return this.on ? (performance.now() - t0) / 1000 : 0; },
  // Asks for the microphone (the browser shows its own permission prompt the first time).
  async open() {
    if (stream) return;
    session('play-and-record');
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } }); }
    catch (e) { session('playback'); throw e; }
  },
  start() {
    chunks = []; const mime = pickMime();
    recorder = new MediaRecorder(stream, mime ? { mimeType: mime, audioBitsPerSecond: 64000 } : undefined);
    recorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    recorder.start(); t0 = performance.now();
  },
  // Stops recording, releases the microphone and returns the clip.
  stop() {
    return new Promise((res) => {
      const r = recorder; if (!r || r.state === 'inactive') { this.close(); return res(null); }
      const dur = (performance.now() - t0) / 1000;
      r.onstop = async () => { const blob = new Blob(chunks, { type: r.mimeType || 'audio/mp4' }); const buf = await blob.arrayBuffer(); this.close(); res({ buf, mime: blob.type, dur, cues: [] }); };
      r.stop();
    });
  },
  close() {
    if (recorder && recorder.state !== 'inactive') { try { recorder.onstop = null; recorder.stop(); } catch (e) { /* already stopped */ } }
    recorder = null;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null; session('playback');
  },
};

// ---------- playback ----------
let el = null, url = null, timer = null, primed = false;
function silentUrl() {
  const n = 2205, b = new ArrayBuffer(44 + n * 2), v = new DataView(b), w = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
  w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVEfmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 22050, true); v.setUint32(28, 44100, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, n * 2, true);
  return URL.createObjectURL(new Blob([b], { type: 'audio/wav' }));
}
export const Voice = {
  // Call from a tap, before any waiting: phones only let a page start sound from a touch.
  prime() { if (primed) return; primed = true; el = new Audio(); el.src = silentUrl(); el.play().catch(() => {}); },
  get loaded() { return !!url; },
  get paused() { return !el || el.paused; },
  // Plays one clip. onTime is called about 20 times a second with the position in seconds.
  async play(clip, { onTime, onEnd } = {}) {
    this.stop(); el = el || new Audio();
    url = URL.createObjectURL(new Blob([clip.buf], { type: clip.mime })); el.src = url;
    el.onended = () => { clearInterval(timer); if (onTime) onTime(Infinity); if (onEnd) onEnd(); };
    if (onTime) timer = setInterval(() => { if (!el.paused) onTime(el.currentTime); }, 50);
    try { await el.play(); return true; } catch (e) { return false; }
  },
  pause() { if (el) el.pause(); },
  resume() { if (el && url) el.play().catch(() => {}); },
  stop() {
    clearInterval(timer); timer = null;
    if (el) { el.onended = null; el.pause(); }
    if (url) { URL.revokeObjectURL(url); url = null; }
  },
};

// ---------- moving a recording to another device ----------
export function toB64(buf) { const u = new Uint8Array(buf); let s = ''; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); }
export function fromB64(b64) { const s = atob(b64), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u.buffer; }

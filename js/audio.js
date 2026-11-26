// Sound engine: every sound is synthesised in the browser (no audio files, works offline).
// Natural and environmental sounds only. A recipe can later be replaced by a recording.

let ctx = null, master, ambBus, cueBus, current = null, currentId = null;
let vol = 0.7, ambOn = true;
const bufs = {};

function noiseBuf(type) {
  if (bufs[type]) return bufs[type];
  const sr = ctx.sampleRate, n = sr * 5, F = Math.floor(sr * 0.3);
  const x = new Float32Array(n + F);
  if (type === 'white') {
    for (let i = 0; i < x.length; i++) x[i] = Math.random() * 2 - 1;
  } else if (type === 'pink') {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < x.length; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.969 * b2 + w * 0.153852; b3 = 0.8665 * b3 + w * 0.3104856;
      b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
      x[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11; b6 = w * 0.115926;
    }
  } else {
    let last = 0;
    for (let i = 0; i < x.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; x[i] = last * 3.5; }
  }
  const buf = ctx.createBuffer(1, n, sr), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = x[i];
  for (let i = 0; i < F; i++) { const k = i / F; d[i] = x[i] * k + x[n + i] * (1 - k); } // seamless loop
  return (bufs[type] = buf);
}

const G = (v) => { const g = ctx.createGain(); g.gain.value = v; return g; };
const F = (type, f, q = 0.7) => { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; return b; };
const link = (...n) => { for (let i = 0; i < n.length - 1; i++) n[i].connect(n[i + 1]); return n[n.length - 1]; };

// ---- one-shot voices -------------------------------------------------------
function burst(out, t, o = {}) {
  const { type = 'white', f = 1000, q = 1, ft = 'bandpass', a = 0.003, d = 0.05, g = 0.3, f2 } = o;
  const s = ctx.createBufferSource(); s.buffer = noiseBuf(type); s.loop = true;
  const fl = F(ft, f, q), gn = G(0);
  link(s, fl, gn, out);
  gn.gain.setValueAtTime(0.0001, t); gn.gain.linearRampToValueAtTime(g, t + a);
  gn.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  if (f2) { fl.frequency.setValueAtTime(f, t); fl.frequency.exponentialRampToValueAtTime(f2, t + a + d); }
  s.start(t, Math.random() * 4); s.stop(t + a + d + 0.05);
}
function tone(out, t, o = {}) {
  const { f = 440, f2, d = 0.1, a = 0.005, g = 0.2, type = 'sine' } = o;
  const os = ctx.createOscillator(), gn = G(0); os.type = type;
  os.frequency.setValueAtTime(f, t); if (f2) os.frequency.exponentialRampToValueAtTime(f2, t + a + d);
  gn.gain.setValueAtTime(0.0001, t); gn.gain.linearRampToValueAtTime(g, t + a);
  gn.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  link(os, gn, out); os.start(t); os.stop(t + a + d + 0.05);
}
const R = (a, b) => a + Math.random() * (b - a);

function chirp(out, t, g = 0.05) {
  const notes = 2 + Math.floor(Math.random() * 4), base = R(2600, 4200);
  for (let i = 0; i < notes; i++) {
    const f = base * R(0.9, 1.25);
    tone(out, t + i * R(0.09, 0.14), { f, f2: f * R(0.8, 1.35), d: R(0.04, 0.09), a: 0.008, g });
  }
}
function cricket(out, t, f, g = 0.02) {
  const pulses = 3 + Math.floor(Math.random() * 2);
  for (let i = 0; i < pulses; i++) tone(out, t + i * 0.034, { f, d: 0.014, a: 0.004, g });
}
function crackle(out, t, big) {
  burst(out, t, { f: R(1500, 5200), q: 3, d: big ? R(0.03, 0.06) : R(0.005, 0.02), g: big ? R(0.35, 0.6) : R(0.08, 0.3) });
}
function bubble(out, t, g = 0.07) { const f = R(260, 520); tone(out, t, { f, f2: f * R(1.8, 2.6), d: R(0.05, 0.1), a: 0.004, g }); }

// ---- ambiences (loops) -----------------------------------------------------
// Each gets a kit: noise(type), lfo(rate, depth, param), every(fn, minMs, maxMs), out
function windLayer(k, level = 1) {
  const bp = F('bandpass', 520, 0.7), g = G(0.42 * level);
  link(k.noise('pink'), bp, g, k.out);
  k.lfo(0.07, 230, bp.frequency); k.lfo(0.11, 0.16 * level, g.gain);
  const bp2 = F('bandpass', 1300, 2.2), g2 = G(0.07 * level);
  link(k.noise('pink'), bp2, g2, k.out);
  k.lfo(0.045, 420, bp2.frequency); k.lfo(0.09, 0.05 * level, g2.gain);
}
function cricketLayer(k, level = 1) {
  k.every((t) => cricket(k.out, t, 4300, 0.055 * level), 420, 900);
  k.every((t) => cricket(k.out, t, 3850, 0.035 * level), 700, 1700);
}
function fireLayer(k, level = 1) {
  const g = G(0.5 * level);
  link(k.noise('brown'), F('lowpass', 260), g, k.out); k.lfo(0.4, 0.12 * level, g.gain);
  link(k.noise('pink'), F('bandpass', 900, 0.7), G(0.07 * level), k.out);
  const cr = G(level); cr.connect(k.out);
  k.every((t) => crackle(cr, t, Math.random() < 0.12), 40, 240);
}
function seaLayer(k, level = 1, rough = false) {
  const low = G(0.0), hiss = G(0.0);
  link(k.noise(rough ? 'brown' : 'pink'), F('lowpass', rough ? 520 : 850), low, k.out);
  link(k.noise('white'), F('highpass', 1800), hiss, k.out);
  low.gain.value = (rough ? 0.75 : 0.3) * level; hiss.gain.value = (rough ? 0.1 : 0.05) * level;
  k.lfo(rough ? 0.16 : 0.13, (rough ? 0.45 : 0.22) * level, low.gain);
  k.lfo(rough ? 0.16 : 0.13, (rough ? 0.08 : 0.045) * level, hiss.gain, 1.6);
}

const AMB = {
  wind: (k) => windLayer(k, 1.7),
  night: (k) => { windLayer(k, 0.5); cricketLayer(k, 1); },
  morning: (k) => { windLayer(k, 0.5); k.every((t) => chirp(k.out, t, 0.13), 500, 2400); },
  rain: (k) => {
    link(k.noise('white'), F('highpass', 900), F('lowpass', 7500), G(0.26), k.out);
    link(k.noise('pink'), F('lowpass', 420), G(0.3), k.out);
    k.every((t) => tone(k.out, t, { f: R(1100, 2600), d: 0.03, a: 0.002, g: R(0.01, 0.035) }), 50, 190);
  },
  storm: (k) => { seaLayer(k, 1, true); windLayer(k, 0.8); link(k.noise('white'), F('highpass', 1200), F('lowpass', 6000), G(0.12), k.out); },
  sea: (k) => { seaLayer(k, 1, false); windLayer(k, 0.2); },
  shore: (k) => { seaLayer(k, 0.8, false); k.every((t) => chirp(k.out, t, 0.08), 1500, 5000); },
  fire: (k) => fireLayer(k, 1),
  camp: (k) => { fireLayer(k, 0.6); cricketLayer(k, 0.7); },
  deep: (k) => {
    const g = G(0.85); link(k.noise('brown'), F('lowpass', 170), g, k.out); k.lfo(0.06, 0.3, g.gain);
    k.every((t) => { const n = 1 + Math.floor(Math.random() * 3); for (let i = 0; i < n; i++) bubble(k.out, t + i * R(0.08, 0.2)); }, 900, 3400);
  },
  stream: (k) => {
    link(k.noise('white'), F('bandpass', 1700, 1.1), G(0.3), k.out);
    [[700, 3.1], [1150, 4.7], [2400, 6.3]].forEach(([f, r]) => {
      const bp = F('bandpass', f, 6), g = G(0.24); link(k.noise('white'), bp, g, k.out);
      k.lfo(r, f * 0.3, bp.frequency); k.lfo(r * 0.61, 0.12, g.gain);
    });
    k.every((t) => bubble(k.out, t, 0.07), 300, 1200);
  },
};

// ---- cues (tapped by the reader) -------------------------------------------
const CUE = {
  thunder: (o, t) => {
    burst(o, t, { ft: 'highpass', f: 1400, d: 0.09, g: 0.45 });
    burst(o, t + 0.03, { type: 'brown', ft: 'lowpass', f: 700, f2: 110, a: 0.05, d: 3.6, g: 1.0 });
    burst(o, t + 0.7, { type: 'brown', ft: 'lowpass', f: 300, f2: 90, a: 0.2, d: 2.4, g: 0.6 });
  },
  knock: (o, t) => [0, 0.24, 0.48].forEach((dt) => {
    tone(o, t + dt, { f: 170, f2: 105, d: 0.08, a: 0.002, g: 0.7 });
    burst(o, t + dt, { f: 900, q: 2, d: 0.03, g: 0.4 });
  }),
  hammer: (o, t) => [0, 0.42, 0.84, 1.26].forEach((dt) => {
    burst(o, t + dt, { f: 2300, q: 3, d: 0.045, g: 0.55 });
    tone(o, t + dt, { f: 430, f2: 300, d: 0.06, a: 0.002, g: 0.3 });
    tone(o, t + dt, { f: 120, f2: 80, d: 0.05, a: 0.002, g: 0.4 });
  }),
  birds: (o, t) => [0, 0.5, 1.1, 1.5, 2.2].forEach((dt) => chirp(o, t + dt + R(0, 0.15), 0.24)),
  dove: (o, t) => [0, 1.5].forEach((d0) => {
    const lp = F('lowpass', 900); lp.connect(o);
    tone(lp, t + d0, { f: 470, f2: 455, d: 0.22, a: 0.05, g: 0.22 });
    tone(lp, t + d0 + 0.32, { f: 540, f2: 470, d: 0.5, a: 0.08, g: 0.3 });
    tone(lp, t + d0 + 0.95, { f: 450, f2: 430, d: 0.28, a: 0.05, g: 0.2 });
  }),
  steps: (o, t) => { for (let i = 0; i < 6; i++) burst(o, t + i * 0.52, { f: i % 2 ? 620 : 460, q: 0.8, a: 0.03, d: 0.17, g: 0.38 }); },
  hooves: (o, t) => {
    for (let c = 0; c < 8; c++) {
      const g = 0.8 * Math.sin(((c + 0.5) / 8) * Math.PI);
      [0, 0.1, 0.2].forEach((dt, i) => {
        const tt = t + c * 0.4 + dt;
        burst(o, tt, { f: i === 2 ? 800 : 1150, q: 4, d: 0.03, g });
        tone(o, tt, { f: 210, f2: 140, d: 0.045, a: 0.002, g: g * 0.6 });
      });
    }
  },
  pour: (o, t) => {
    burst(o, t, { f: 650, f2: 1700, q: 4, a: 0.15, d: 2.0, g: 0.3 });
    burst(o, t, { f: 2600, q: 1, a: 0.2, d: 1.8, g: 0.08 });
    for (let i = 0; i < 14; i++) bubble(o, t + 0.1 + i * R(0.09, 0.16), 0.06);
  },
  splash: (o, t) => {
    burst(o, t, { ft: 'lowpass', f: 3200, a: 0.008, d: 0.9, g: 0.5 });
    burst(o, t, { type: 'brown', ft: 'lowpass', f: 300, a: 0.01, d: 0.3, g: 0.8 });
    for (let i = 0; i < 6; i++) bubble(o, t + 0.2 + i * R(0.07, 0.15), 0.05);
  },
  wave: (o, t) => {
    burst(o, t, { type: 'pink', ft: 'lowpass', f: 500, f2: 2600, a: 1.1, d: 0.2, g: 0.8 });
    burst(o, t + 1.2, { ft: 'lowpass', f: 3800, f2: 700, a: 0.05, d: 2.4, g: 0.7 });
  },
  mill: (o, t) => {
    for (let i = 0; i < 5; i++) {
      burst(o, t + i * 0.75, { type: 'brown', f: 260, q: 1, a: 0.3, d: 0.4, g: 0.9 });
      burst(o, t + i * 0.75, { type: 'pink', ft: 'highpass', f: 2200, a: 0.3, d: 0.35, g: 0.06 });
    }
  },
  flare: (o, t) => {
    burst(o, t, { type: 'pink', f: 320, f2: 1500, q: 0.8, a: 0.5, d: 1.2, g: 0.6 });
    for (let i = 0; i < 10; i++) crackle(o, t + 0.3 + i * R(0.05, 0.14), i % 3 === 0);
  },
  twigs: (o, t) => [0, 0.35, 0.6, 1.0, 1.25].forEach((dt) => {
    burst(o, t + dt, { f: R(2500, 4500), q: 4, d: 0.03, g: 1.0 });
    burst(o, t + dt + 0.03, { f: R(1200, 2000), q: 3, d: 0.03, g: 0.6 });
  }),
  drip: (o, t) => [0, 0.5, 0.9].forEach((dt) => tone(o, t + dt, { f: 900, f2: 1700, d: 0.06, a: 0.003, g: 0.25 })),
};

export const CUE_LABEL = {
  thunder: { fa: 'رعد', en: 'thunder' }, knock: { fa: 'تق تق', en: 'knock' }, hammer: { fa: 'چکش', en: 'hammer' },
  birds: { fa: 'پرنده‌ها', en: 'birds' }, dove: { fa: 'کبوتر', en: 'dove' }, steps: { fa: 'صدای پا', en: 'footsteps' },
  hooves: { fa: 'سُم اسب‌ها', en: 'hooves' }, pour: { fa: 'آب', en: 'water' }, splash: { fa: 'شلپ', en: 'splash' },
  wave: { fa: 'موج', en: 'wave' }, mill: { fa: 'دستاس', en: 'millstone' }, flare: { fa: 'شعله', en: 'flames' },
  twigs: { fa: 'هیزم', en: 'twigs' }, drip: { fa: 'چکّه', en: 'drops' },
};
export const AMB_LABEL = {
  wind: { fa: 'باد', en: 'wind' }, night: { fa: 'شبِ آرام', en: 'quiet night' }, morning: { fa: 'صبح', en: 'morning' },
  rain: { fa: 'باران', en: 'rain' }, storm: { fa: 'دریای طوفانی', en: 'stormy sea' }, sea: { fa: 'دریا', en: 'sea' },
  shore: { fa: 'ساحل', en: 'shore' }, fire: { fa: 'آتش', en: 'fire' }, camp: { fa: 'آتشِ شب', en: 'campfire' },
  deep: { fa: 'زیر آب', en: 'underwater' }, stream: { fa: 'آبِ روان', en: 'running water' },
};

// ---- engine ----------------------------------------------------------------
function startAmb(id) {
  const g = G(0); g.connect(ambBus);
  const live = { g, stops: [], timers: [], dead: false };
  const kit = {
    out: g,
    noise: (type) => { const s = ctx.createBufferSource(); s.buffer = noiseBuf(type); s.loop = true; s.start(0, Math.random() * 4); live.stops.push(s); return s; },
    lfo: (rate, depth, param, delay = 0) => { const o = ctx.createOscillator(), d = G(depth); o.frequency.value = rate; link(o, d, param); o.start(ctx.currentTime + delay); live.stops.push(o); },
    every: (fn, min, max) => {
      const h = {}; live.timers.push(h);
      const tick = () => { if (live.dead) return; if (ctx.state === 'running') fn(ctx.currentTime + 0.05); h.t = setTimeout(tick, R(min, max)); };
      h.t = setTimeout(tick, R(0, max));
    },
  };
  AMB[id](kit);
  g.gain.setTargetAtTime(1, ctx.currentTime, 0.6);
  return live;
}
function stopAmb(live) {
  live.dead = true; live.timers.forEach((h) => clearTimeout(h.t));
  live.g.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
  setTimeout(() => { live.stops.forEach((s) => { try { s.stop(); } catch (e) { /* already stopped */ } }); live.g.disconnect(); }, 3000);
}

export const Sound = {
  get ready() { return !!ctx; },
  // Must be called from a tap (browsers only allow sound after a user gesture).
  unlock() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      ctx = new AC();
      master = G(vol); const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14; comp.ratio.value = 6;
      link(master, comp, ctx.destination);
      ambBus = G(ambOn ? 0.55 : 0); cueBus = G(1); ambBus.connect(master); cueBus.connect(master);
      // iPhone: let sound play even when the ring switch is on silent.
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { /* not supported */ }
      document.addEventListener('visibilitychange', () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else ctx.resume(); });
    }
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  },
  ambience(id) {
    if (!ctx) { currentId = id; return; }
    if (id === currentId && current) return;
    if (current) stopAmb(current);
    current = null; currentId = id;
    if (id && AMB[id]) current = startAmb(id);
  },
  cue(id) { if (!ctx || !CUE[id]) return; if (ctx.state === 'suspended') ctx.resume(); CUE[id](cueBus, ctx.currentTime + 0.03); },
  volume(v) { vol = v; if (master) master.gain.setTargetAtTime(v, ctx.currentTime, 0.05); },
  ambienceOn(on) { ambOn = on; if (ambBus) ambBus.gain.setTargetAtTime(on ? 0.55 : 0, ctx.currentTime, 0.3); },
  stop() { if (current) stopAmb(current); current = null; currentId = null; },
  // For checking levels in development.
  _probe() { if (!ctx) return null; const an = ctx.createAnalyser(); an.fftSize = 2048; master.connect(an); return an; },
  has: (id) => !!CUE[id], hasAmb: (id) => !!AMB[id],
};

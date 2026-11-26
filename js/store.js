// Everything the family records stays on this device (localStorage). Export a backup from Settings.
const KEY = 'qasas.v1';
const DEF = { kids: [], log: [], recs: [], favs: {}, checked: {}, set: { night: null, vol: 0.7, amb: true, size: 1, who: 'all', src: false } };
const clone = (o) => JSON.parse(JSON.stringify(o));

function read() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (!d) return clone(DEF);
    return { ...clone(DEF), ...d, set: { ...DEF.set, ...(d.set || {}) } };
  } catch (e) { return clone(DEF); }
}
let data = read();

export const Store = {
  get d() { return data; },
  save() { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* storage full or blocked */ } },
  kid(id) { return data.kids.find((k) => k.id === id); },
  kidAge(k) { return new Date().getFullYear() - k.born; },
  addKid(name, age) { const k = { id: 'k' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name, born: new Date().getFullYear() - age }; data.kids.push(k); this.save(); return k; },
  removeKid(id) { data.kids = data.kids.filter((k) => k.id !== id); if (data.set.who === id) data.set.who = 'all'; this.save(); },
  // who = 'all' (anyone has heard it) or a child's id
  entries(storyId, who = 'all') { return data.log.filter((l) => l.id === storyId && (who === 'all' || (l.kids || []).includes(who))); },
  isRead(storyId, who = 'all') { return this.entries(storyId, who).length > 0; },
  readIds(who = 'all') { return [...new Set(data.log.filter((l) => who === 'all' || (l.kids || []).includes(who)).map((l) => l.id))]; },
  log(entry) { data.log.push({ t: Date.now(), ...entry }); this.save(); },
  toggleFav(id) { if (data.favs[id]) delete data.favs[id]; else data.favs[id] = 1; this.save(); },
  toggleChecked(id) { if (data.checked[id]) delete data.checked[id]; else data.checked[id] = Date.now(); this.save(); },
  // Voice recordings are not part of the backup (they live in the device's audio store).
  exportText() { return JSON.stringify({ app: 'qasas', v: 1, at: new Date().toISOString(), data: { ...data, recs: [] } }, null, 1); },
  importText(text) {
    const o = JSON.parse(text); const d = o && o.app === 'qasas' ? o.data : null;
    if (!d || !Array.isArray(d.log) || !Array.isArray(d.kids)) throw new Error('bad file');
    data = { ...clone(DEF), ...d, recs: data.recs || [], set: { ...DEF.set, ...(d.set || {}) } }; this.save();
  },
};

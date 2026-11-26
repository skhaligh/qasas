import { Sound, CUE_LABEL, AMB_LABEL } from './audio.js';
import { scene, cover } from './art/scenes.js';
import { CATALOG, GROUPS } from '../content/catalog.js';
import { Store } from './store.js';
import { Clips, Mic, Voice, toB64, fromB64 } from './rec.js';

const app = document.getElementById('app');
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const faNum = (n) => String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
const num = (n, lang = 'fa') => (lang === 'fa' ? faNum(n) : String(n));
const byId = Object.fromEntries(CATALOG.map((s) => [s.id, s]));
const mods = {};
async function loadStory(id) {
  if (!mods[id]) mods[id] = (await import(`../content/stories/${String(id).padStart(3, '0')}.js`)).default;
  return mods[id];
}

const I = {
  sound: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  mute: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 9.5l5 5M21.5 9.5l-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  star: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8z" fill="currentColor"/></svg>',
  heart: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M12 20.5S3.5 15.4 3.5 9.3A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 8.5 1.7c0 6.1-8.5 11.2-8.5 11.2z" fill="currentColor"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  root: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M5 4h9a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4V4z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 9h6M9 13h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
};

const T = {
  fa: { next: 'بعدی', prev: 'قبلی', start: 'شروع قصه', short: 'کوتاه', full: 'کامل', min: 'دقیقه', prep: 'پیش از خواندن', words: 'واژه‌ها', care: 'حواستان باشد', roots: 'ریشهٔ قصه', ours: 'آنچه ما افزوده‌ایم', left: 'آنچه نیاورده‌ایم', talk: 'حرف بزنیم', lesson: 'درس قصه', keep: 'با هم تکرار کنیم', who: 'چه کسانی شنیدند؟', liked: 'چقدر دوستش داشتید؟', likedSolo: 'چقدر دوستش داشتی؟', note: 'یادداشت: بچه‌ها چه گفتند یا پرسیدند؟', save: 'ثبت و پایان', end: 'پایان قصه', srcOn: 'نمایش منبع', checked: 'خودم بازبینی کردم', caution: 'پیش از خواندن بدانید', page: 'صفحه', everyone: 'همه', back: 'بازگشت', strength: 'اعتبار', version: 'اندازه', lang: 'زبان', tapSound: 'برای صدا، روی این دکمه‌ها بزنید', gold: 'رنگ طلایی یعنی عینِ متنِ منبع', more: 'بیشتر بدانیم', moreSub: 'برای بزرگ‌ترها' },
  en: { next: 'Next', prev: 'Back', start: 'Start the story', short: 'Short', full: 'Full', min: 'min', prep: 'Before you read', words: 'Words', care: 'Take care', roots: 'Roots of the story', ours: 'What we added', left: 'What we left out', talk: "Let's talk", lesson: 'The lesson', keep: 'Say it together', who: 'Who listened?', liked: 'How much did you like it?', likedSolo: 'How much did you like it?', note: 'Note: what did the children say or ask?', save: 'Save and finish', end: 'The end', srcOn: 'Show sources', checked: 'I have checked this myself', caution: 'Know this before reading', page: 'Page', everyone: 'Everyone', back: 'Back', strength: 'How solid', version: 'Length', lang: 'Language', tapSound: 'Tap these buttons for sound', gold: 'Gold ink marks words taken from the source', more: 'Learn more', moreSub: 'for older children' },
};
const SEAL = {
  fa: { Q: 'قرآن', 'Q+H': 'قرآن و روایت', 'Q+T': 'قرآن و تاریخ', H: 'حدیث', T: 'نقل تاریخی' },
  en: { Q: "Qur'an", 'Q+H': "Qur'an + hadith", 'Q+T': "Qur'an + history", H: 'Hadith', T: 'Historical report' },
};

Object.assign(I, {
  mic: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  send: '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path d="M12 15V4M8 8l4-4 4 4M5 14v5h14v-5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
});
// mode: 'read' (someone reads aloud) · 'rec' (recording a family voice) · 'play' (listening to one)
const ui = { group: 'all', show: 'all', ver: 'full', lang: 'fa', page: 0, stars: 0, sheet: null, story: null, mode: 'read', rec: null, play: null, note: null, pick: false };
const fmtT = (sec) => faNum(Math.floor(sec / 60) + ':' + String(Math.floor(sec % 60)).padStart(2, '0'));
const langOf = (st) => (st.title.en && ui.lang === 'en' ? 'en' : 'fa');
const MIC_MSG = 'برای ضبط، باید به میکروفون اجازه بدهید.';
const set = () => Store.d.set;
const solo = () => (set().who !== 'all' && Store.kid(set().who)) || null;

// ---------- theme ----------
function applyTheme() {
  let night = set().night;
  if (night === null) { const h = new Date().getHours(); night = h >= 19 || h < 6 || matchMedia('(prefers-color-scheme: dark)').matches; }
  document.documentElement.dataset.theme = night ? 'night' : 'day';
  document.documentElement.style.setProperty('--size', set().size);
  document.querySelector('meta[name=theme-color]').content = night ? '#0d1322' : '#f6efe2';
  return night;
}

// ---------- text markup ----------
// {{...}} words taken from the source · [[id]] sound button · ((...)) note for the reader
function rich(text, lang, hideHints) {
  return esc(text)
    .replace(/\{\{(.+?)\}\}/g, '<span class="q">$1</span>')
    .replace(/\[\[(\w+)\]\]/g, (m, id) => `<button class="cue" data-act="cue" data-id="${id}">${I.sound}<span>${(CUE_LABEL[id] || {})[lang] || id}</span></button>`)
    .replace(/\(\((.+?)\)\)/g, hideHints ? '' : '<span class="hint">$1</span>');
}

// ---------- pieces ----------
const ageChip = (a) => `<span class="chip age">${faNum(a)}+</span>`;
const sealChip = (type, lang = 'fa') => `<span class="chip seal seal-${type[0]}">${SEAL[lang][type] || type}</span>`;
function stateOf(s) {
  const who = set().who, n = Store.entries(s.id, who).length;
  return { n, fav: !!Store.d.favs[s.id] };
}
function card(s) {
  const st = stateOf(s), parent = !solo();
  return `<a class="card ${s.ready ? '' : 'soon'} ${st.n ? 'read' : ''}" href="#/s/${s.id}">
    <div class="cover">${cover(s)}${st.n ? `<span class="done">${I.check}</span>` : ''}${st.fav ? `<span class="fav">${I.heart}</span>` : ''}${s.ready ? '' : '<span class="tag">به‌زودی</span>'}</div>
    <div class="meta"><span class="no">${faNum(s.id)}</span><h3>${esc(s.fa)}</h3></div>
    <div class="chips">${ageChip(s.age)}${parent ? sealChip(s.type) : ''}${s.en ? '<span class="chip en">EN</span>' : ''}${parent && s.caution ? '<span class="chip warn">!</span>' : ''}</div>
  </a>`;
}
function suitable(s, age) { return age == null || s.age <= Math.max(3, age); }
function tonight() {
  const kid = solo(), who = set().who;
  const ages = Store.d.kids.map((k) => Store.kidAge(k));
  const age = kid ? Store.kidAge(kid) : ages.length ? Math.min(...ages) : null;
  const ready = CATALOG.filter((s) => s.ready && suitable(s, age));
  const unread = ready.filter((s) => !Store.isRead(s.id, who));
  const pool = unread.length ? unread : ready;
  if (!pool.length) return null;
  const day = Math.floor(Date.now() / 864e5);
  return pool[day % pool.length];
}

// ---------- views ----------
function header(active) {
  const night = document.documentElement.dataset.theme === 'night';
  return `<header class="top"><a class="brand" href="#/"><b>قصص</b><span>قصه‌های راست، برای شب‌های ما</span></a>
    <nav><a href="#/" class="${active === 'home' ? 'on' : ''}">قصه‌ها</a><a href="#/sky" class="${active === 'sky' ? 'on' : ''}">آسمانِ ما</a><a href="#/set" class="${active === 'set' ? 'on' : ''}">تنظیمات</a>
    <button class="icon" data-act="night" title="روز / شب">${night ? '☀' : '☾'}</button></nav></header>`;
}
function whoRow() {
  const who = set().who, kids = Store.d.kids;
  return `<div class="who"><span class="lbl">چه کسی می‌خواند؟</span>
    <button class="pill ${who === 'all' ? 'on' : ''}" data-act="who" data-id="all">بابا / مامان برای همه</button>
    ${kids.map((k) => `<button class="pill ${who === k.id ? 'on' : ''}" data-act="who" data-id="${k.id}">${esc(k.name)} خودش</button>`).join('')}
    ${kids.length ? '' : '<a class="pill ghost" href="#/set">＋ نام بچه‌ها</a>'}</div>`;
}
function home() {
  const kid = solo(), who = set().who;
  let list = CATALOG;
  if (kid) list = list.filter((s) => s.ready && suitable(s, Store.kidAge(kid)));
  if (ui.group !== 'all') list = list.filter((s) => s.group === ui.group);
  if (ui.show === 'ready') list = list.filter((s) => s.ready);
  if (ui.show === 'unread') list = list.filter((s) => s.ready && !Store.isRead(s.id, who));
  if (ui.show === 'read') list = list.filter((s) => Store.isRead(s.id, who));
  if (ui.show === 'fav') list = list.filter((s) => Store.d.favs[s.id]);
  if (ui.show === 'small') list = list.filter((s) => s.age === 3);
  const t = tonight(), readN = Store.readIds(who).length;
  const gp = [['all', 'همه'], ...Object.entries(GROUPS).map(([k, v]) => [k, v.fa])];
  const sh = [['all', 'همه'], ['ready', 'آماده'], ['unread', 'نخوانده'], ['read', 'خوانده'], ['fav', 'دلخواه'], ['small', 'برای کوچولوها']];
  return header('home') + `<main class="home">${whoRow()}
    ${t ? `<a class="tonight" href="#/s/${t.id}"><div class="tart">${cover(t)}</div><div class="tinfo"><span class="k">${kid ? 'پیشنهاد برای تو' : 'قصهٔ امشب'}</span><h2>${esc(t.fa)}</h2><p>${ageChip(t.age)}${kid ? '' : sealChip(t.type)}<span class="go">بخوانیم ←</span></p></div></a>` : ''}
    <div class="filters"><div class="row">${gp.map(([k, v]) => `<button class="pill sm ${ui.group === k ? 'on' : ''}" data-act="group" data-id="${k}">${v}</button>`).join('')}</div>
    <div class="row">${sh.filter(([k]) => !(kid && (k === 'ready' || k === 'small'))).map(([k, v]) => `<button class="pill sm ${ui.show === k ? 'on' : ''}" data-act="show" data-id="${k}">${v}</button>`).join('')}</div></div>
    <p class="count">${faNum(list.length)} قصه · ${faNum(readN)} تا خوانده شده</p>
    <div class="grid">${list.map(card).join('') || '<p class="empty">قصه‌ای با این انتخاب نیست.</p>'}</div></main>`;
}

function rootsPanel(st, c, lang) {
  const t = T[lang], r = st.roots, chk = !!Store.d.checked[st.id];
  const item = (x) => `<div class="rt" id="rt-${x.id}"><h5>${esc(x.ref[lang] || x.ref.fa)}</h5>${x.ar ? `<p class="ar" lang="ar" dir="rtl">${esc(x.ar)}</p>` : ''}${x.gloss ? `<p class="gl">${esc(x.gloss[lang] || x.gloss.fa)}</p>` : ''}</div>`;
  return `<details class="roots"><summary>${I.root}<span>${t.roots}</span>${sealChip(c.type, lang)}${chk ? `<span class="chip ok">${I.check}</span>` : ''}</summary>
    <p class="strength"><b>${t.strength}:</b> ${esc(r.strength[lang] || r.strength.fa)}</p>
    ${r.list.map(item).join('')}
    ${r.ours ? `<h5>${t.ours}</h5><p>${esc(r.ours[lang] || r.ours.fa)}</p>` : ''}
    ${r.left ? `<h5>${t.left}</h5><p>${esc(r.left[lang] || r.left.fa)}</p>` : ''}
    <label class="checkrow"><input type="checkbox" data-chg="checked" ${chk ? 'checked' : ''}> ${t.checked}</label></details>`;
}
function voicesBox(c) {
  const recs = Store.d.recs.filter((r) => r.story === c.id), kid = solo();
  const row = (r) => `<div class="vrow"><button class="pill voice" data-act="playRec" data-id="${r.id}">▶ با صدای ${esc(r.by)} · ${fmtT(r.dur)}${r.ver === 'short' ? ' · کوتاه' : ''}${r.lang === 'en' ? ' · EN' : ''}</button>${kid ? '' : `<button class="icon" data-act="recSend" data-id="${r.id}" aria-label="فرستادن به دستگاه دیگر">${I.send}</button><button class="icon" data-act="recDel" data-id="${r.id}" aria-label="حذف">${I.x}</button>`}</div>`;
  const names = [...Store.d.kids.map((k) => k.name), 'بابا', 'مامان', 'مادربزرگ', 'پدربزرگ'];
  const make = !Mic.supported ? '<p class="sub">این مرورگر ضبط صدا را پشتیبانی نمی‌کند.</p>'
    : ui.pick ? `<p class="sub">چه کسی می‌خواند؟</p><div class="kidrow">${names.map((n) => `<button class="pill" data-act="recStart" data-id="${esc(n)}">${esc(n)}</button>`).join('')}</div><div class="kid new"><input type="text" id="recName" placeholder="نام دیگر"><button class="btn" data-act="recStart">شروع</button></div>`
      : `<button class="btn ghost" data-act="recNew"><b class="recdot">●</b> ضبطِ این قصه با صدای خودمان</button>`;
  return `<section class="voices"><h4>${I.mic} صدای خانواده</h4>${recs.map(row).join('')}${make}</section>`;
}
function intro(c) {
  const st = ui.story, kid = solo();
  if (!c) return header('home') + '<main class="pad"><p>این قصه پیدا نشد.</p></main>';
  if (!c.ready || !st) {
    return header('home') + `<main class="intro"><div class="hero">${cover(c)}</div><div class="body"><span class="no">قصهٔ ${faNum(c.id)}</span><h1>${esc(c.fa)}</h1>
      <p class="chips">${ageChip(c.age)}${sealChip(c.type)}</p><p class="soonnote">این قصه هنوز نوشته نشده است. منبعی که برایش در نظر گرفته‌ایم:</p>
      <p class="plan" dir="auto">${esc(c.src)}</p><p class="about" dir="ltr" lang="en">${esc(c.about)}</p><a class="btn ghost" href="#/">بازگشت</a></div></main>`;
  }
  const lang = st.title.en && ui.lang === 'en' ? 'en' : 'fa', t = T[lang], dir = lang === 'en' ? 'ltr' : 'rtl';
  if (!st.short) ui.ver = 'full';
  const p = st.prep[lang] || st.prep.fa, fav = !!Store.d.favs[c.id], n = Store.entries(c.id, set().who).length;
  return header('home') + `<main class="intro" dir="${dir}" lang="${lang}"><div class="hero">${scene(st.cover || c.cover)}</div><div class="body">
    <span class="no">${lang === 'fa' ? 'قصهٔ ' + faNum(c.id) : 'Story ' + c.id}${n ? ` · ${I.check} ${num(n, lang)}` : ''}</span>
    <h1>${esc(st.title[lang])}</h1>
    <p class="chips">${ageChip(c.age)}${kid ? '' : sealChip(c.type, lang)}<button class="chip favbtn ${fav ? 'on' : ''}" data-act="fav">${I.heart}</button></p>
    <div class="opts">
      ${st.short ? `<div class="seg" role="group" aria-label="${t.version}"><button class="${ui.ver === 'short' ? 'on' : ''}" data-act="ver" data-id="short">${t.short} · ${num(minutes(st, 'short', lang), lang)} ${t.min}</button><button class="${ui.ver === 'full' ? 'on' : ''}" data-act="ver" data-id="full">${t.full} · ${num(minutes(st, 'full', lang), lang)} ${t.min}</button></div>` : `<span class="chip">${num(minutes(st, 'full', lang), lang)} ${t.min}</span>`}
      ${st.title.en ? `<div class="seg" role="group" aria-label="${t.lang}"><button class="${lang === 'fa' ? 'on' : ''}" data-act="lang" data-id="fa">فارسی</button><button class="${lang === 'en' ? 'on' : ''}" data-act="lang" data-id="en">English</button></div>` : ''}
      ${st.more ? `<span class="chip">＋ ${t.more}</span>` : ''}
    </div>
    <a class="btn big" href="#/s/${c.id}/read" data-act="begin">${t.start}</a>
    ${voicesBox(c)}
    ${kid ? '' : `${st.roots.caution ? `<div class="caution"><b>${t.caution}</b><p>${esc(st.roots.caution[lang] || st.roots.caution.fa)}</p></div>` : ''}
    <section class="prep"><h4>${t.prep}</h4><p>${esc(p.gist)}</p>
      ${p.words && p.words.length ? `<h5>${t.words}</h5><dl>${p.words.map(([w, m]) => `<div><dt>${esc(w)}</dt><dd>${esc(m)}</dd></div>`).join('')}</dl>` : ''}
      ${p.care ? `<h5>${t.care}</h5><p>${esc(p.care)}</p>` : ''}</section>
    ${rootsPanel(st, c, lang)}`}
  </div></main>`;
}

// Reading time is worked out from the text (slow read-aloud pace, with pauses and sounds).
function minutes(st, ver, lang) {
  const words = (st[ver] || st.full).map((p) => (p[lang] || p.fa).join(' ')).join(' ').replace(/\[\[\w+\]\]|\(\(.+?\)\)/g, '').split(/\s+/).length;
  return Math.max(1, Math.round(words / 75));
}
function pagesOf(st) { return ui.ver === 'short' && st.short ? st.short : st.full; }
function recCtl() {
  const take = ui.rec.takes[ui.page];
  if (Mic.on) return `<button class="btn recbtn live" data-act="recStop">■ <span id="rtime">${fmtT(0)}</span></button>`;
  if (take) return `<button class="btn ghost" data-act="recHear">▶ ${fmtT(take.dur)}</button><button class="btn ghost" data-act="recGo" aria-label="دوباره">↺</button>`;
  return `<button class="btn recbtn" data-act="recGo">● ضبطِ این صفحه</button>`;
}
function noteCtl() {
  if (!Mic.supported) return '';
  const n = ui.note;
  if (n && n.on) return `<button class="btn recbtn live" data-act="noteStop">■ <span id="rtime">${fmtT(0)}</span></button>`;
  if (n && n.clip) return `<button class="btn ghost" data-act="noteHear">▶ ${fmtT(n.clip.dur)}</button><button class="btn ghost" data-act="noteGo">↺ دوباره</button><button class="icon" data-act="noteDrop" aria-label="حذف">${I.x}</button>`;
  return `<button class="btn ghost" data-act="noteGo">${I.mic} ضبط صدای بچه‌ها (تا ۳۰ ثانیه)</button>`;
}
function reader(c) {
  const st = ui.story; if (!st) return '';
  const lang = langOf(st), t = T[lang], dir = lang === 'en' ? 'ltr' : 'rtl', kid = solo();
  const rec = ui.mode === 'rec' ? ui.rec : null, play = ui.mode === 'play' ? ui.play : null;
  const pages = pagesOf(st), last = ui.page >= pages.length, pg = pages[Math.min(ui.page, pages.length - 1)];
  const dots = pages.map((_, i) => `<i class="${i === ui.page ? 'on' : i < ui.page ? 'past' : ''}"></i>`).join('') + `<i class="fin ${last ? 'on' : ''}"></i>`;
  const label = rec ? `<b class="recdot">●</b> ضبط · ${esc(rec.by)}${last ? '' : ' · ' + faNum(ui.page + 1) + ' از ' + faNum(pages.length)}` : play ? `با صدای ${esc(play.rec.by)}` : esc(st.title[lang]);
  const bar = `<header class="rbar"><a class="icon" href="#/s/${c.id}" aria-label="${t.back}">${I.x}</a><span class="ttl">${label}</span>
    ${play && !last ? `<button class="icon on" data-act="voiceToggle" aria-label="pause">${play.paused ? '▶' : '❚❚'}</button>` : ''}
    ${rec ? '' : `<button class="icon ${set().amb ? 'on' : ''}" data-act="amb" aria-label="sound">${set().amb ? I.sound : I.mute}</button>`}
    ${kid || rec || play ? '' : `<button class="icon ${set().src ? 'on' : ''}" data-act="src" aria-label="${t.srcOn}">${I.root}</button>`}
    <button class="icon txt" data-act="size">Aa</button></header>`;
  let body;
  if (!last) {
    const paras = pg[lang] || pg.fa;
    const refs = (pg.refs || []).map((id) => st.roots.list.find((x) => x.id === id)).filter(Boolean);
    body = `<div class="rart">${scene(pg.art)}${!rec && pg.amb && AMB_LABEL[pg.amb] ? `<span class="amb">♪ ${AMB_LABEL[pg.amb][lang]}</span>` : ''}</div>
      <article class="rtext">${play && play.missing ? '<p class="sub">صدای این صفحه روی این دستگاه نیست.</p>' : ''}${paras.map((x) => `<p>${rich(x, lang, (!!kid && !rec) || !!play)}</p>`).join('')}
      ${!kid && !rec && !play && set().src && refs.length ? `<div class="refs">${refs.map((x) => `<button class="chip ref" data-act="sheet" data-id="${x.id}">${I.root} ${esc(x.ref[lang] || x.ref.fa)}</button>`).join('')}</div>` : ''}</article>`;
  } else if (rec) {
    const n = Object.keys(rec.takes).length, total = Object.values(rec.takes).reduce((a, x) => a + x.dur, 0);
    body = `<div class="rart">${scene(pages[pages.length - 1].art)}</div><article class="rtext end"><h2>ضبط تمام شد</h2>
      <div class="box"><p>${faNum(n)} صفحه با صدای ${esc(rec.by)} · ${fmtT(total)}</p><p class="sub">این صدا فقط روی همین دستگاه می‌ماند و جایی فرستاده نمی‌شود.</p>
      <div class="rowbtn"><button class="btn big" data-act="recSave">ذخیره</button><a class="btn ghost" href="#/s/${c.id}">دور بریز</a></div></div></article>`;
  } else {
    const kids = Store.d.kids, k = st.keep, more = st.more && (st.more[lang] || st.more.fa);
    const moreMin = more ? Math.max(1, Math.round(more.join(' ').split(/\s+/).length / 75)) : 0;
    body = `<div class="rart">${scene(pages[pages.length - 1].art)}</div><article class="rtext end">
      <h2>${t.end}</h2>
      ${st.lesson ? `<div class="box"><h4>${t.lesson}</h4><p>${esc(st.lesson[lang] || st.lesson.fa)}</p></div>` : ''}
      ${st.talk ? `<div class="box"><h4>${t.talk}</h4><ul>${(st.talk[lang] || st.talk.fa).map((q) => `<li>${esc(q)}</li>`).join('')}</ul></div>` : ''}
      ${more ? `<details class="box more"><summary><span>${t.more}</span><small>${t.moreSub} · ${num(moreMin, lang)} ${t.min}</small></summary>${more.map((x) => (x.startsWith('## ') ? `<h5>${esc(x.slice(3))}</h5>` : `<p>${rich(x, lang, false)}</p>`)).join('')}</details>` : ''}
      ${k ? `<div class="box keep"><h4>${t.keep}</h4>${k.ar ? `<p class="ar" lang="ar" dir="rtl">${esc(k.ar)}</p>` : ''}<p>${esc(k[lang] || k.fa)}</p><small>${esc(k.ref[lang] || k.ref.fa)}</small></div>` : ''}
      <div class="box logbox">
        ${kid ? '' : kids.length ? `<h4>${t.who}</h4><div class="kidrow">${kids.map((x) => `<label class="pill"><input type="checkbox" name="kid" value="${x.id}" checked> ${esc(x.name)}</label>`).join('')}</div>` : ''}
        <h4>${kid ? t.likedSolo : t.liked}</h4><div class="stars">${[1, 2, 3].map((n) => `<button class="${ui.stars >= n ? 'on' : ''}" data-act="stars" data-id="${n}" aria-label="${n}">${I.star}</button>`).join('')}</div>
        ${kid ? '' : `<textarea id="note" rows="2" placeholder="${t.note}"></textarea>`}
        <div class="vnote">${noteCtl()}</div>
        <button class="btn big" data-act="save">${t.save}</button></div></article>`;
  }
  const sheet = ui.sheet ? (() => { const x = st.roots.list.find((y) => y.id === ui.sheet); return x ? `<div class="sheet" data-act="closeSheet"><div class="inner"><h5>${esc(x.ref[lang] || x.ref.fa)}</h5>${x.ar ? `<p class="ar" lang="ar" dir="rtl">${esc(x.ar)}</p>` : ''}${x.gloss ? `<p>${esc(x.gloss[lang] || x.gloss.fa)}</p>` : ''}<button class="btn ghost" data-act="closeSheet">${t.back}</button></div></div>` : ''; })() : '';
  const prevOff = ui.page === 0 || (rec && Mic.on), nextOff = last || (rec && (Mic.on || !rec.takes[ui.page]));
  return `<div class="reader" dir="${dir}" lang="${lang}">${bar}<div class="rbody">${body}</div>
    <footer class="rnav"><button class="btn ghost" data-act="prev" ${prevOff ? 'disabled' : ''}>${t.prev}</button>${rec && !last ? `<div class="recctl">${recCtl()}</div>` : `<div class="dots">${dots}</div>`}<button class="btn" data-act="next" ${nextOff ? 'disabled' : ''}>${t.next}</button></footer>${sheet}</div>`;
}

function sky() {
  const who = set().who === 'all' ? (ui.skyWho || 'all') : set().who;
  const read = new Set(Store.readIds(who)), kids = Store.d.kids;
  let stars = '';
  CATALOG.forEach((s) => {
    const a = ((s.id * 2654435761) >>> 0) / 4294967296, b = ((s.id * 40503 * 2246822519) >>> 0) / 4294967296;
    const x = 30 + a * 740, y = 24 + b * 300, lit = read.has(s.id);
    stars += lit ? `<a href="#/s/${s.id}"><circle cx="${x}" cy="${y}" r="16" fill="#ffe9a8" opacity=".18"/><path class="tw" transform="translate(${x} ${y})" d="M0 -9 L2.6 -2.6 L9 0 L2.6 2.6 L0 9 L-2.6 2.6 L-9 0 L-2.6 -2.6Z" fill="#ffe08a"><title>${esc(s.fa)}</title></path></a>` : `<circle cx="${x}" cy="${y}" r="2" fill="#cfd6ff" opacity=".3"/>`;
  });
  const fmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long', year: 'numeric' });
  const hist = Store.d.log.filter((l) => who === 'all' || (l.kids || []).includes(who)).slice().reverse();
  return header('sky') + `<main class="skyv"><div class="skybox"><svg class="art" viewBox="0 0 800 380" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="skyg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070b20"/><stop offset="1" stop-color="#1c2c5e"/></linearGradient></defs><rect width="800" height="380" fill="url(#skyg)"/>${stars}<path d="M0 380 L0 350 Q200 320 400 346 T800 338 L800 380Z" fill="#0b1026"/></svg></div>
    <h2>${faNum(read.size)} ستاره از ${faNum(CATALOG.length)}</h2><p class="sub">هر قصه‌ای که خوانده شود، یک ستاره روشن می‌شود.</p>
    ${set().who === 'all' && kids.length ? `<div class="who"><button class="pill sm ${who === 'all' ? 'on' : ''}" data-act="skyWho" data-id="all">همه</button>${kids.map((k) => `<button class="pill sm ${who === k.id ? 'on' : ''}" data-act="skyWho" data-id="${k.id}">${esc(k.name)}</button>`).join('')}</div>` : ''}
    <h3>دفترِ قصه‌خوانی</h3>
    ${hist.length ? `<ul class="hist">${hist.map((l) => { const s = byId[l.id]; const names = (l.kids || []).map((id) => (Store.kid(id) || {}).name).filter(Boolean).join('، '); return `<li><a href="#/s/${l.id}"><b>${esc(s ? s.fa : l.id)}</b></a><span class="st">${'★'.repeat(l.stars || 0)}</span><small>${fmt.format(new Date(l.t))}${names ? ' · ' + esc(names) : ''}${l.rec ? ' · با صدای ' + esc(l.rec) : l.by && l.by !== 'parent' ? ' · خودش خواند' : ''}${l.ver === 'short' ? ' · کوتاه' : ''}</small>${l.note ? `<p>${esc(l.note)}</p>` : ''}${l.voice ? `<button class="pill sm" data-act="playNote" data-id="${l.voice}">▶ صدای بچه‌ها</button>` : ''}</li>`; }).join('')}</ul>` : '<p class="empty">هنوز قصه‌ای ثبت نشده است.</p>'}</main>`;
}

function settings() {
  const s = set(), kids = Store.d.kids;
  return header('set') + `<main class="setv">
    <section><h3>بچه‌ها</h3><p class="sub">نام و سن هر بچه را بنویسید تا قصه‌های مناسب پیشنهاد شود و دفتر هر کدام جدا بماند.</p>
      ${kids.map((k) => `<div class="kid"><input type="text" value="${esc(k.name)}" data-chg="kidName" data-id="${k.id}" aria-label="نام"><input type="number" min="1" max="18" value="${Store.kidAge(k)}" data-chg="kidAge" data-id="${k.id}" aria-label="سن"><span>ساله</span><button class="icon" data-act="kidDel" data-id="${k.id}" aria-label="حذف">${I.x}</button></div>`).join('')}
      <div class="kid new"><input type="text" id="newName" placeholder="نام"><input type="number" id="newAge" min="1" max="18" placeholder="سن"><button class="btn" data-act="kidAdd">افزودن</button></div></section>
    <section><h3>خواندن</h3>
      <label class="line">اندازهٔ نوشته <input type="range" min="0.85" max="1.5" step="0.05" value="${s.size}" data-chg="size"></label>
      <label class="line">بلندیِ صدا <input type="range" min="0" max="1" step="0.05" value="${s.vol}" data-chg="vol"></label>
      <label class="line"><span>صدای زمینه</span><input type="checkbox" data-chg="amb" ${s.amb ? 'checked' : ''}></label>
      <label class="line"><span>نمایش منبع زیر هر صفحه</span><input type="checkbox" data-chg="src" ${s.src ? 'checked' : ''}></label>
      <div class="line"><span>روز / شب</span><div class="seg"><button class="${s.night === null ? 'on' : ''}" data-act="theme" data-id="auto">خودکار</button><button class="${s.night === false ? 'on' : ''}" data-act="theme" data-id="day">روز</button><button class="${s.night === true ? 'on' : ''}" data-act="theme" data-id="night">شب</button></div></div></section>
    <section><h3>پشتیبان</h3><p class="sub">دفتر قصه‌خوانی فقط روی همین دستگاه ذخیره می‌شود. گاهی یک پشتیبان بگیرید.</p>
      <div class="rowbtn"><button class="btn" data-act="export">گرفتن پشتیبان</button><label class="btn ghost">بازگرداندن<input type="file" accept="application/json,.json" data-chg="import" hidden></label></div></section>
    <section><h3>صدای خانواده</h3><p class="sub">${faNum(Store.d.recs.length)} قصه با صدای خانواده روی این دستگاه ضبط شده است. صداها جایی فرستاده نمی‌شوند و در «پشتیبان» هم نیستند. برای بردن یک صدا به دستگاه دیگر، در صفحهٔ همان قصه دکمهٔ فرستادن را بزنید و فایل را اینجا باز کنید.</p>
      <div class="rowbtn"><label class="btn ghost">افزودن صدا از فایل<input type="file" accept="application/json,.json" data-chg="voiceIn" hidden></label></div></section>
    <section class="about"><h3>دربارهٔ قصص</h3>
      <p>هر قصه از قرآن یا کتاب‌های کهن گرفته شده و با زبان ساده بازنویسی شده است. منبع و متن عربی هر قصه در بخش «ریشهٔ قصه» آمده است. چیزی به رویدادها افزوده نشده است.</p>
      <p>در تصویرها چهرهٔ پیامبران و امامان (ع) کشیده نمی‌شود. صداها فقط صدای طبیعت و محیط است.</p>
      <p class="sub">متن قرآن: Tanzil.net (متن ساده، بدون تغییر). قلم: وزیرمتن (مجوز OFL).</p></section></main>`;
}

// ---------- router ----------
let wake = null;
async function keepAwake(on) {
  try {
    if (on && 'wakeLock' in navigator && !wake) { wake = await navigator.wakeLock.request('screen'); wake.addEventListener('release', () => { wake = null; }); }
    else if (!on && wake) { await wake.release(); wake = null; }
  } catch (e) { /* not allowed right now */ }
}
function parse() {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  if (h[0] === 's' && h[1]) return { v: h[2] === 'read' ? 'read' : 'intro', id: +h[1] };
  if (h[0] === 'sky') return { v: 'sky' };
  if (h[0] === 'set') return { v: 'set' };
  return { v: 'home' };
}
let route = { v: 'home' }, lastKey = '', playKey = '', pageKey = '', tickH = null;
function startTick(limit, onLimit) {
  stopTick();
  tickH = setInterval(() => { const el = app.querySelector('#rtime'), sec = Mic.elapsed; if (el) el.textContent = fmtT(sec); if (limit && sec >= limit) onLimit(); }, 250);
}
function stopTick() { clearInterval(tickH); tickH = null; }
// Leaving the reader: stop any voice, free the microphone, and drop a recording that was not saved.
function leaveReader() {
  stopTick(); Voice.stop(); Mic.close(); playKey = '';
  if (ui.rec && !ui.rec.saved) Object.keys(ui.rec.takes).forEach((pg) => Clips.del(`r:${ui.rec.id}:${pg}`).catch(() => {}));
  if (ui.mode === 'play') Sound.volume(set().vol);
  ui.rec = null; ui.play = null; ui.note = null; ui.mode = 'read';
}
// Listening to a family voice: play the clip of the page on screen, replay its sound buttons, then turn the page.
async function syncVoice() {
  const p = ui.play, pages = pagesOf(ui.story), key = p.rec.id + ':' + ui.page;
  if (key === playKey) return;
  playKey = key; Voice.stop(); p.missing = false;
  if (ui.page >= pages.length) return;
  const clip = await Clips.get(`r:${p.rec.id}:${ui.page}`).catch(() => null);
  if (playKey !== key || ui.mode !== 'play') return;
  if (!clip) { p.missing = true; render(); return; }
  const cues = (clip.cues || []).slice().sort((a, b) => a.t - b.t); let i = 0;
  const ok = await Voice.play(clip, {
    onTime: (sec) => { while (i < cues.length && cues[i].t <= sec) { const id = cues[i++].id; if (sec !== Infinity) { Sound.cue(id); const b = app.querySelector(`.cue[data-id="${id}"]`); if (b) { b.classList.remove('hit'); void b.offsetWidth; b.classList.add('hit'); } } } },
    onEnd: () => setTimeout(() => { if (playKey === key && ui.mode === 'play' && !ui.play.paused) turn(1); }, 700),
  });
  if (!ok && playKey === key) { p.paused = true; render(); }
}
async function go() {
  route = parse(); applyTheme();
  const key = route.v + (route.id || '');
  if (route.v === 'intro' || route.v === 'read') {
    const c = byId[route.id];
    ui.story = c && c.ready ? await loadStory(c.id).catch(() => null) : null;
    if (route.v === 'read' && !ui.story) { location.hash = '#/s/' + route.id; return; }
    if (key !== lastKey && route.v === 'read') { ui.page = 0; ui.stars = 0; ui.sheet = null; }
  }
  if (route.v !== 'read') { Sound.stop(); keepAwake(false); leaveReader(); }
  if (key !== lastKey) ui.pick = false;
  render(); if (key !== lastKey) window.scrollTo(0, 0); lastKey = key;
}
function render() {
  const c = byId[route.id];
  document.body.className = 'v-' + route.v;
  app.innerHTML = route.v === 'home' ? home() : route.v === 'intro' ? intro(c) : route.v === 'read' ? reader(c) : route.v === 'sky' ? sky() : settings();
  if (route.v === 'read') {
    const pages = pagesOf(ui.story), pg = pages[ui.page];
    Sound.ambience(ui.mode === 'rec' ? null : pg ? pg.amb : pages[pages.length - 1].amb);
    keepAwake(true);
    const k = route.id + ':' + ui.page + ':' + ui.mode, b = app.querySelector('.rbody');
    if (b && k !== pageKey) b.scrollTop = 0;
    pageKey = k;
    if (ui.mode === 'play' && ui.play) syncVoice();
  }
}
function turn(d) {
  const pages = pagesOf(ui.story), n = Math.max(0, Math.min(pages.length, ui.page + d));
  if (ui.mode === 'rec' && ui.rec && (Mic.on || (d > 0 && !ui.rec.takes[ui.page]))) return;
  if (n !== ui.page) { ui.page = n; ui.sheet = null; render(); }
}

// ---------- actions ----------
const ACT = {
  night: () => { const now = document.documentElement.dataset.theme === 'night'; set().night = !now; Store.save(); applyTheme(); render(); },
  theme: (el) => { set().night = el.dataset.id === 'auto' ? null : el.dataset.id === 'night'; Store.save(); applyTheme(); render(); },
  who: (el) => { set().who = el.dataset.id; Store.save(); ui.show = 'all'; render(); },
  group: (el) => { ui.group = el.dataset.id; render(); },
  show: (el) => { ui.show = el.dataset.id; render(); },
  skyWho: (el) => { ui.skyWho = el.dataset.id; render(); },
  fav: () => { Store.toggleFav(route.id); render(); },
  ver: (el) => { ui.ver = el.dataset.id; render(); },
  lang: (el) => { ui.lang = el.dataset.id; render(); },
  begin: () => { ui.mode = 'read'; Sound.unlock(); Sound.volume(set().vol); Sound.ambienceOn(set().amb); },
  // While a page is being recorded the sound button stays silent (the microphone would pick it up);
  // its moment is remembered and the sound is played again at that point when someone listens.
  cue: (el) => {
    if (ui.mode === 'rec' && Mic.on) ui.rec.cues.push({ t: Mic.elapsed, id: el.dataset.id });
    else { Sound.unlock(); Sound.cue(el.dataset.id); }
    el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');
  },
  amb: () => { Sound.unlock(); set().amb = !set().amb; Store.save(); Sound.ambienceOn(set().amb); render(); },
  src: () => { set().src = !set().src; Store.save(); render(); },
  size: () => { const steps = [1, 1.15, 1.3, 0.9]; set().size = steps[(steps.indexOf(set().size) + 1) % steps.length] || 1; Store.save(); applyTheme(); },
  next: () => turn(1), prev: () => turn(-1),
  sheet: (el) => { ui.sheet = el.dataset.id; render(); },
  closeSheet: (el, e) => { if (e.target.closest('.inner') && !e.target.closest('button')) return; ui.sheet = null; render(); },
  stars: (el) => { ui.stars = +el.dataset.id; app.querySelectorAll('.stars button').forEach((b, i) => b.classList.toggle('on', i < ui.stars)); },
  save: async () => {
    const kid = solo(), note = (app.querySelector('#note') || {}).value || '';
    const kids = kid ? [kid.id] : [...app.querySelectorAll('input[name=kid]:checked')].map((x) => x.value);
    const entry = { id: route.id, kids, ver: ui.ver, lang: ui.lang, stars: ui.stars, note: note.trim(), by: kid ? kid.id : 'parent' };
    if (ui.mode === 'play' && ui.play) entry.rec = ui.play.rec.by;
    if (ui.note && ui.note.on) await ACT.noteStop();
    if (ui.note && ui.note.clip) { const id = 'n' + Date.now().toString(36); try { await Clips.put('n:' + id, ui.note.clip); entry.voice = id; } catch (e) { /* storage full: keep the written entry */ } }
    Store.log(entry); Sound.stop(); location.hash = '#/sky';
  },
  // ----- family voices -----
  recNew: () => { const kid = solo(); if (kid) ACT.recStart({ dataset: { id: kid.name } }); else { ui.pick = true; render(); } },
  recStart: (el) => {
    const name = (el.dataset.id || (app.querySelector('#recName') || {}).value || '').trim(); if (!name) return;
    Sound.unlock(); Voice.prime();
    ui.pick = false; ui.mode = 'rec'; ui.rec = { id: 'v' + Date.now().toString(36), by: name, takes: {}, cues: [], saved: false };
    lastKey = ''; location.hash = `#/s/${route.id}/read`;
  },
  recGo: async () => {
    const r = ui.rec; if (!r || Mic.on) return;
    Voice.stop();
    try { await Mic.open(); } catch (e) { alert(MIC_MSG); return; }
    r.cues = []; Mic.start(); startTick(600, () => ACT.recStop()); render();
  },
  recStop: async () => {
    const r = ui.rec; if (!r || !Mic.on) return;
    stopTick(); const page = ui.page, clip = await Mic.stop();
    if (clip) { clip.cues = r.cues; try { await Clips.put(`r:${r.id}:${page}`, clip); r.takes[page] = { dur: clip.dur }; } catch (e) { alert('جا برای ذخیرهٔ صدا نیست.'); } }
    render();
  },
  recHear: async () => { Voice.prime(); if (Voice.loaded && !Voice.paused) { Voice.stop(); return; } const clip = await Clips.get(`r:${ui.rec.id}:${ui.page}`); if (clip) Voice.play(clip); },
  recSave: () => {
    const r = ui.rec; if (!r) return; const takes = Object.values(r.takes);
    Store.d.recs.push({ id: r.id, story: route.id, ver: ui.ver, lang: langOf(ui.story), by: r.by, t: Date.now(), pages: takes.length, dur: takes.reduce((a, x) => a + x.dur, 0) });
    Store.save(); r.saved = true;
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
    location.hash = '#/s/' + route.id;
  },
  recDel: async (el) => {
    const r = Store.d.recs.find((x) => x.id === el.dataset.id); if (!r || !confirm(`صدای ${r.by} برای این قصه پاک شود؟`)) return;
    for (let i = 0; i < r.pages; i++) await Clips.del(`r:${r.id}:${i}`).catch(() => {});
    Store.d.recs = Store.d.recs.filter((x) => x !== r); Store.save(); render();
  },
  recSend: async (el) => {
    const r = Store.d.recs.find((x) => x.id === el.dataset.id); if (!r) return; const pages = [];
    for (let i = 0; i < r.pages; i++) { const c = await Clips.get(`r:${r.id}:${i}`).catch(() => null); if (!c) { alert('صدای این قصه روی این دستگاه کامل نیست.'); return; } pages.push({ mime: c.mime, dur: c.dur, cues: c.cues || [], b64: toB64(c.buf) }); }
    const file = new File([JSON.stringify({ app: 'qasas-voice', v: 1, meta: r, pages })], `qasas-voice-${r.story}-${r.id}.json`, { type: 'application/json' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], title: 'قصص' }); return; } catch (e) { if (e.name === 'AbortError') return; } }
    const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = file.name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  },
  playRec: (el) => {
    const r = Store.d.recs.find((x) => x.id === el.dataset.id); if (!r) return;
    Sound.unlock(); Voice.prime(); Sound.volume(set().vol * 0.5); Sound.ambienceOn(set().amb);
    ui.mode = 'play'; ui.play = { rec: r, paused: false, missing: false }; ui.ver = r.ver; ui.lang = r.lang;
    playKey = ''; lastKey = ''; location.hash = `#/s/${r.story}/read`;
  },
  voiceToggle: () => {
    const p = ui.play; if (!p) return; Voice.prime();
    if (p.paused) { p.paused = false; if (Voice.loaded) Voice.resume(); else { playKey = ''; } } else { p.paused = true; Voice.pause(); }
    render();
  },
  // ----- children's voice note on the last page -----
  noteGo: async () => {
    Sound.unlock(); Voice.stop();
    try { await Mic.open(); } catch (e) { alert(MIC_MSG); return; }
    Sound.ambience(null); Mic.start(); ui.note = { on: true }; startTick(30, () => ACT.noteStop()); refreshNote();
  },
  noteStop: async () => { if (!ui.note || !ui.note.on) return; stopTick(); const clip = await Mic.stop(); ui.note = clip ? { clip } : null; refreshNote(); },
  noteHear: () => { Voice.prime(); if (Voice.loaded && !Voice.paused) { Voice.stop(); return; } if (ui.note && ui.note.clip) Voice.play(ui.note.clip); },
  noteDrop: () => { Voice.stop(); ui.note = null; refreshNote(); },
  playNote: async (el) => { Voice.prime(); const clip = await Clips.get('n:' + el.dataset.id).catch(() => null); if (clip) Voice.play(clip); else alert('این صدا روی این دستگاه نیست.'); },
  kidAdd: () => { const n = app.querySelector('#newName').value.trim(), a = +app.querySelector('#newAge').value; if (!n || !a) return; Store.addKid(n, a); render(); },
  kidDel: (el) => { const k = Store.kid(el.dataset.id); if (k && confirm(`«${k.name}» از فهرست حذف شود؟ دفتر قصه‌ها می‌ماند.`)) { Store.removeKid(k.id); render(); } },
  export: () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([Store.exportText()], { type: 'application/json' })); a.download = `qasas-${new Date().toISOString().slice(0, 10)}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); },
};
function refreshNote() { const box = app.querySelector('.vnote'); if (box) box.innerHTML = noteCtl(); }
const CHG = {
  voiceIn: async (el) => {
    const f = el.files[0]; if (!f) return;
    try {
      const o = JSON.parse(await f.text()); if (o.app !== 'qasas-voice' || !o.meta || !byId[o.meta.story] || !Array.isArray(o.pages)) throw new Error('bad file');
      const id = 'v' + Date.now().toString(36);
      for (let i = 0; i < o.pages.length; i++) { const pg = o.pages[i]; await Clips.put(`r:${id}:${i}`, { buf: fromB64(pg.b64), mime: pg.mime, dur: pg.dur, cues: pg.cues || [] }); }
      Store.d.recs.push({ ...o.meta, id, pages: o.pages.length }); Store.save(); render();
      alert(`صدای ${o.meta.by} برای «${byId[o.meta.story].fa}» افزوده شد.`);
    } catch (e) { alert('این فایل، صدای ضبط‌شدهٔ قصص نیست.'); }
  },
  checked: () => { Store.toggleChecked(route.id); render(); },
  kidName: (el) => { const k = Store.kid(el.dataset.id); if (k && el.value.trim()) { k.name = el.value.trim(); Store.save(); } },
  kidAge: (el) => { const k = Store.kid(el.dataset.id); if (k && +el.value > 0) { k.born = new Date().getFullYear() - +el.value; Store.save(); } },
  size: (el) => { set().size = +el.value; Store.save(); applyTheme(); },
  vol: (el) => { set().vol = +el.value; Store.save(); Sound.volume(set().vol); },
  amb: (el) => { set().amb = el.checked; Store.save(); Sound.ambienceOn(set().amb); },
  src: (el) => { set().src = el.checked; Store.save(); },
  import: async (el) => { const f = el.files[0]; if (!f) return; try { if (!confirm('دفتر فعلی با این پشتیبان جایگزین شود؟')) return; Store.importText(await f.text()); applyTheme(); render(); } catch (e) { alert('این فایل، پشتیبانِ قصص نیست.'); } },
};
app.addEventListener('click', (e) => { const el = e.target.closest('[data-act]'); if (el && ACT[el.dataset.act]) ACT[el.dataset.act](el, e); });
app.addEventListener('change', (e) => { const el = e.target.closest('[data-chg]'); if (el && CHG[el.dataset.chg]) CHG[el.dataset.chg](el, e); });
app.addEventListener('input', (e) => { const el = e.target.closest('input[type=range][data-chg]'); if (el && CHG[el.dataset.chg]) CHG[el.dataset.chg](el, e); });

// swipe to turn pages (like a book: Farsi pages turn the other way)
let sx = null, sy = null;
app.addEventListener('touchstart', (e) => { if (route.v !== 'read') return; sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
app.addEventListener('touchend', (e) => {
  if (route.v !== 'read' || sx === null) return;
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
  if (Math.abs(dx) < 70 || Math.abs(dy) > 50 || e.target.closest('button,textarea,input')) return;
  const rtl = ui.lang !== 'en' || !ui.story.title.en; turn((dx > 0) === rtl ? 1 : -1);
}, { passive: true });
document.addEventListener('keydown', (e) => {
  if (route.v !== 'read' || e.target.closest('textarea,input')) return;
  const rtl = ui.lang !== 'en';
  if (e.key === 'ArrowLeft') turn(rtl ? 1 : -1); if (e.key === 'ArrowRight') turn(rtl ? -1 : 1);
});
document.addEventListener('visibilitychange', () => { if (!document.hidden && route.v === 'read') keepAwake(true); });
window.addEventListener('hashchange', go);

if ('serviceWorker' in navigator && !['localhost', '127.0.0.1'].includes(location.hostname)) {
  const hadWorker = !!navigator.serviceWorker.controller;
  let fresh = false, done = false;
  const reloadIfIdle = () => { if (fresh && !done && route.v !== 'read') { done = true; location.reload(); } };
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadWorker) { fresh = true; reloadIfIdle(); } });
  window.addEventListener('hashchange', () => setTimeout(reloadIfIdle, 0));
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
go();

import { Sound, CUE_LABEL, AMB_LABEL } from './audio.js';
import { scene, cover } from './art/scenes.js';
import { CATALOG, GROUPS } from '../content/catalog.js';
import { Store } from './store.js';

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
  fa: { next: 'بعدی', prev: 'قبلی', start: 'شروع قصه', short: 'کوتاه', full: 'کامل', min: 'دقیقه', prep: 'پیش از خواندن', words: 'واژه‌ها', care: 'حواستان باشد', roots: 'ریشهٔ قصه', ours: 'آنچه ما افزوده‌ایم', left: 'آنچه نیاورده‌ایم', talk: 'حرف بزنیم', lesson: 'درس قصه', keep: 'با هم تکرار کنیم', who: 'چه کسانی شنیدند؟', liked: 'چقدر دوستش داشتید؟', likedSolo: 'چقدر دوستش داشتی؟', note: 'یادداشت: بچه‌ها چه گفتند یا پرسیدند؟', save: 'ثبت و پایان', end: 'پایان قصه', srcOn: 'نمایش منبع', checked: 'خودم بازبینی کردم', caution: 'پیش از خواندن بدانید', page: 'صفحه', everyone: 'همه', back: 'بازگشت', strength: 'اعتبار', version: 'اندازه', lang: 'زبان', tapSound: 'برای صدا، روی این دکمه‌ها بزنید', gold: 'رنگ طلایی یعنی عینِ متنِ منبع' },
  en: { next: 'Next', prev: 'Back', start: 'Start the story', short: 'Short', full: 'Full', min: 'min', prep: 'Before you read', words: 'Words', care: 'Take care', roots: 'Roots of the story', ours: 'What we added', left: 'What we left out', talk: "Let's talk", lesson: 'The lesson', keep: 'Say it together', who: 'Who listened?', liked: 'How much did you like it?', likedSolo: 'How much did you like it?', note: 'Note: what did the children say or ask?', save: 'Save and finish', end: 'The end', srcOn: 'Show sources', checked: 'I have checked this myself', caution: 'Know this before reading', page: 'Page', everyone: 'Everyone', back: 'Back', strength: 'How solid', version: 'Length', lang: 'Language', tapSound: 'Tap these buttons for sound', gold: 'Gold ink marks words taken from the source' },
};
const SEAL = {
  fa: { Q: 'قرآن', 'Q+H': 'قرآن و روایت', 'Q+T': 'قرآن و تاریخ', H: 'حدیث', T: 'نقل تاریخی' },
  en: { Q: "Qur'an", 'Q+H': "Qur'an + hadith", 'Q+T': "Qur'an + history", H: 'Hadith', T: 'Historical report' },
};

const ui = { group: 'all', show: 'all', ver: 'full', lang: 'fa', page: 0, stars: 0, sheet: null, story: null };
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
    </div>
    <a class="btn big" href="#/s/${c.id}/read" data-act="begin">${t.start}</a>
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
function reader(c) {
  const st = ui.story; if (!st) return '';
  const lang = st.title.en && ui.lang === 'en' ? 'en' : 'fa', t = T[lang], dir = lang === 'en' ? 'ltr' : 'rtl', kid = solo();
  const pages = pagesOf(st), last = ui.page >= pages.length, pg = pages[Math.min(ui.page, pages.length - 1)];
  const dots = pages.map((_, i) => `<i class="${i === ui.page ? 'on' : i < ui.page ? 'past' : ''}"></i>`).join('') + `<i class="fin ${last ? 'on' : ''}"></i>`;
  const bar = `<header class="rbar"><a class="icon" href="#/s/${c.id}" aria-label="${t.back}">${I.x}</a><span class="ttl">${esc(st.title[lang])}</span>
    <button class="icon ${set().amb ? 'on' : ''}" data-act="amb" aria-label="sound">${set().amb ? I.sound : I.mute}</button>
    ${kid ? '' : `<button class="icon ${set().src ? 'on' : ''}" data-act="src" aria-label="${t.srcOn}">${I.root}</button>`}
    <button class="icon txt" data-act="size">Aa</button></header>`;
  let body;
  if (!last) {
    const paras = pg[lang] || pg.fa;
    const refs = (pg.refs || []).map((id) => st.roots.list.find((x) => x.id === id)).filter(Boolean);
    body = `<div class="rart">${scene(pg.art)}${pg.amb && AMB_LABEL[pg.amb] ? `<span class="amb">♪ ${AMB_LABEL[pg.amb][lang]}</span>` : ''}</div>
      <article class="rtext">${paras.map((x) => `<p>${rich(x, lang, !!kid)}</p>`).join('')}
      ${!kid && set().src && refs.length ? `<div class="refs">${refs.map((x) => `<button class="chip ref" data-act="sheet" data-id="${x.id}">${I.root} ${esc(x.ref[lang] || x.ref.fa)}</button>`).join('')}</div>` : ''}</article>`;
  } else {
    const kids = Store.d.kids, k = st.keep;
    body = `<div class="rart">${scene(pages[pages.length - 1].art)}</div><article class="rtext end">
      <h2>${t.end}</h2>
      ${st.lesson ? `<div class="box"><h4>${t.lesson}</h4><p>${esc(st.lesson[lang] || st.lesson.fa)}</p></div>` : ''}
      ${st.talk ? `<div class="box"><h4>${t.talk}</h4><ul>${(st.talk[lang] || st.talk.fa).map((q) => `<li>${esc(q)}</li>`).join('')}</ul></div>` : ''}
      ${k ? `<div class="box keep"><h4>${t.keep}</h4>${k.ar ? `<p class="ar" lang="ar" dir="rtl">${esc(k.ar)}</p>` : ''}<p>${esc(k[lang] || k.fa)}</p><small>${esc(k.ref[lang] || k.ref.fa)}</small></div>` : ''}
      <div class="box logbox">
        ${kid ? '' : kids.length ? `<h4>${t.who}</h4><div class="kidrow">${kids.map((x) => `<label class="pill"><input type="checkbox" name="kid" value="${x.id}" checked> ${esc(x.name)}</label>`).join('')}</div>` : ''}
        <h4>${kid ? t.likedSolo : t.liked}</h4><div class="stars">${[1, 2, 3].map((n) => `<button class="${ui.stars >= n ? 'on' : ''}" data-act="stars" data-id="${n}" aria-label="${n}">${I.star}</button>`).join('')}</div>
        ${kid ? '' : `<textarea id="note" rows="2" placeholder="${t.note}"></textarea>`}
        <button class="btn big" data-act="save">${t.save}</button></div></article>`;
  }
  const sheet = ui.sheet ? (() => { const x = st.roots.list.find((y) => y.id === ui.sheet); return x ? `<div class="sheet" data-act="closeSheet"><div class="inner"><h5>${esc(x.ref[lang] || x.ref.fa)}</h5>${x.ar ? `<p class="ar" lang="ar" dir="rtl">${esc(x.ar)}</p>` : ''}${x.gloss ? `<p>${esc(x.gloss[lang] || x.gloss.fa)}</p>` : ''}<button class="btn ghost" data-act="closeSheet">${t.back}</button></div></div>` : ''; })() : '';
  return `<div class="reader" dir="${dir}" lang="${lang}">${bar}<div class="rbody">${body}</div>
    <footer class="rnav"><button class="btn ghost" data-act="prev" ${ui.page === 0 ? 'disabled' : ''}>${t.prev}</button><div class="dots">${dots}</div><button class="btn" data-act="next" ${last ? 'disabled' : ''}>${t.next}</button></footer>${sheet}</div>`;
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
    ${hist.length ? `<ul class="hist">${hist.map((l) => { const s = byId[l.id]; const names = (l.kids || []).map((id) => (Store.kid(id) || {}).name).filter(Boolean).join('، '); return `<li><a href="#/s/${l.id}"><b>${esc(s ? s.fa : l.id)}</b></a><span class="st">${'★'.repeat(l.stars || 0)}</span><small>${fmt.format(new Date(l.t))}${names ? ' · ' + esc(names) : ''}${l.by && l.by !== 'parent' ? ' · خودش خواند' : ''}${l.ver === 'short' ? ' · کوتاه' : ''}</small>${l.note ? `<p>${esc(l.note)}</p>` : ''}</li>`; }).join('')}</ul>` : '<p class="empty">هنوز قصه‌ای ثبت نشده است.</p>'}</main>`;
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
let route = { v: 'home' }, lastKey = '';
async function go() {
  route = parse(); applyTheme();
  const key = route.v + (route.id || '');
  if (route.v === 'intro' || route.v === 'read') {
    const c = byId[route.id];
    ui.story = c && c.ready ? await loadStory(c.id).catch(() => null) : null;
    if (route.v === 'read' && !ui.story) { location.hash = '#/s/' + route.id; return; }
    if (key !== lastKey && route.v === 'read') { ui.page = 0; ui.stars = 0; ui.sheet = null; }
  }
  if (route.v !== 'read') { Sound.stop(); keepAwake(false); }
  render(); if (key !== lastKey) window.scrollTo(0, 0); lastKey = key;
}
function render() {
  const c = byId[route.id];
  document.body.className = 'v-' + route.v;
  app.innerHTML = route.v === 'home' ? home() : route.v === 'intro' ? intro(c) : route.v === 'read' ? reader(c) : route.v === 'sky' ? sky() : settings();
  if (route.v === 'read') {
    const pages = pagesOf(ui.story), pg = pages[ui.page];
    Sound.ambience(pg ? pg.amb : pages[pages.length - 1].amb);
    keepAwake(true);
    const b = app.querySelector('.rbody'); if (b) b.scrollTop = 0;
  }
}
function turn(d) {
  const pages = pagesOf(ui.story), n = Math.max(0, Math.min(pages.length, ui.page + d));
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
  begin: () => { Sound.unlock(); Sound.volume(set().vol); Sound.ambienceOn(set().amb); },
  cue: (el) => { Sound.unlock(); Sound.cue(el.dataset.id); el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); },
  amb: () => { Sound.unlock(); set().amb = !set().amb; Store.save(); Sound.ambienceOn(set().amb); render(); },
  src: () => { set().src = !set().src; Store.save(); render(); },
  size: () => { const steps = [1, 1.15, 1.3, 0.9]; set().size = steps[(steps.indexOf(set().size) + 1) % steps.length] || 1; Store.save(); applyTheme(); },
  next: () => turn(1), prev: () => turn(-1),
  sheet: (el) => { ui.sheet = el.dataset.id; render(); },
  closeSheet: (el, e) => { if (e.target.closest('.inner') && !e.target.closest('button')) return; ui.sheet = null; render(); },
  stars: (el) => { ui.stars = +el.dataset.id; app.querySelectorAll('.stars button').forEach((b, i) => b.classList.toggle('on', i < ui.stars)); },
  save: () => {
    const kid = solo(), note = (app.querySelector('#note') || {}).value || '';
    const kids = kid ? [kid.id] : [...app.querySelectorAll('input[name=kid]:checked')].map((x) => x.value);
    Store.log({ id: route.id, kids, ver: ui.ver, lang: ui.lang, stars: ui.stars, note: note.trim(), by: kid ? kid.id : 'parent' });
    Sound.stop(); location.hash = '#/sky';
  },
  kidAdd: () => { const n = app.querySelector('#newName').value.trim(), a = +app.querySelector('#newAge').value; if (!n || !a) return; Store.addKid(n, a); render(); },
  kidDel: (el) => { const k = Store.kid(el.dataset.id); if (k && confirm(`«${k.name}» از فهرست حذف شود؟ دفتر قصه‌ها می‌ماند.`)) { Store.removeKid(k.id); render(); } },
  export: () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([Store.exportText()], { type: 'application/json' })); a.download = `qasas-${new Date().toISOString().slice(0, 10)}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); },
};
const CHG = {
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

if ('serviceWorker' in navigator && !['localhost', '127.0.0.1'].includes(location.hostname)) navigator.serviceWorker.register('sw.js').catch(() => {});
go();

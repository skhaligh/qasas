// Pictures for the second batch of stories. Same rule as lib.js:
// places, objects, animals and nature only; nothing the sources do not support.
import * as L from './lib.js';
const { P } = L;

export default function add(S, H) {
  const { R, E, Pth, floor, woodPile, ridgeArmy, toys, room, windowArch, lane, laneDoors, stones, idolBits } = H;
  const G = (x, y, s, inner, flip = false) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})">${inner}</g>`;

  // ---------- shared pieces ----------
  const sheep = (x, y, s = 1, flip = false, wool = '#f4f1ea') => G(x, y, s, `<rect x="-16" y="-14" width="5" height="16" fill="#3a3436"/><rect x="10" y="-14" width="5" height="16" fill="#3a3436"/><ellipse cx="0" cy="-24" rx="26" ry="16" fill="${wool}"/><circle cx="-16" cy="-30" r="10" fill="${wool}"/><circle cx="2" cy="-36" r="11" fill="${wool}"/><circle cx="16" cy="-28" r="10" fill="${wool}"/><ellipse cx="29" cy="-30" rx="9" ry="7" fill="#3a3436"/><ellipse cx="24" cy="-37" rx="4" ry="2.5" fill="#3a3436"/>`, flip);
  const goat = (x, y, s = 1, flip = false) => G(x, y, s, `<g fill="#7a5a44"><rect x="-18" y="-20" width="5" height="22"/><rect x="-8" y="-20" width="5" height="22"/><rect x="10" y="-20" width="5" height="22"/><rect x="18" y="-20" width="5" height="22"/><ellipse cx="2" cy="-30" rx="28" ry="14"/><path d="M22 -36 L36 -56 L46 -50 L34 -28Z"/><ellipse cx="44" cy="-56" rx="11" ry="7"/><path d="M42 -50 l2 12 l4 -11Z"/><path d="M-26 -34 l-8 -8 l4 12Z"/></g><path d="M40 -62 q-6 -14 -16 -14 M46 -62 q-2 -14 -10 -18" stroke="#3a2a20" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="48" cy="-58" r="1.8" fill="#1a1410"/><ellipse cx="-2" cy="-17" rx="7" ry="5" fill="#e8c9b0"/>`, flip);
  const hoopoe = (x, y, s = 1, flip = false) => G(x, y, s, `<path d="M-46 4 L-80 -6 L-76 14 L-46 12Z" fill="#2a2420"/><path d="M-70 -2 l8 14 M-60 0 l8 12" stroke="#f4f1ea" stroke-width="3"/><ellipse cx="-14" cy="6" rx="36" ry="16" fill="#d98a4e"/><g class="flap"><path d="M-30 2 Q-14 -66 30 -44 Q10 -20 6 4Z" fill="#2a2420"/><path d="M-16 -20 Q0 -40 20 -34 M-22 -6 Q-2 -26 14 -22" stroke="#f4f1ea" stroke-width="4" fill="none"/></g><circle cx="24" cy="-6" r="13" fill="#e09a5c"/><path d="M34 -8 L68 0 L34 0Z" fill="#3a2a20"/><circle cx="28" cy="-9" r="2.2" fill="#1a1410"/>${[-52, -34, -16, 2, 20].map((a) => `<g transform="rotate(${a} 22 -12)"><path d="M22 -12 L18 -44 L26 -44Z" fill="#e09a5c"/><circle cx="22" cy="-45" r="4" fill="#2a2420"/></g>`).join('')}`, flip);
  const dog = (x, y, s = 1, flip = false, c = '#c9a06a') => G(x, y, s, `<ellipse cx="-10" cy="-14" rx="40" ry="15" fill="${c}"/><path d="M-46 -16 q-22 -6 -20 12 q8 -8 20 -2Z" fill="${c}"/><rect x="18" y="-10" width="46" height="9" rx="4.5" fill="${c}"/><rect x="14" y="-3" width="44" height="8" rx="4" fill="#b98d58"/><circle cx="34" cy="-28" r="14" fill="${c}"/><path d="M24 -38 l-6 -14 l14 6Z M38 -40 l4 -14 l8 12Z" fill="#8a6a44"/><ellipse cx="46" cy="-23" rx="9" ry="6" fill="#b98d58"/><circle cx="53" cy="-25" r="2.5" fill="${P.ink}"/><path d="M32 -31 q4 3 8 0" stroke="${P.ink}" stroke-width="1.6" fill="none"/>`, flip);
  const tree = (x, y, s = 1, leaf = P.leaf2, fruit = '#d4472a', seed = 1) => { const r = L.rng(seed); let f = ''; if (fruit) for (let i = 0; i < 8; i++) f += `<circle cx="${Math.round((r() - 0.5) * 76)}" cy="${Math.round(-74 - r() * 50)}" r="5.5" fill="${fruit}"/>`; return G(x, y, s, `<path d="M-6 0 L-4 -60 L4 -60 L6 0Z" fill="${P.wood3}"/><circle cx="-22" cy="-84" r="28" fill="${leaf}"/><circle cx="22" cy="-84" r="28" fill="${leaf}"/><circle cx="0" cy="-108" r="30" fill="${leaf}"/><circle cx="0" cy="-76" r="26" fill="${leaf}"/>${f}`); };
  const burnt = (x, y, s = 1) => G(x, y, s, `<g stroke="#17131a" stroke-linecap="round" fill="none"><path d="M0 0 L0 -70" stroke-width="9"/><path d="M0 -50 L-30 -92 M0 -60 L28 -100 M0 -70 L-6 -118 M-18 -74 L-40 -78 M16 -82 L40 -80" stroke-width="5"/></g>`);
  const idol = (x, y, s = 1, c = ['#6d6672', '#8b8490', '#9a939f']) => G(x, y, s, `<rect x="-30" y="-16" width="60" height="16" fill="${c[0]}"/><path d="M-20 -16 L-16 -96 Q0 -110 16 -96 L20 -16Z" fill="${c[1]}"/><rect x="-14" y="-126" width="28" height="30" rx="6" fill="${c[2]}"/><rect x="-8" y="-116" width="5" height="3" fill="#4b4552"/><rect x="3" y="-116" width="5" height="3" fill="#4b4552"/>`);
  const temple = () => L.sky('room') + floor(400, '#3b2a22') + [70, 230, 570, 730].map((x) => R(x - 18, 60, 36, 350, '#5d4a40') + R(x - 28, 50, 56, 16, '#75604f') + R(x - 28, 400, 56, 14, '#75604f')).join('');
  const kaaba = (x, y, w, h, full = true) => {
    let s = R(x - w / 2, y - h, w, h, '#8f857c'); const rows = Math.max(1, Math.round(h / 22)), rh = h / rows;
    for (let i = 0; i < rows; i++) { const yy = y - (i + 1) * rh; s += `<line x1="${x - w / 2}" y1="${yy}" x2="${x + w / 2}" y2="${yy}" stroke="#6a6058" stroke-width="2"/>`; for (let j = (i % 2 ? 0.5 : 1); j < 6; j++) s += `<line x1="${x - w / 2 + j * (w / 6)}" y1="${yy}" x2="${x - w / 2 + j * (w / 6)}" y2="${yy + rh}" stroke="#6a6058" stroke-width="2"/>`; }
    if (full) s += R(x - w / 2 - 4, y - h - 6, w + 8, 8, '#6a6058') + R(x + w * 0.12, y - h * 0.5, w * 0.2, h * 0.5, '#2a221c');
    return s;
  };
  const rocks = (pts, fill = '#8f857c') => pts.map(([x, y, r = 16]) => E(x, y, r, r * 0.6, fill)).join('');
  const chest = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="bob"><rect x="-44" y="-34" width="88" height="34" rx="4" fill="${P.wood2}"/><path d="M-44 -34 Q0 -58 44 -34Z" fill="${P.wood1}"/><rect x="-44" y="-22" width="88" height="5" fill="${P.wood4}"/><rect x="-6" y="-30" width="12" height="14" rx="2" fill="${P.gold}"/></g></g>`;
  const well = (x, y, s = 1) => G(x, y, s, `<rect x="-58" y="-150" width="8" height="150" fill="${P.wood3}"/><rect x="50" y="-150" width="8" height="150" fill="${P.wood3}"/><rect x="-66" y="-156" width="132" height="10" rx="4" fill="${P.wood4}"/><line x1="0" y1="-146" x2="0" y2="-70" stroke="#d8c8a0" stroke-width="3"/><path d="M-14 -70 L14 -70 L10 -44 L-10 -44Z" fill="${P.wood2}"/><ellipse cx="0" cy="-4" rx="70" ry="18" fill="#7d7a80"/><rect x="-70" y="-40" width="140" height="36" fill="#9c999f"/><ellipse cx="0" cy="-40" rx="70" ry="18" fill="#bdbac0"/><ellipse cx="0" cy="-40" rx="54" ry="12" fill="${P.sea3}"/>`);
  const trough = (x, y, s = 1) => G(x, y, s, `<path d="M-80 -22 L80 -22 L70 0 L-70 0Z" fill="#9c999f"/><path d="M-76 -22 L76 -22 L72 -13 L-72 -13Z" fill="${P.sea1}"/>`);
  const throne = (x, y, s = 1) => G(x, y, s, `<rect x="-90" y="-20" width="180" height="20" fill="#8a6a2a"/><rect x="-70" y="-40" width="140" height="20" fill="#a9822f"/><rect x="-44" y="-170" width="88" height="130" rx="8" fill="${P.gold}"/><path d="M-44 -166 Q0 -214 44 -166Z" fill="#f0c868"/><rect x="-52" y="-100" width="104" height="60" rx="6" fill="${P.terra}"/><rect x="-62" y="-110" width="16" height="70" rx="5" fill="#a9822f"/><rect x="46" y="-110" width="16" height="70" rx="5" fill="#a9822f"/><circle cx="0" cy="-150" r="9" fill="${P.sea1}"/>`);
  const scroll = (x, y, s = 1, rot = 0) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><rect x="-40" y="-9" width="80" height="18" rx="9" fill="#f1e2c0"/><circle cx="-40" cy="0" r="10" fill="#e3cf9f"/><circle cx="40" cy="0" r="10" fill="#e3cf9f"/><rect x="-5" y="-11" width="10" height="22" fill="${P.terra}"/></g>`;
  const tray = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="0" rx="90" ry="20" fill="#b98d3a"/><ellipse cx="0" cy="-5" rx="80" ry="15" fill="${P.gold}"/>` + [[-44, -18, '#d4472a'], [-18, -24, '#f0a030'], [8, -20, '#7a3d8a'], [34, -22, '#d4472a'], [-30, -40, '#8fb548'], [-4, -44, '#f0c040'], [22, -42, '#f08a3c'], [-10, -62, '#d4472a']].map(([cx, cy, c]) => `<circle cx="${cx}" cy="${cy}" r="14" fill="${c}"/><path d="M${cx} ${cy - 13} q3 -7 8 -7" stroke="${P.leaf3}" stroke-width="2.5" fill="none"/>`).join(''));
  const niche = (x, y, w = 200, h = 300, fill = '#3b2a22') => `<path d="M${x - w / 2 - 14} ${y} v${-h + w / 2} a${w / 2 + 14} ${w / 2 + 14} 0 0 1 ${w + 28} 0 v${h - w / 2}Z" fill="${P.clay4}"/><path d="M${x - w / 2} ${y} v${-h + w / 2} a${w / 2} ${w / 2} 0 0 1 ${w} 0 v${h - w / 2}Z" fill="${fill}"/>`;
  const mat = (x, y, w = 200, c = '#2f6f8b') => `<path d="M${x - w / 2} ${y} L${x - w / 2 + 30} ${y - 46} L${x + w / 2 - 30} ${y - 46} L${x + w / 2} ${y}Z" fill="${c}"/><path d="M${x - w / 2 + 16} ${y - 8} L${x - w / 2 + 38} ${y - 40} L${x + w / 2 - 38} ${y - 40} L${x + w / 2 - 16} ${y - 8}Z" fill="none" stroke="${P.gold}" stroke-width="2.5"/>`;
  const hangLamp = (x, y, len = 70) => `<line x1="${x}" y1="${y - len}" x2="${x}" y2="${y}" stroke="${P.gold}" stroke-width="2"/>` + L.glow(x, y + 14, 80, '#ffcf6b', 0.5) + `<path d="M${x - 12} ${y} h24 l-4 22 h-16Z" fill="${P.gold}"/><ellipse cx="${x}" cy="${y + 12}" rx="6" ry="8" fill="#fff0b8"/>`;
  const pcol = (x, top, bottom) => R(x - 11, top, 22, bottom - top, P.wood3) + [0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${x - 11} ${top + 14 + i * ((bottom - top) / 8)} l11 8 l11 -8" stroke="${P.wood4}" stroke-width="2.5" fill="none"/>`).join('');
  const fronds = (x0, x1, y, fill = P.leaf3) => { let s = ''; for (let x = x0; x < x1; x += 80) s += Pth(`M${x} ${y} q40 28 80 0Z`, fill); return s; };
  const openDoor = (x, y, w, h, kind = 'day') => { const c = { day: ['#86c5d8', '#f7e8c6'], dawn: ['#c96f6e', '#f6c98a'] }[kind], i = L.uid('od'), r = w / 2; return `<defs><linearGradient id="${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><path d="M${x - r - 16} ${y} v${-h + r - 8} a${r + 16} ${r + 16} 0 0 1 ${w + 32} 0 v${h - r + 8}Z" fill="${P.clay4}"/><path d="M${x - r} ${y} v${-h + r} a${r} ${r} 0 0 1 ${w} 0 v${h - r}Z" fill="url(#${i})"/>`; };
  const smallDoor = (x, y, w, h) => `<path d="M${x - w / 2 - 6} ${y} v${-h + w / 2} a${w / 2 + 6} ${w / 2 + 6} 0 0 1 ${w + 12} 0 v${h - w / 2}Z" fill="${P.clay4}"/><path d="M${x - w / 2} ${y} v${-h + w / 2} a${w / 2} ${w / 2} 0 0 1 ${w} 0 v${h - w / 2}Z" fill="${P.wood3}"/><circle cx="${x + w * 0.22}" cy="${y - h * 0.4}" r="4" fill="${P.gold}"/>`;
  const coin = (x, y, gold = true) => E(x, y, 17, 7, gold ? '#b98d3a' : '#9aa0aa') + E(x, y - 3, 17, 7, gold ? P.gold : '#d9dce2');
  const bits = (pts) => pts.map(([x, y, r = 0]) => `<path transform="rotate(${r} ${x} ${y})" d="M${x - 20} ${y} q8 -14 22 -10 q14 2 16 10 q-18 6 -38 0Z" fill="#d9a55c"/><path transform="rotate(${r} ${x} ${y})" d="M${x - 14} ${y - 2} q8 -8 18 -6" stroke="#e9c07c" stroke-width="3" fill="none"/>`).join('');
  const palace = (x, y, w, h, wall = '#f1dfbd', cols = 5) => { let s = R(x - w / 2, y - h, w, h, wall) + R(x - w / 2 - 10, y - h - 14, w + 20, 16, '#b98d3a'); for (let i = 0; i < cols; i++) { const cx = x - w / 2 + (w / cols) * (i + 0.5); s += R(cx - 9, y - h + 8, 18, h - 8, '#fbf3df') + R(cx - 13, y - h + 2, 26, 8, '#d6ac7c'); } return s; };

  // ---------- 7. Ibrahim and the stars ----------
  const nightHills = () => L.peaks(360, '#141838', 3, 5, 70) + L.land(400, '#1b1838', 4, 20) + L.palm(120, 424, 120, 8, '#0d0f24', '#0d0f24') + L.palm(700, 432, 100, -8, '#0d0f24', '#0d0f24') + L.land(455, '#0f1230', 6, 12);
  S.str1 = () => L.sky('night') + L.stars(71, 36, 300) + L.glow(520, 130, 100, '#fff6d8', 0.7) + `<path class="tw" d="M520 92 L529 121 L558 130 L529 139 L520 168 L511 139 L482 130 L511 121Z" fill="#fff6d8"/>` + nightHills();
  S.str2 = () => L.sky('night') + L.stars(72, 44, 240) + L.moon(400, 240, 74, false) + nightHills();
  S.str3 = () => L.sky('dawn') + L.sun(400, 300, 84) + L.peaks(360, '#5a3f72', 3, 5, 70) + L.land(400, '#8a5a6a', 4, 20) + L.palm(120, 424, 120, 8, '#3a2444', '#3a2444') + L.palm(700, 432, 100, -8, '#3a2444', '#3a2444') + L.land(455, '#6a4458', 6, 12) + L.flock(300, 130, 5, 6, 120, 1.1);
  S.str4 = () => L.sky('dusk') + L.stars(74, 16, 170) + L.land(330, '#6b5178', 3, 30) + L.land(390, '#5a4470', 5, 22)
    + Pth('M330 500 Q420 440 380 404 Q350 376 430 352 L446 354 Q400 382 430 406 Q490 446 450 500Z', '#a98ab0', 'opacity=".55"') + L.palm(660, 400, 110, -8, '#2a1f44', '#2a1f44') + L.land(456, '#3a2a55', 9, 12);

  // ---------- 8. Ibrahim and the idols ----------
  S.idl1 = () => temple() + Pth('M330 0 L470 0 L560 500 L240 500Z', '#f3d9a0', 'opacity=".12"') + idol(150, 430, 1.2) + idol(290, 446, 1) + idol(520, 446, 1) + idol(650, 430, 1.2) + idol(400, 442, 2.1);
  S.idl2 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(200, 90, 1) + L.town(320, 81, 8, [P.clay1, P.clay2, '#eedcb8'], 0, 0, 800, 40, 80)
    + palace(400, 322, 220, 140, '#b9a48a', 4) + Pth('M378 322 v-50 a22 22 0 0 1 44 0 v50Z', '#2a1d18') + L.land(324, P.sand1, 3, 6)
    + Pth('M290 500 L380 324 L420 324 L510 500Z', '#f3e3bb') + L.steps(396, 480, 7, 3, -22, P.sand4, 1.4) + L.palm(110, 420, 140, 8) + L.palm(700, 426, 130, -8) + L.land(480, P.sand3, 9, 5);
  S.idl3 = () => temple() + Pth('M300 0 L500 0 L620 500 L180 500Z', '#f3d9a0', 'opacity=".16"') + idolBits(150, 452, 1.4) + idolBits(650, 458, 1.5) + idolBits(300, 476, 0.9) + idol(400, 472, 3);

  // ---------- 13. The House of God ----------
  const valley = (far = P.rock1, near = P.rock2) => L.peaks(300, far, 3, 4, 160) + L.peaks(350, near, 7, 5, 100) + L.land(384, P.sand2, 4, 10);
  S.kab1 = () => L.sky('day') + L.sun(650, 90, 36) + valley() + L.land(430, P.sand3, 6, 8) + kaaba(400, 436, 190, 22, false) + rocks([[200, 452], [240, 466, 12], [590, 456], [640, 470, 13], [140, 476, 10]]);
  S.kab2 = () => L.sky('dawn') + L.sun(160, 250, 44) + valley('#7a6a90', '#5a4a72') + L.land(430, '#c9a070', 6, 8) + kaaba(400, 440, 200, 110, false) + rocks([[210, 458], [250, 470, 12], [180, 474, 14], [590, 460], [630, 474, 13], [560, 478, 11]]);
  S.kab3 = () => L.sky('day') + L.sun(130, 90, 38) + L.cloud(600, 90, 1) + valley() + L.land(430, P.sand3, 6, 8) + kaaba(400, 440, 210, 220, true) + L.flock(580, 150, 6, 6, 90, 1);
  S.kab4 = () => L.sky('noon') + L.sun(650, 80, 36) + L.peaks(280, P.rock1, 3, 5, 110) + L.land(300, P.sand1, 4, 8) + kaaba(400, 318, 76, 80, true)
    + L.land(330, P.sand2, 5, 8) + Pth('M0 420 Q220 350 372 322 L380 330 Q230 370 0 470Z', '#f3e3bb') + Pth('M800 420 Q580 350 428 322 L420 330 Q570 370 800 470Z', '#f3e3bb') + Pth('M330 500 Q380 400 394 330 L406 330 Q420 400 470 500Z', '#f3e3bb')
    + L.camel(130, 408, 0.6, P.rock3) + L.camel(210, 386, 0.5, P.rock4) + L.camel(280, 368, 0.42, P.rock3)
    + G(670, 408, 0.6, L.camel(0, 0, 1, P.rock3), true) + G(590, 386, 0.5, L.camel(0, 0, 1, P.rock4), true)
    + L.steps(398, 480, 6, 1, -22, P.sand4, 1.3) + L.land(486, P.sand3, 9, 4);

  // ---------- 21. Musa: the chest on the water ----------
  const bank = () => L.land(250, '#cfe0b0', 3, 12) + L.palm(100, 252, 110, 8) + L.palm(720, 254, 120, -8) + L.palm(650, 250, 80, 5);
  const reedsFront = () => L.grass(20, 500, 9, 130, 3, P.leaf3) + L.grass(690, 500, 9, 150, 5, P.leaf2) + L.grass(120, 500, 5, 80, 8, P.leaf1);
  S.mus1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(560, 80, 1.1) + L.land(300, '#cfe0b0', 3, 14) + L.palm(620, 302, 120, -8) + L.palm(690, 306, 90, 6)
    + L.house(170, 302, 160, 96, P.clay1, { win: true }) + L.sea(312, [P.sea1, P.sea2, P.sea3], 4, 120, 56) + reedsFront();
  S.mus2 = () => L.sky('day') + L.cloud(220, 80, 1.1) + bank() + L.sea(262, [P.sea1], 5, 130, 0) + chest(400, 344, 1.5) + L.sea(340, [P.sea2, P.sea3], 5, 120, 62) + reedsFront();
  S.mus3 = () => L.sky('day') + L.sun(660, 90, 36) + palace(330, 300, 460, 200, '#ead2aa', 6) + R(240, 300, 180, 12, '#d0bfa6') + R(220, 312, 220, 12, '#bfae94')
    + L.palm(680, 300, 150, -8) + L.palm(740, 304, 100, 6) + L.sea(322, [P.sea1], 4, 120, 0) + chest(600, 392, 1.1) + L.sea(388, [P.sea2, P.sea3], 5, 120, 56) + L.grass(20, 500, 8, 120, 3, P.leaf3);
  S.mus4 = () => L.sky('night') + L.stars(91, 60, 260) + L.moon(650, 90, 28) + L.town(330, 92, 7, ['#2a2a55', '#232349'], 0.15, 0, 800, 40, 70) + L.land(334, '#262148', 3, 6)
    + L.house(270, 432, 260, 150, '#3d396b', { win: true, lit: true, winAt: 0.75, doorAt: 0.35 }) + L.palm(620, 432, 160, -10, '#1a1838', '#1f3a36') + L.land(436, '#1b1838', 6, 6);

  // ---------- 22. Musa at the water of Madyan ----------
  S.mad1 = () => L.sky('noon') + L.sun(140, 90, 40) + L.land(300, '#e6cf9f', 3, 26) + L.town(306, 101, 4, [P.clay1, P.clay2], 0, 560, 760, 24, 44) + L.palm(540, 306, 60, 4) + L.palm(774, 308, 50, -4)
    + L.land(350, P.sand2, 6, 20) + L.land(420, P.sand3, 9, 12) + L.steps(100, 472, 10, 46, -12, P.sand4, 1.3) + L.shrub(690, 446, 1.2, 3);
  S.mad2 = () => L.sky('day') + L.sun(660, 90, 36) + L.land(290, '#e6cf9f', 3, 20) + L.land(350, P.sand2, 6, 12)
    + sheep(690, 372, 0.7) + sheep(736, 384, 0.7, true) + sheep(650, 390, 0.65)
    + well(360, 414, 1) + trough(520, 430, 1) + sheep(200, 420, 1) + sheep(250, 448, 0.95, false, '#e6e0d2') + sheep(130, 450, 0.9) + sheep(470, 462, 1, false, '#ece7dc') + sheep(590, 464, 1, true) + L.land(476, P.sand3, 9, 5);
  S.mad3 = () => L.sky('day') + L.sun(660, 80, 34) + L.land(300, '#e6cf9f', 3, 20) + L.land(360, P.sand2, 6, 12) + E(300, 436, 190, 26, '#a9773f', 'opacity=".45"')
    + tree(300, 430, 2.5, '#3d8262', null) + trough(590, 440, 1) + sheep(520, 462, 1) + sheep(650, 466, 1, true) + sheep(720, 450, 0.85, true, '#e6e0d2') + L.land(478, P.sand3, 9, 5);
  S.mad4 = () => L.sky('dawn') + L.sun(620, 240, 44) + L.land(300, '#b98a7a', 3, 20) + L.house(250, 424, 320, 170, '#e3c29a', { win: true, winAt: 0.8, doorAt: 0.4 }) + L.palm(650, 424, 170, -10) + L.palm(190, 426, 120, 8)
    + [70, 100, 130, 160, 190].map((x) => R(x, 400, 5, 40, P.wood3)).join('') + R(62, 410, 140, 5, P.wood2) + R(62, 426, 140, 5, P.wood2) + sheep(110, 452, 0.8) + sheep(160, 458, 0.7, true) + L.land(440, P.sand2, 6, 6);

  // ---------- 25. Musa: a road through the sea ----------
  S.bhr1 = () => L.sky('night') + L.stars(111, 70, 260) + L.moon(140, 90, 30) + L.town(300, 112, 9, ['#2a2a55', '#232349', '#30305e'], 0.3, 0, 800, 30, 60) + L.land(304, '#262148', 3, 8)
    + L.land(360, '#2e2a52', 5, 24) + L.land(430, '#1b1838', 8, 14) + L.steps(100, 482, 13, 46, -9, '#6a66a0', 1.3) + L.steps(150, 446, 11, 44, -7, '#6a66a0', 1);
  S.bhr2 = () => L.sky('dawn') + L.sun(400, 190, 56) + L.land(250, '#8a5a6a', 3, 20) + ridgeArmy(262, 5, 24, 0.9) + L.land(266, '#a0685a', 4, 10) + L.dust(250, 284, 1.3, '#e9c3a0', 0.5) + L.dust(560, 290, 1.4, '#e9c3a0', 0.5)
    + L.land(330, '#c99560', 6, 10) + L.steps(300, 396, 6, 30, -8, '#8a563f', 1.2) + L.steps(430, 400, 5, 28, -8, '#8a563f', 1.1) + L.sea(412, [P.sea1, P.sea2, P.sea3], 6, 100, 30);
  S.bhr3 = () => L.sky('day') + L.sun(400, 110, 44) + R(0, 300, 800, 200, P.sea3)
    + Pth('M240 500 L384 300 L416 300 L560 500Z', '#e9d3a0') + Pth('M330 500 L392 300 L408 300 L470 500Z', '#f3e3bb', 'opacity=".6"')
    + Pth('M0 500 L0 130 Q130 96 230 170 Q320 236 384 300 L240 500Z', P.sea1) + Pth('M240 500 L384 300 Q340 268 300 250 L130 500Z', P.sea3, 'opacity=".55"')
    + Pth('M800 500 L800 130 Q670 96 570 170 Q480 236 416 300 L560 500Z', P.sea1) + Pth('M560 500 L416 300 Q460 268 500 250 L670 500Z', P.sea3, 'opacity=".55"')
    + `<path d="M0 130 Q130 96 230 170 Q320 236 384 300 M800 130 Q670 96 570 170 Q480 236 416 300" stroke="#e8f6f8" stroke-width="7" fill="none" stroke-linecap="round"/>`
    + [[90, 250], [150, 340], [60, 410], [710, 250], [650, 340], [740, 410]].map(([x, y], i) => `<path class="ripple" style="animation-delay:${i * 0.4}s" d="M${x - 24} ${y} q12 -8 24 0 q12 8 24 0" stroke="#d8f0f4" stroke-width="2.5" fill="none"/>`).join('')
    + L.steps(398, 484, 5, 1, -30, P.sand4, 1.3);
  S.bhr4 = () => L.sky('day') + L.sun(650, 90, 38) + L.cloud(200, 90, 1.1) + L.sea(230, [P.sea1, P.sea2], 5, 110, 40) + L.land(330, P.sand1, 4, 14) + L.land(400, P.sand2, 7, 10)
    + L.steps(280, 472, 8, 34, -14, P.sand4, 1.3) + L.steps(400, 482, 7, 32, -13, P.sand4, 1.1) + L.palm(710, 404, 150, -10) + L.flock(400, 130, 7, 7, 120, 1.1);

  // ---------- 30. Sulayman and the hoopoe ----------
  const sulPalace = (x, y, s = 1) => G(x, y, s, L.house(-150, 0, 110, 90, P.clay1, { dome: true, domeFill: P.gold, win: true }) + L.house(-50, 0, 140, 140, '#f1dfbd', { dome: true, domeFill: P.gold, win: true, winAt: 0.25 }) + L.house(80, 0, 100, 80, P.clay1, { dome: true, domeFill: P.gold, win: true }));
  S.hud1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(600, 80, 1) + L.land(330, '#a9c79a', 3, 30) + sulPalace(580, 332, 0.9) + L.land(396, P.leaf1, 6, 16)
    + R(110, 372, 480, 8, P.wood3) + R(130, 372, 8, 110, P.wood4) + R(562, 372, 8, 110, P.wood4)
    + L.dove(160, 354, 1) + L.dove(232, 354, 1, '#dfe3e7') + L.dove(304, 354, 1, '#c9b08a') + L.dove(452, 354, 1, '#dfe3e7', true) + L.dove(530, 354, 1, '#eef0f2', true)
    + L.land(468, P.leaf2, 9, 8) + L.flock(300, 150, 11, 7, 130, 1.2);
  S.hud2 = () => L.sky('day') + L.cloud(160, 110, 1.1) + L.cloud(640, 70, 0.9) + L.peaks(390, P.rock1, 4, 5, 70) + L.land(420, '#d8c39a', 3, 20) + L.land(460, P.sand2, 6, 12) + hoopoe(400, 240, 2.3);
  S.hud3 = () => L.sky('noon') + L.sun(400, 104, 64, '#ffd24a') + L.land(330, '#d8c39a', 3, 16) + palace(400, 340, 420, 150, '#f1dfbd', 6) + L.palm(110, 344, 160, 10) + L.palm(700, 344, 160, -10)
    + L.land(352, P.sand2, 5, 8) + throne(400, 452, 1.15) + L.land(476, P.sand3, 8, 5);
  S.hud4 = () => L.sky('day') + L.cloud(620, 90, 1.1) + L.land(370, '#a9c79a', 3, 30) + sulPalace(180, 372, 0.7) + L.land(430, P.leaf1, 6, 16) + L.land(474, P.leaf2, 9, 8) + scroll(398, 292, 1, -8) + hoopoe(430, 220, 2);

  // ---------- 34. Maryam and the fruit of the mihrab ----------
  S.mry1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(580, 80, 1) + L.peaks(330, P.rock1, 5, 5, 60) + L.land(352, '#cdb98f', 3, 14)
    + palace(400, 352, 300, 190, '#ead2aa', 4) + Pth('M372 352 v-70 a28 28 0 0 1 56 0 v70Z', '#3b2a22') + R(230, 352, 340, 12, '#d0bfa6') + R(210, 364, 380, 12, '#bfae94')
    + L.land(380, P.sand2, 5, 8) + L.palm(100, 410, 140, 8) + L.palm(710, 414, 130, -8) + L.land(456, P.sand3, 8, 8);
  const mihrab = () => room('#5a4636', '#3b2a22') + niche(400, 384, 230, 330, '#2c1f1a') + Pth('M226 60 Q262 200 240 384 L196 384 L196 60Z', '#7a3d4a') + Pth('M574 60 Q538 200 560 384 L604 384 L604 60Z', '#7a3d4a') + hangLamp(400, 150, 80);
  S.mry2 = () => mihrab() + mat(400, 474, 280, '#2f6f8b');
  S.mry3 = () => mihrab() + Pth('M360 60 L440 60 L520 384 L280 384Z', '#fff3c4', 'opacity=".12"') + mat(400, 474, 280, '#2f6f8b') + R(330, 410, 140, 10, P.wood2, 'rx="4"') + R(344, 420, 8, 26, P.wood3) + R(448, 420, 8, 26, P.wood3) + tray(400, 408, 1);

  // ---------- 37. The Companions of the Cave ----------
  S.khf1 = () => L.sky('day') + L.sun(660, 90, 36) + L.town(320, 131, 9, [P.clay1, P.clay2, '#eedcb8'], 0, 0, 800, 40, 80) + palace(400, 324, 200, 130, '#b9a48a', 4) + Pth('M374 324 v-56 a26 26 0 0 1 52 0 v56Z', '#2a1d18')
    + L.land(326, P.sand1, 3, 6) + idol(250, 420, 1.4) + idol(550, 420, 1.4) + L.land(424, P.sand2, 5, 8) + L.land(472, P.sand3, 8, 6);
  S.khf2 = () => L.sky('day') + L.cloud(150, 90, 1) + L.peaks(380, P.rock1, 5, 5, 90) + Pth('M120 500 L300 180 L380 110 L470 150 L560 260 L700 500Z', P.rock2) + Pth('M380 110 L470 150 L560 260 L460 230 L400 180Z', P.rock1)
    + E(420, 206, 34, 26, '#1a1420') + Pth('M388 208 q32 -40 66 0Z', '#1a1420')
    + `<path d="M250 500 Q330 430 300 380 Q280 340 360 300 Q410 270 404 232" stroke="#e6d6c0" stroke-width="5" fill="none" stroke-dasharray="3 12" stroke-linecap="round" opacity=".8"/>`
    + L.land(472, P.rock3, 6, 10) + L.shrub(640, 462, 1.2, 3, '#2a1f38') + L.shrub(130, 470, 1, 5, '#2a1f38');
  S.khf3 = () => L.sky('day') + L.sun(470, 170, 40) + L.cloud(330, 150, 0.8) + L.land(340, '#b9c79a', 6, 20) + L.land(400, '#8fa878', 3, 10)
    + Pth('M0 0 H800 V500 H0Z M400 80 C560 70 660 190 640 330 C630 410 540 440 400 440 C260 440 170 410 160 330 C140 190 240 70 400 80Z', '#17131f', 'fill-rule="evenodd"')
    + Pth('M0 0 H800 V500 H0Z M400 50 C590 40 700 180 680 340 C668 440 560 470 400 470 C240 470 132 440 120 340 C100 180 210 40 400 50Z', '#231d2e', 'fill-rule="evenodd"')
    + Pth('M330 96 L520 84 L700 500 L470 500Z', '#fff3c4', 'opacity=".08"') + dog(390, 452, 1.7);
  S.khf4 = () => L.sky('dawn') + L.sun(560, 250, 50) + L.peaks(330, '#5a3f72', 2, 4, 80) + Pth('M0 500 L0 240 L120 150 L230 220 L300 330 L340 500Z', '#4a3a66') + Pth('M120 150 L230 220 L300 330 L220 300 L150 230Z', '#5a4a78') + E(150, 262, 28, 22, '#1a1420')
    + L.town(352, 141, 6, ['#c79a80', '#b98a7a', '#d6ac8c'], 0, 390, 800, 36, 70) + L.land(356, '#c99560', 3, 8) + L.land(424, '#b07e48', 6, 10) + L.flock(480, 140, 9, 7, 120, 1.1);

  // ---------- 38. The owners of the garden ----------
  const rowX = [[80, 200, 320, 440, 560, 680], [140, 290, 440, 590, 730]];
  S.bgh1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(580, 80, 1.1) + L.land(300, '#a9c79a', 3, 20) + rowX[0].map((x) => tree(x, 336, 0.9, P.leaf3, '#f08a3c', x)).join('') + L.land(346, P.leaf1, 5, 10)
    + rowX[1].map((x) => tree(x, 440, 1.45, P.leaf2, '#d4472a', x + 1)).join('') + L.land(448, P.leaf2, 8, 8) + L.flock(420, 110, 3, 5, 100, 1);
  S.bgh2 = () => L.sky('night') + L.stars(151, 30, 160) + L.land(300, '#1a2a2a', 3, 20) + rowX[0].map((x) => tree(x, 336, 0.9, '#16302a', null)).join('') + L.land(346, '#14262a', 5, 10)
    + rowX[1].map((x) => tree(x, 440, 1.45, '#1c3a32', null)).join('') + L.land(448, '#102024', 8, 8)
    + L.cloud(400, 150, 2.8, '#0a0810', 0.92) + L.cloud(180, 200, 1.9, '#141018', 0.88) + L.cloud(640, 210, 2, '#141018', 0.88);
  S.bgh3 = () => L.sky('storm') + L.land(300, '#4a4d55', 3, 20) + rowX[0].map((x) => burnt(x, 336, 0.9)).join('') + L.land(346, '#3a3c44', 5, 10) + rowX[1].map((x) => burnt(x, 440, 1.45)).join('') + L.land(448, '#2a2c33', 8, 8)
    + [[180, 250], [460, 230], [640, 260]].map(([x, y], i) => `<path class="drift" style="animation-delay:${i}s" d="M${x} ${y} q-16 -30 4 -56 q18 -26 -2 -54" stroke="#b9b6bc" stroke-width="7" fill="none" opacity=".4" stroke-linecap="round"/>`).join('');

  // ---------- 58. Greeting the children ----------
  S.slm1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(580, 80, 1.1) + L.town(300, 161, 9, [P.clay1, '#eedcb8', P.clay2], 0, 0, 800, 34, 70) + L.palm(620, 302, 110, -6) + L.palm(180, 302, 90, 6)
    + L.land(306, P.sand1, 3, 6) + Pth('M240 500 L360 312 L440 312 L560 500Z', '#f3e3bb') + toys(400, 452) + L.land(490, P.sand3, 9, 3);
  S.slm2 = () => L.sky('day') + L.cloud(600, 80, 1) + L.land(280, '#e6cf9f', 3, 20) + L.palm(110, 336, 150, 10) + L.land(344, P.sand2, 6, 10)
    + mat(570, 452, 320, P.terra) + L.bowl(520, 428, 0.9, P.clay3, false) + L.loaf(610, 422, 0.8) + L.loaf(650, 436, 0.7)
    + goat(240, 446, 1.5) + L.bowl(340, 462, 0.8, P.clay2, false) + E(340, 444.5, 29, 5, '#fbf9f4') + L.land(482, P.sand3, 9, 4);
  S.slm3 = () => L.sky('dawn') + L.sun(400, 290, 50) + L.town(400, 42, 4, ['#b98a7a', '#c79a80'], 0, 250, 550, 60, 110) + lane('#caa07c', '#b98d6c', '#e0c49a') + laneDoors(false) + toys(400, 470) + L.flock(400, 150, 12, 7, 120, 1.1);

  // ---------- 60. A father's kiss ----------
  S.bos1 = () => L.sky('day') + L.sun(660, 100, 40) + L.cloud(170, 110, 1.1) + L.land(430, '#e6cf9f', 3, 16) + L.palm(400, 500, 320, 0) + L.nest(404, 206, 1.7) + L.dove(380, 176, 1.3) + L.dove(520, 128, 1.1, '#dfe3e7', true) + L.land(476, P.sand2, 6, 8);
  S.bos2 = () => L.sky('day') + L.sun(120, 90, 36) + L.town(330, 22, 7, [P.clay1, P.clay2], 0, 0, 800, 40, 70) + L.land(332, P.sand1, 3, 6)
    + L.house(250, 430, 300, 170, '#ead2aa', { win: true, winAt: 0.8, doorAt: 0.4 }) + L.palm(620, 430, 170, -10) + L.land(432, P.sand2, 6, 6)
    + L.dove(130, 456, 0.9) + L.dove(196, 462, 0.6, '#dfe3e7', true) + L.dove(166, 478, 0.45, '#f4f1ea') + L.flock(400, 120, 8, 6, 140, 1);

  // ---------- 63. Firewood from the bare land ----------
  const bare = () => L.sky('noon') + L.sun(650, 90, 40) + L.land(300, '#e9d6ad', 3, 10) + L.land(350, '#dcc391', 5, 8) + L.land(410, '#cdb07a', 8, 6)
    + `<path d="M90 446 l40 14 l30 -10 l50 16 M430 436 l36 18 l44 -8 M610 466 l30 -12 l40 10 l34 -14 M250 484 l40 -10 l30 12" stroke="#a98a55" stroke-width="2.5" fill="none"/>`;
  S.qra1 = () => bare() + L.camel(130, 360, 0.5, '#8a6a4a', true) + L.camel(196, 362, 0.5, '#7a5a3a', true) + L.camel(262, 360, 0.5, '#8a6a4a', true);
  S.qra2 = () => bare() + woodPile(400, 446, 1.9) + L.sticks(130, 468, 1.1, false) + L.sticks(680, 472, 1, false);

  // ---------- 68. The ring given in ruku ----------
  S.rng1 = () => R(0, 0, 800, 500, '#e7d2ab') + floor(392, '#cdb07a') + R(0, 0, 800, 64, P.wood3) + fronds(0, 800, 64) + niche(400, 392, 130, 210, '#b98d5c')
    + pcol(110, 64, 400) + pcol(280, 64, 400) + pcol(520, 64, 400) + pcol(690, 64, 400) + mat(210, 476, 240, P.terra) + mat(590, 476, 240, '#2f6f8b');
  S.rng2 = () => R(0, 0, 800, 500, '#3b2a22') + L.glow(400, 260, 320, '#f6e7c4', 0.16) + E(400, 440, 300, 54, '#7a3d4a') + E(400, 436, 250, 40, '#8a4a58')
    + `<ellipse cx="400" cy="296" rx="108" ry="118" fill="none" stroke="#aeb3bd" stroke-width="32"/><ellipse cx="400" cy="296" rx="108" ry="118" fill="none" stroke="#e6e9ee" stroke-width="10" stroke-dasharray="150 600" transform="rotate(-50 400 296)"/>`
    + E(400, 178, 66, 36, '#8f949e') + E(400, 172, 58, 30, '#d9dce2') + E(400, 172, 40, 19, '#c2c6ce')
    + [[300, 150], [520, 210], [340, 380]].map(([x, y], i) => `<path class="tw" style="animation-delay:${i * 0.7}s" d="M${x} ${y - 12} L${x + 3} ${y - 3} L${x + 12} ${y} L${x + 3} ${y + 3} L${x} ${y + 12} L${x - 3} ${y + 3} L${x - 12} ${y} L${x - 3} ${y - 3}Z" fill="#fff"/>`).join('');
  S.rng3 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(200, 90, 1) + L.land(300, '#e6cf9f', 3, 16) + R(140, 236, 520, 180, '#e3c9a0') + R(130, 222, 540, 16, P.wood3) + fronds(130, 670, 238)
    + pcol(230, 250, 416) + pcol(570, 250, 416) + Pth('M364 416 v-90 a36 36 0 0 1 72 0 v90Z', '#3b2a22') + L.palm(70, 416, 200, 10) + L.palm(740, 416, 180, -10)
    + L.land(418, P.sand2, 6, 6) + L.steps(398, 486, 5, 1, -14, P.sand4, 1.2) + L.land(492, P.sand3, 9, 3);

  // ---------- 75. The load of date stones ----------
  const pits = (x0, x1, y0, y1, seed, count = 40, s = 1) => { const r = L.rng(seed); let o = ''; for (let i = 0; i < count; i++) { const x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0); o += `<ellipse cx="${Math.round(x)}" cy="${Math.round(y)}" rx="${7 * s}" ry="${3.2 * s}" fill="${r() > 0.5 ? '#6a4226' : '#7d5230'}" transform="rotate(${Math.round(r() * 180)} ${Math.round(x)} ${Math.round(y)})"/>`; } return o; };
  S.nwa1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(580, 80, 1) + L.land(300, '#e6cf9f', 3, 24) + L.palm(690, 314, 90, -6) + L.land(360, P.sand2, 6, 14)
    + L.camel(330, 446, 1.7, P.rock3, true) + L.sack(300, 360, 0.75) + L.sack(360, 364, 0.7, '#a88a5c') + L.sack(570, 462, 1) + pits(620, 720, 452, 474, 5, 14) + L.land(484, P.sand3, 9, 4);
  S.nwa2 = () => L.sky('day') + L.land(240, '#e6cf9f', 3, 16) + L.land(320, P.sand2, 6, 10) + L.land(390, P.sand3, 8, 6) + L.sack(230, 452, 2.1) + pits(330, 720, 420, 482, 9, 46, 1.5)
    + `<g transform="rotate(24 640 300)"><rect x="634" y="200" width="12" height="190" rx="5" fill="${P.wood2}"/><path d="M612 380 h56 l-6 62 q-22 14 -44 0Z" fill="#7d7a80"/></g>`;
  S.nwa3 = () => L.sky('day') + L.sun(650, 90, 38) + L.cloud(200, 90, 1) + L.land(284, '#cfe0b0', 3, 12) + [50, 130, 210, 290, 370, 450, 530, 610, 690, 770].map((x, i) => L.palm(x, 292, 54, i % 2 ? 3 : -3)).join('')
    + L.land(300, P.leaf1, 4, 8) + [40, 150, 260, 370, 480, 590, 700].map((x, i) => L.palm(x, 356, 92, i % 2 ? -5 : 5)).join('') + L.land(364, '#a9c79a', 6, 8)
    + Pth('M360 500 Q390 430 396 366 L410 366 Q420 430 460 500Z', P.sea1) + [110, 300, 540, 730].map((x, i) => L.palm(x, 456, 170, i % 2 ? -8 : 8)).join('') + L.land(470, P.leaf2, 9, 6) + L.flock(400, 120, 7, 6, 130, 1);

  // ---------- 78. "The neighbour first" ----------
  S.jar1 = () => room('#3f2c22', '#2a1d18') + windowArch(610, 250, 'night') + L.lamp(120, 386, 1.2) + mat(390, 474, 320, '#2f6f8b');
  const street = (cols, sideCols, lit) => L.town(330, 182, 8, cols, lit ? 0.5 : 0, 0, 800, 40, 80) + L.house(60, 444, 190, 110, sideCols[0], { win: true, lit: false, winAt: 0.7 }) + L.house(560, 444, 200, 124, sideCols[0], { win: true, lit, winAt: 0.3 })
    + L.house(290, 444, 220, 156, sideCols[1], { win: true, lit, winAt: 0.72, doorAt: 0.3 });
  S.jar2 = () => L.sky('night') + L.stars(181, 80, 280) + L.moon(660, 80, 26) + street(['#2a2a55', '#232349', '#30305e'], ['#2a2853', '#34315f'], true) + L.land(446, '#1b1838', 6, 6);
  S.jar3 = () => L.sky('dawn') + L.sun(400, 296, 56) + street(['#b98a7a', '#a87a70', '#c79a80'], ['#d6ac8c', '#e3c29a'], false) + L.land(446, P.sand2, 6, 6) + L.flock(400, 130, 9, 8, 150, 1.2);

  // ---------- 86. The poor men's meal ----------
  const road = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(220, 90, 1) + L.land(290, '#e6cf9f', 3, 22) + L.palm(110, 336, 150, 10) + L.palm(700, 326, 110, -8) + L.land(350, P.sand2, 6, 12) + Pth('M0 424 Q400 384 800 424 L800 500 L0 500Z', '#f0dcb0');
  S.sfr1 = () => road() + Pth('M270 476 L310 414 L490 414 L530 476Z', '#5a4a6a') + Pth('M286 470 L318 422 L482 422 L514 470Z', 'none', 'stroke="#8a7a9a" stroke-width="2.5"') + bits([[350, 446, -8], [400, 436, 6], [446, 450, 14], [384, 462, -4], [452, 432, -12]]);
  S.sfr2 = () => L.sky('day') + L.land(230, '#e6cf9f', 3, 18) + L.palm(90, 300, 150, 10) + L.land(300, P.sand2, 6, 10) + Pth('M0 360 Q400 330 800 360 L800 500 L0 500Z', '#f0dcb0')
    + Pth('M150 490 L240 370 L560 370 L650 490Z', '#5a4a6a') + Pth('M180 480 L254 384 L546 384 L620 480Z', 'none', 'stroke="#8a7a9a" stroke-width="3"')
    + G(0, 0, 1, bits([[300, 430, -8], [380, 414, 6], [460, 436, 14], [350, 460, -4], [470, 402, -12], [410, 452, 10], [320, 404, 18]])) + L.jug(590, 430, 0.9);
  S.sfr3 = () => L.sky('day') + L.sun(120, 90, 36) + L.town(330, 22, 7, [P.clay1, P.clay2], 0, 0, 800, 40, 70) + L.land(332, P.sand1, 3, 6)
    + L.house(280, 432, 300, 176, '#ead2aa', { win: true, winAt: 0.8, doorAt: 0.4, doorFill: '#f6c98a' }) + L.palm(650, 432, 170, -10) + L.land(434, P.sand2, 6, 6) + L.steps(110, 486, 8, 36, -6, P.sand4, 1.3) + L.steps(150, 468, 6, 36, -6, P.sand4, 1.1);

  // ---------- 92. The ewer and the three phrases ----------
  const brass = '#b98d3a';
  const washRoom = () => room() + windowArch(640, 250, 'day') + Pth('M596 250 L684 250 L600 500 L420 500Z', '#f6e7c4', 'opacity=".12"') + mat(330, 482, 360, '#6a2f4e') + L.bowl(330, 452, 1.5, brass, true);
  S.kuz1 = () => washRoom() + L.jug(170, 470, 1.5, brass);
  S.kuz2 = () => washRoom() + E(160, 478, 96, 12, P.sea1, 'opacity=".7"') + `<path class="ripple" d="M110 478 q20 -6 40 0 q20 6 40 0" stroke="#d8f0f4" stroke-width="2" fill="none"/>` + `<g transform="translate(210 468) rotate(-82)">${L.jug(0, 0, 1.5, brass)}</g>`;
  S.kuz3 = () => room('#5a3f2e', '#3b2a22') + openDoor(400, 384, 180, 290, 'day') + Pth('M310 384 L490 384 L610 500 L190 500Z', '#f6e7c4', 'opacity=".22"') + L.flock(400, 230, 5, 4, 40, 0.8) + L.jug(150, 470, 1.3, brass) + L.lamp(660, 440, 1);

  // ---------- 96. Bread on a rainy night ----------
  S.nan1 = () => L.sky('storm') + L.town(400, 42, 4, ['#1a1c2e', '#20222e'], 0.2, 250, 550, 60, 110) + lane('#262a38', '#20242f', '#30343f') + laneDoors(false)
    + E(400, 470, 110, 12, '#4a5a6a', 'opacity=".6"') + [[300, 446], [364, 466], [430, 448], [498, 474], [256, 482], [540, 444]].map(([x, y]) => L.loaf(x, y, 0.7)).join('') + L.sack(650, 478, 1.1, '#a39a86') + L.rain(8, 110);
  S.nan2 = () => L.sky('storm') + L.land(380, '#30343f', 3, 6) + R(140, 190, 14, 220, P.wood4) + R(646, 190, 14, 220, P.wood4) + R(393, 150, 14, 260, P.wood4)
    + Pth('M90 196 L400 124 L710 196 L710 214 L400 146 L90 214Z', P.wood3) + Pth('M90 196 L400 124 L710 196 L400 112Z', '#3a4a3a')
    + mat(250, 446, 190, '#4a3a5a') + mat(550, 446, 190, '#3a4a5a') + mat(400, 486, 190, '#5a4a3a') + L.loaf(340, 440, 0.6) + L.loaf(640, 440, 0.6) + L.loaf(486, 480, 0.6) + L.loaf(512, 472, 0.5) + L.rain(9, 90);

  // ---------- 100. Everyone at one table ----------
  S.sfa1 = () => L.sky('day') + L.sun(660, 90, 36) + L.peaks(300, P.rock1, 3, 5, 70) + L.land(320, '#e6cf9f', 3, 20) + L.tent(200, 404, 1.6) + L.tent(610, 394, 1.3, '#e9dcc0', '#2f6f8b')
    + L.camel(380, 384, 0.8, P.rock3, true) + L.camel(470, 388, 0.7, P.rock4, true) + L.land(414, P.sand2, 6, 10) + stones(400, 466) + L.pot(400, 458, 0.9) + L.land(488, P.sand3, 9, 3);
  S.sfa2 = () => L.sky('day') + L.land(200, '#e6cf9f', 3, 16) + L.tent(130, 256, 1.2) + L.tent(690, 250, 1.1, '#e9dcc0', '#2f6f8b') + L.land(264, P.sand2, 5, 8)
    + Pth('M60 486 L210 300 L590 300 L740 486Z', '#efe2c4') + Pth('M96 474 L226 314 L574 314 L704 474Z', 'none', `stroke="${P.terra}" stroke-width="3"`)
    + [250, 325, 400, 475, 550].map((x) => L.bowl(x, 330, 0.42, P.clay3)).join('') + [290, 400, 510].map((x) => L.loaf(x, 362, 0.6)).join('')
    + tray(400, 410, 0.7) + [240, 560].map((x) => L.loaf(x, 412, 0.8)).join('')
    + [150, 275, 400, 525, 650].map((x) => L.bowl(x, 468, 0.78, P.clay3)).join('') + [212, 337, 462, 588].map((x) => L.loaf(x, 452, 0.7)).join('');
  S.sfa3 = () => L.sky('night') + L.stars(201, 70, 260) + L.moon(140, 90, 28) + L.land(320, '#262148', 3, 20) + L.tent(250, 414, 1.7, '#3d396b', '#6a2f4e') + L.tent(610, 404, 1.3, '#34315f', '#2f6f8b')
    + L.land(424, '#1b1838', 6, 8) + L.lamp(420, 462, 1.2) + L.camel(700, 440, 0.7, '#14122a', true);

  // ---------- 111. The big door ----------
  const front = () => L.sky('day') + L.sun(120, 80, 34) + R(0, 150, 800, 284, '#e7cfa6') + R(0, 138, 800, 16, P.clay3) + R(0, 434, 800, 66, '#d9c08f');
  S.dar1 = () => front() + L.door(330, 434, 190, 290) + smallDoor(650, 434, 64, 120) + L.palm(60, 434, 230, 8) + L.palm(760, 434, 150, -6) + L.steps(330, 486, 4, 2, -12, P.sand4, 1.2);
  S.dar2 = () => R(0, 0, 800, 500, '#4a3226') + R(0, 330, 800, 170, '#6a4226') + R(0, 322, 800, 12, P.wood4) + L.lamp(110, 330, 1.3)
    + Pth('M230 440 L262 150 L560 158 L590 448Z', '#f6ecd2') + R(250, 132, 322, 26, '#e3cf9f', 'rx="13"')
    + [0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<line x1="${286 - i * 3}" y1="${196 + i * 30}" x2="${(i === 7 ? 420 : 540) + i * 3}" y2="${199 + i * 30}" stroke="#8a7a5a" stroke-width="4" stroke-linecap="round" opacity=".75"/>`).join('')
    + E(660, 420, 30, 12, '#2c2a33') + R(634, 384, 52, 38, '#2c2a33', 'rx="8"') + `<line x1="668" y1="388" x2="730" y2="300" stroke="${P.wood1}" stroke-width="5" stroke-linecap="round"/>`;
  S.dar3 = () => R(0, 0, 800, 500, '#4a3226') + R(0, 330, 800, 170, '#6a4226') + R(0, 322, 800, 12, P.wood4) + E(400, 440, 300, 50, '#7a3d4a') + L.sack(280, 446, 1.5, '#8a5a34')
    + [[430, 440, 1], [470, 448, 0], [510, 436, 1], [550, 452, 0], [590, 440, 1], [470, 420, 1], [520, 414, 0], [400, 462, 0], [620, 462, 1], [560, 426, 1]].map(([x, y, g]) => coin(x, y, !!g)).join('')
    + [0, 1, 2, 3].map((i) => coin(380, 430 - i * 7, true)).join('') + [0, 1, 2].map((i) => coin(650, 440 - i * 7, false)).join('');
  S.dar4 = () => R(0, 0, 800, 500, '#5a3f2e') + floor(400, '#3b2a22') + openDoor(400, 400, 300, 360, 'day') + Pth('M250 400 L550 400 L700 500 L100 500Z', '#f6e7c4', 'opacity=".25"')
    + L.flock(400, 200, 7, 5, 70, 0.9) + `<circle cx="470" cy="150" r="26" fill="#ffe08a" opacity=".9"/>`;

  // ---------- extra scenes for the lengthened stories ----------
  // 78: the plain of Arafat at the end of the day
  S.jar4 = () => L.sky('dusk') + L.sun(400, 250, 50, '#ffc98a') + L.peaks(330, '#5a3f72', 2, 4, 70) + Pth('M240 392 Q400 240 560 392Z', '#6b5178') + Pth('M400 262 Q470 320 560 392 L470 392Z', '#7a6088')
    + L.land(388, '#8f6a58', 3, 10) + [[90, 420, 0.5], [170, 432, 0.6], [270, 440, 0.55], [540, 438, 0.55], [640, 430, 0.6], [720, 422, 0.5], [400, 462, 0.8], [230, 474, 0.75], [580, 476, 0.75]].map(([x, y, s], i) => L.tent(x, y, s, i % 2 ? '#e9dcc0' : '#f1e6cf', i % 3 ? P.terra : '#2f6f8b')).join('') + L.land(484, '#7a5548', 6, 5);
  // 75: the spring at Yanbu
  S.ynb1 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(190, 90, 1) + L.land(300, '#e6cf9f', 3, 22) + L.palm(110, 350, 150, 10) + L.palm(700, 344, 130, -8) + L.land(366, P.sand2, 6, 12)
    + E(400, 446, 170, 30, P.sea2) + E(400, 442, 150, 24, P.sea1)
    + `<g class="bob"><path d="M384 444 Q372 330 400 268 Q428 330 416 444Z" fill="#bfe6ee"/><path d="M394 444 Q388 350 400 300 Q412 350 406 444Z" fill="#e8f6f8"/></g>`
    + [[366, 300], [438, 310], [352, 350], [450, 356], [380, 270], [424, 278]].map(([x, y], i) => `<circle class="tw" style="animation-delay:${i * 0.3}s" cx="${x}" cy="${y}" r="5" fill="#d8f0f4"/>`).join('')
    + `<path class="ripple" d="M300 446 q25 -8 50 0 q25 8 50 0" stroke="#d8f0f4" stroke-width="2.5" fill="none"/><path class="ripple" d="M430 452 q20 -6 40 0" stroke="#d8f0f4" stroke-width="2" fill="none"/>`
    + `<g transform="rotate(-20 620 420)"><rect x="614" y="320" width="11" height="130" rx="5" fill="${P.wood2}"/><path d="M596 440 h48 l-5 46 q-19 12 -38 0Z" fill="#7d7a80"/></g>` + rocks([[250, 470, 14], [560, 476, 12], [210, 484, 10]], '#b9a48a') + L.land(490, P.sand3, 9, 3);

  // ---------- 15–18. Yusuf ----------
  const cow = (x, y, s = 1, fat = true, c = '#a9773f') => G(x, y, s, `<g fill="${c}"><rect x="-26" y="-20" width="6" height="20"/><rect x="-14" y="-20" width="6" height="20"/><rect x="14" y="-20" width="6" height="20"/><rect x="24" y="-20" width="6" height="20"/><ellipse cx="2" cy="${fat ? -34 : -29}" rx="36" ry="${fat ? 20 : 10}"/><path d="M30 -38 L46 -48 L50 -30 L36 -24Z"/><ellipse cx="50" cy="-42" rx="12" ry="9"/></g><path d="M44 -50 q-2 -10 -10 -10 M54 -50 q4 -10 10 -8" stroke="#f1e2c0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="54" cy="-44" r="1.8" fill="#1a1410"/>${fat ? '<ellipse cx="-8" cy="-38" rx="13" ry="9" fill="#f1e2c0" opacity=".7"/>' : '<path d="M-16 -34 v9 M-6 -35 v11 M4 -35 v11 M14 -34 v9" stroke="#5a3a1e" stroke-width="2"/>'}`);
  const shirt = (x, y, s = 1, stain = false) => G(x, y, s, `<path d="M-40 -60 L-70 -40 L-58 -20 L-40 -32 L-40 30 L40 30 L40 -32 L58 -20 L70 -40 L40 -60 Q0 -44 -40 -60Z" fill="#f4f1ea"/><path d="M-14 -56 Q0 -44 14 -56" stroke="#cfc9bb" stroke-width="3" fill="none"/>${stain ? '<path d="M-12 -12 q14 -12 26 0 q8 14 -6 22 q-16 6 -22 -6Z" fill="#8a2a2a"/>' : ''}`);
  const silo = (x, y, w, h) => R(x - w / 2, y - h, w, h, '#e7c9a0') + Pth(`M${x - w / 2} ${y - h} a${w / 2} ${w / 2} 0 0 1 ${w} 0Z`, '#d6ac7c') + R(x - 9, y - h * 0.55, 18, h * 0.3, P.wood4);
  const bigStar = (x, y, r, i) => `<path class="tw" style="animation-delay:${i * 0.25}s" transform="translate(${x} ${y}) scale(${r})" d="M0 -10 L2.8 -2.8 L10 0 L2.8 2.8 L0 10 L-2.8 2.8 L-10 0 L-2.8 -2.8Z" fill="#fff3c4"/>`;
  S.ysf1 = () => L.sky('night') + L.stars(121, 34, 300) + L.sun(150, 150, 28, '#ffd98a') + L.moon(650, 150, 30, false)
    + Array.from({ length: 11 }, (_, i) => bigStar(200 + i * 40, 210 - Math.sin((i / 10) * Math.PI) * 110, 1.5, i)).join('')
    + L.peaks(380, '#141838', 3, 5, 60) + L.land(410, '#1b1838', 4, 16) + L.tent(400, 450, 1.3, '#2a2853', '#6a2f4e') + L.palm(620, 446, 110, -8, '#0d0f24', '#0d0f24') + L.land(462, '#0f1230', 6, 8);
  S.ysf2 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(200, 90, 1.1) + L.land(300, '#cfe0b0', 3, 22) + L.tent(170, 372, 1.5) + L.tent(320, 362, 1.1, '#e9dcc0', '#2f6f8b') + L.palm(60, 372, 130, 8)
    + L.land(376, P.leaf1, 5, 14) + sheep(480, 420, 0.9) + sheep(560, 436, 1, true) + sheep(650, 418, 0.85) + sheep(720, 444, 0.9, true, '#e6e0d2') + sheep(420, 456, 1, false, '#ece7dc') + L.land(468, P.leaf2, 8, 8);
  S.ysf3 = () => L.sky('noon') + L.sun(140, 90, 38) + L.land(290, '#e6cf9f', 3, 26) + L.shrub(150, 320, 0.9, 2) + L.shrub(660, 314, 1, 4) + L.land(350, P.sand2, 6, 16) + L.land(420, P.sand3, 8, 8)
    + well(400, 452, 1.25) + rocks([[220, 470, 16], [600, 474, 14], [650, 486, 10]], '#b9a48a') + L.steps(110, 486, 6, 40, -6, P.sand4, 1.2);
  const nightHome = () => L.sky('night') + L.stars(131, 60, 260) + L.moon(660, 90, 26) + L.peaks(350, '#141838', 5, 5, 60) + L.land(372, '#262148', 3, 8)
    + L.tent(260, 440, 2.1, '#34315f', '#6a2f4e') + L.tent(560, 430, 1.4, '#2a2853', '#2f6f8b') + L.land(444, '#1b1838', 6, 6) + L.lamp(420, 470, 1.2);
  S.ysf4 = () => nightHome() + shirt(640, 470, 0.7, true);
  S.ysf11 = () => nightHome();
  S.ysf5 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(580, 80, 1) + L.land(300, '#e6cf9f', 3, 22) + L.land(360, P.sand2, 6, 14)
    + L.camel(140, 430, 1.1, P.rock3) + L.camel(250, 440, 1, P.rock4) + L.camel(60, 446, 0.9, P.rock4) + L.sack(330, 452, 0.6) + well(560, 444, 1.1) + L.land(470, P.sand3, 9, 6);
  S.ysf6 = () => R(0, 0, 800, 500, '#2e2a35') + [100, 200, 300].map((y) => `<line x1="0" y1="${y}" x2="800" y2="${y}" stroke="#231f2a" stroke-width="4"/>`).join('')
    + [[120, 0], [380, 0], [640, 0], [250, 100], [510, 100], [120, 200], [380, 200], [640, 200], [250, 300], [510, 300]].map(([x, y]) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 100}" stroke="#231f2a" stroke-width="4"/>`).join('')
    + floor(400, '#1f1c25') + R(540, 80, 130, 100, '#86c5d8') + [566, 592, 618, 644].map((x) => R(x - 4, 80, 8, 100, '#17131a')).join('') + R(532, 72, 146, 10, '#17131a') + R(532, 178, 146, 10, '#17131a')
    + Pth('M540 180 L670 180 L520 500 L250 500Z', '#f6e7c4', 'opacity=".13"') + L.jug(170, 470, 1.1, '#7d7a80') + mat(430, 480, 260, '#4a3a5a');
  S.ysf7 = () => L.sky('day') + L.sun(650, 90, 38) + L.cloud(200, 90, 1) + L.land(290, '#e3c768', 3, 18) + silo(120, 330, 90, 110) + silo(220, 336, 80, 90) + silo(310, 332, 70, 70)
    + L.land(340, '#d9b548', 5, 12) + L.grass(420, 430, 30, 90, 7, '#c99a2a') + L.grass(60, 450, 26, 80, 9, '#d9a520') + L.land(430, '#c9a23a', 7, 8)
    + L.grass(0, 500, 34, 110, 3, '#d9a520') + L.grass(330, 500, 34, 120, 5, '#c99a2a') + L.grass(620, 500, 22, 110, 11, '#d9a520') + L.flock(480, 150, 5, 5, 100, 1);
  S.ysf8 = () => L.sky('dusk') + L.stars(141, 20, 150) + L.land(250, '#6b5178', 3, 16) + L.sea(262, ['#4a6f8f'], 4, 120, 0) + L.land(300, '#7a8a5a', 5, 10)
    + Array.from({ length: 7 }, (_, i) => cow(70 + i * 108, 356 - (i % 2) * 8, 0.85, true, i % 2 ? '#a9773f' : '#c9995a')).join('') + L.land(372, '#6a7a4a', 7, 8)
    + Array.from({ length: 7 }, (_, i) => cow(110 + i * 104, 462 - (i % 2) * 8, 0.85, false, i % 2 ? '#6a5a4a' : '#7d6a56')).join('') + L.land(476, '#4a5a3a', 9, 5);
  S.ysf9 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(600, 80, 1) + palace(560, 330, 320, 180, '#ead2aa', 5) + silo(110, 336, 100, 130) + silo(222, 340, 90, 100) + silo(316, 338, 70, 76)
    + L.land(340, P.sand1, 3, 8) + L.palm(740, 346, 120, -6) + L.sack(230, 440, 0.9) + L.sack(300, 448, 0.8, '#a88a5c') + L.sack(170, 452, 0.7) + pits(340, 420, 436, 452, 3, 14, 0.8)
    + L.camel(520, 446, 1, P.rock3, true) + L.camel(640, 450, 0.9, P.rock4, true) + L.land(470, P.sand2, 6, 6);
  S.ysf10 = () => L.sky('dawn') + L.sun(170, 240, 46) + L.land(290, '#b98a7a', 3, 24) + L.town(296, 151, 4, ['#c79a80', '#b98a7a'], 0, 20, 220, 26, 50)
    + L.camel(360, 300, 0.5, '#4a3048') + L.camel(430, 304, 0.5, '#4a3048') + L.camel(500, 300, 0.5, '#4a3048') + L.camel(570, 306, 0.5, '#4a3048') + L.land(340, '#d2a070', 5, 18)
    + Pth('M560 500 Q520 440 600 400 Q660 372 600 344 L616 342 Q700 372 640 406 Q580 444 660 500Z', '#f0dcb0', 'opacity=".7"') + L.land(430, P.sand2, 8, 12)
    + E(300, 470, 150, 22, '#7a3d4a') + shirt(300, 440, 1, false) + L.land(494, P.sand3, 11, 3);

  // 58: a simple meal on the ground
  S.slm4 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(600, 80, 1) + L.land(280, '#e6cf9f', 3, 20) + L.house(520, 340, 220, 110, P.clay1, { win: true, winAt: 0.75, doorAt: 0.3 }) + L.palm(110, 344, 150, 10)
    + L.land(346, P.sand2, 6, 10) + mat(400, 470, 440, '#8a5a34') + L.bowl(330, 440, 1, P.clay3, false) + pits(306, 354, 418, 424, 4, 9, 0.8) + L.loaf(430, 432, 1) + L.loaf(480, 446, 0.9) + L.jug(560, 452, 0.8) + L.bowl(250, 452, 0.7, P.clay2);
  // 59: the mosque at prayer time
  S.sjd1 = () => R(0, 0, 800, 500, '#e7d2ab') + floor(392, '#cdb07a') + R(0, 0, 800, 64, P.wood3) + fronds(0, 800, 64) + niche(400, 392, 150, 240, '#b98d5c')
    + pcol(90, 64, 400) + pcol(250, 64, 400) + pcol(550, 64, 400) + pcol(710, 64, 400) + Pth('M350 64 L450 64 L560 500 L240 500Z', '#fff3c4', 'opacity=".16"') + mat(400, 482, 420, '#2f6f8b') + hangLamp(400, 150, 86);

  // ================= third batch =================
  const sandal = (x, y, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r})"><ellipse cx="0" cy="0" rx="24" ry="9" fill="${P.wood2}"/><path d="M-6 -6 Q4 -16 14 -4" stroke="${P.wood4}" stroke-width="3.5" fill="none"/></g>`;
  const snake = (x, y, s = 1, c = '#5a7a3a', flip = false) => G(x, y, s, `<path d="M-110 0 q20 -26 40 0 t40 0 t40 0 t40 0 q14 -12 22 -30" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/><ellipse cx="74" cy="-34" rx="15" ry="10" fill="${c}"/><circle cx="80" cy="-37" r="2.5" fill="#fff6d8"/><path d="M88 -32 l14 2 M88 -32 l13 -5" stroke="#b9573d" stroke-width="2"/>`, flip);
  const staff = (x, y, len = 150, rot = 0) => `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-4" y="${-len}" width="8" height="${len}" rx="4" fill="${P.wood2}"/><path d="M0 ${-len} q-2 -22 16 -22" stroke="${P.wood2}" stroke-width="8" fill="none" stroke-linecap="round"/></g>`;
  const rope = (x, y, s = 1, c = '#d8c8a0', r = 0) => `<path transform="translate(${x} ${y}) rotate(${r}) scale(${s})" d="M-70 0 q14 -20 28 0 t28 0 t28 0 t28 0 t28 0" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round" stroke-dasharray="14 3"/>`;
  const clay = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="2" rx="120" ry="20" fill="#6a4226"/><path d="M-90 0 Q-60 -64 0 -68 Q60 -64 90 0Z" fill="#a8743f"/><path d="M-60 0 Q-34 -46 0 -50 Q28 -46 46 -22 Q18 -36 -12 -26 Q-40 -16 -60 0Z" fill="#bd8a5c"/>`);
  const bolts = (x, y, s = 1) => G(x, y, s, [['#b9573d', 0], ['#2f6f8b', 1], ['#e6b450', 2], ['#6a2f4e', 3]].map(([c, i]) => `<rect x="${-50 + i * 6}" y="${-14 - i * 13}" width="${100 - i * 12}" height="13" rx="6" fill="${c}"/>`).join(''));
  const shirt2 = (x, y, s, fill, trim) => G(x, y, s, `<line x1="0" y1="-78" x2="0" y2="-50" stroke="${P.wood4}" stroke-width="3"/><path d="M-40 -60 L-70 -40 L-58 -20 L-40 -32 L-40 30 L40 30 L40 -32 L58 -20 L70 -40 L40 -60 Q0 -44 -40 -60Z" fill="${fill}"/><path d="M-14 -56 Q0 -44 14 -56" stroke="${trim || '#bfb6a2'}" stroke-width="${trim ? 5 : 3}" fill="none"/>${trim ? `<path d="M-40 22 H40 M-66 -34 L-56 -18 M66 -34 L56 -18" stroke="${trim}" stroke-width="5"/>` : ''}`);
  const fish = (x, y, s = 1, c = '#f08a3c', flip = false) => G(x, y, s, `<path d="M-16 0 q10 -10 22 0 q-12 10 -22 0Z M4 0 l13 -8 v16Z" fill="${c}"/>`, flip);
  const basil = (x, y, s = 1) => G(x, y, s, [-50, -30, -12, 6, 24, 44].map((a, i) => `<g transform="rotate(${a})"><path d="M0 0 L0 -150" stroke="#3d8262" stroke-width="5"/>` + [-140, -112, -84].map((yy, j) => `<ellipse cx="-16" cy="${yy}" rx="18" ry="10" fill="${(i + j) % 2 ? '#4fa06a' : '#3d8a5a'}" transform="rotate(-30 -16 ${yy})"/><ellipse cx="16" cy="${yy + 8}" rx="18" ry="10" fill="${(i + j) % 2 ? '#3d8a5a' : '#5fb07a'}" transform="rotate(30 16 ${yy + 8})"/>`).join('') + `<ellipse cx="0" cy="-158" rx="12" ry="16" fill="#5fb07a"/></g>`).join('') + `<path d="M-14 0 L14 0 L18 40 L-18 40Z" fill="#3d8262"/><rect x="-18" y="-8" width="36" height="14" rx="5" fill="${P.sand1}"/>`);

  // ---------- 1–2. Adam ----------
  S.adm1 = () => L.sky('dawn') + L.sun(400, 230, 60) + L.peaks(310, '#5a4a78', 3, 5, 120) + L.peaks(340, '#6b5a70', 8, 6, 60) + L.land(360, '#7a9a72', 3, 20) + L.land(410, P.leaf1, 5, 16)
    + Pth('M380 500 Q440 440 400 410 Q370 388 420 366 L432 368 Q396 388 428 410 Q480 444 440 500Z', P.sea1) + tree(140, 430, 1.1, P.leaf3, null) + tree(660, 436, 1.3, P.leaf2, null) + L.land(474, P.leaf2, 8, 8) + L.flock(560, 150, 4, 5, 90, 1);
  S.adm2 = () => L.sky('dawn') + L.glow(400, 120, 300, '#fff3c4', 0.5) + L.peaks(330, '#6b5a78', 5, 5, 80) + L.land(350, '#a98a6a', 3, 14) + L.sea(372, [P.sea1, P.sea2], 4, 120, 30)
    + L.land(424, '#b98d5c', 6, 10) + Pth('M340 0 L460 0 L580 450 L220 450Z', '#fff3c4', 'opacity=".22"') + clay(400, 452, 1.3) + L.land(486, '#94623e', 9, 5);
  S.adm3 = () => L.sky('day') + L.sun(130, 90, 36) + L.cloud(560, 80, 1) + L.peaks(300, P.rock1, 3, 5, 130) + L.peaks(330, P.rock2, 9, 4, 70) + L.land(350, '#a9c79a', 3, 20)
    + Pth('M560 500 Q600 430 540 400 Q500 380 560 352 L574 354 Q526 380 566 400 Q640 434 620 500Z', P.sea1) + tree(160, 420, 1.3, P.leaf2, '#d4472a', 3) + L.land(424, P.leaf1, 6, 12)
    + sheep(300, 440, 0.8) + sheep(360, 452, 0.7, true, '#e6e0d2') + L.dove(700, 420, 0.8) + mat(400, 494, 260, P.terra) + L.flock(420, 140, 6, 6, 110, 1.1);
  S.adm4 = () => L.sky('dusk') + L.stars(241, 14, 140) + L.land(360, '#4a3a55', 3, 16) + L.land(424, '#3a2a44', 6, 10) + L.fire(230, 446, 1.7) + clay(570, 446, 1.2) + L.land(484, '#2a1f38', 9, 5);
  const gardenBg = () => L.sky('day') + L.sun(650, 90, 40) + L.cloud(180, 90, 1.1) + L.land(290, '#a9d0a0', 3, 22) + [70, 190, 310, 430, 550, 670, 770].map((x, i) => tree(x, 330, 0.9, i % 2 ? P.leaf3 : P.leaf2, ['#f08a3c', '#d4472a', '#f0c040'][i % 3], x)).join('') + L.land(340, P.leaf1, 5, 14);
  const petals = (pts) => pts.map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/><circle cx="${x}" cy="${y}" r="2" fill="#f0c040"/>`).join('');
  S.adm5 = () => gardenBg() + Pth('M300 500 Q380 440 340 410 Q300 384 400 350 L420 352 Q340 386 380 410 Q440 444 400 500Z', P.sea1) + tree(150, 446, 1.5, P.leaf2, '#d4472a', 11) + tree(640, 452, 1.6, P.leaf3, '#f0c040', 12) + L.land(472, P.leaf2, 8, 8)
    + petals([[240, 474, '#f4a0b0'], [270, 486, '#fff'], [520, 478, '#fff'], [556, 488, '#f4a0b0'], [470, 490, '#fff']]) + L.dove(470, 452, 0.7) + L.flock(400, 130, 5, 6, 120, 1);
  S.adm6 = () => gardenBg() + L.land(404, P.leaf2, 8, 10) + L.glow(400, 250, 210, '#fff3c4', 0.4)
    + G(400, 462, 1, `<path d="M-14 0 L-8 -120 L8 -120 L14 0Z" fill="${P.wood3}"/>` + [[-60, -150, 50], [60, -150, 50], [0, -200, 60], [0, -140, 52], [-36, -196, 40], [38, -198, 40]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#2f7a5a"/>`).join('') + [[-40, -170], [30, -210], [50, -150], [-10, -130]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="20" fill="#3d9a6e" opacity=".6"/>`).join(''))
    + L.land(480, P.leaf3, 9, 6) + petals([[200, 470, '#fff'], [600, 474, '#f4a0b0']]);
  S.adm7 = () => L.sky('dusk') + L.glow(400, 150, 240, '#fff3c4', 0.55) + L.cloud(230, 150, 1.6, '#6b5178', 0.8) + L.cloud(580, 140, 1.7, '#6b5178', 0.8) + Pth('M360 110 L440 110 L580 500 L220 500Z', '#fff3c4', 'opacity=".16"')
    + L.land(300, '#4a6a5a', 3, 22) + [90, 230, 570, 710].map((x) => tree(x, 350, 1, '#2a4a40', null)).join('') + L.land(360, '#3a5a4a', 5, 14) + L.land(430, '#2a4a3c', 8, 8)
    + [[300, 452, 20], [360, 470, -30], [430, 448, 50], [480, 476, 10], [540, 456, -40], [250, 478, 70], [400, 486, -10]].map(([x, y, r]) => `<path transform="rotate(${r} ${x} ${y})" d="M${x - 18} ${y} Q${x} ${y - 14} ${x + 18} ${y} Q${x} ${y + 14} ${x - 18} ${y}Z" fill="#5fa57c"/>`).join('');

  // ---------- 16. Yusuf (2): the house of the Aziz ----------
  S.ysf12 = () => R(0, 0, 800, 500, '#5a4636') + floor(390, '#3b2a22') + R(0, 382, 800, 10, '#2c1f1a') + [70, 730].map((x) => R(x - 20, 40, 40, 344, '#75604f') + R(x - 30, 30, 60, 16, '#8a7460') + R(x - 30, 376, 60, 14, '#8a7460')).join('')
    + L.door(540, 388, 170, 280, true) + hangLamp(250, 130, 80) + E(270, 458, 170, 24, '#7a3d4a') + shirt(270, 430, 1.5, false)
    + `<path d="M270 356 l-9 18 l11 16 l-11 18 l10 18 l-8 18 l7 22" stroke="#7a6a5a" stroke-width="5" fill="none" stroke-linejoin="round"/>`;

  // ---------- 23. Musa (3): the fire on the mountain ----------
  S.tur1 = () => L.sky('night') + L.stars(231, 70, 260) + L.peaks(330, '#141838', 4, 4, 150) + Pth('M420 500 L560 170 L640 130 L720 200 L800 330 L800 500Z', '#1a1f45') + L.glow(610, 250, 90, '#ffb347', 0.8) + `<circle class="tw" cx="610" cy="250" r="7" fill="#ffd866"/>`
    + L.land(390, '#1b1838', 3, 16) + L.tent(190, 440, 1.3, '#2a2853', '#6a2f4e') + sheep(310, 452, 0.7, false, '#8a8aa0') + sheep(356, 462, 0.65, true, '#7a7a92') + L.land(466, '#0f1230', 6, 8) + L.steps(300, 488, 7, 40, -10, '#6a66a0', 1.1);
  const litTree = (x, y, s = 1) => G(x, y, s, `<path d="M-10 0 L-6 -110 L6 -110 L10 0Z" fill="#3a2a20"/><path d="M0 -70 L-50 -130 M0 -80 L46 -140 M0 -100 L-10 -170" stroke="#3a2a20" stroke-width="7" stroke-linecap="round"/>` + [[-56, -150, 40], [52, -160, 42], [0, -200, 50], [-6, -140, 40]].map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#2f7a5a"/>`).join('') + `<g class="flick">` + [[-56, -150, 30], [52, -160, 32], [0, -200, 38], [-6, -140, 30]].map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffe08a" opacity=".6"/>`).join('') + `</g>`);
  S.tur2 = () => L.sky('night') + L.stars(232, 40, 200) + L.peaks(340, '#141838', 6, 4, 140) + L.land(380, '#1b1838', 3, 14) + L.glow(400, 270, 270, '#ffcf6b', 0.7) + litTree(400, 446, 1.15)
    + L.land(450, '#2a2444', 6, 8) + sandal(236, 476, -10) + sandal(282, 484, 8);
  S.tur3 = () => L.sky('night') + L.stars(233, 30, 180) + L.peaks(330, '#141838', 6, 4, 130) + L.glow(690, 300, 230, '#ffcf6b', 0.55) + litTree(700, 400, 0.6) + L.land(384, '#2a2444', 3, 12) + L.land(440, '#3a3058', 6, 8)
    + staff(150, 476, 170, 78) + snake(480, 466, 1.6, '#6a8a3a') + L.shrub(90, 430, 1, 3, '#1a1630');

  // ---------- 24. Musa (4): the staff and the magicians ----------
  const arena = () => L.sky('day') + L.sun(140, 100, 40) + palace(400, 300, 520, 190, '#ead2aa', 7) + R(140, 300, 520, 12, '#d0bfa6') + L.palm(60, 312, 150, 8) + L.palm(740, 312, 150, -8) + L.land(312, P.sand1, 3, 6);
  S.jdg1 = () => arena() + ridgeArmy(332, 7, 26, 0.9) + L.land(336, P.sand2, 4, 8) + E(400, 440, 300, 50, '#f3e3bb') + L.steps(200, 486, 8, 30, -6, P.sand4, 1.2) + L.steps(480, 490, 8, 30, -6, P.sand4, 1.2);
  S.jdg2 = () => arena() + L.land(336, P.sand2, 4, 8) + E(400, 440, 330, 56, '#f3e3bb') + L.glow(400, 430, 280, '#b98ad8', 0.3) + rope(230, 420, 1.1, '#d8c8a0', -8) + rope(420, 402, 1, '#c9b58a', 6) + rope(580, 432, 1.1, '#d8c8a0', -4) + rope(330, 464, 1.2, '#c9b58a', 4) + rope(520, 472, 1, '#d8c8a0', -10)
    + staff(150, 470, 110, 70) + staff(660, 462, 120, -72) + staff(400, 446, 100, 84);
  S.jdg3 = () => arena() + L.land(336, P.sand2, 4, 8) + E(400, 440, 330, 56, '#f3e3bb') + L.glow(400, 400, 260, '#fff3c4', 0.4) + rope(650, 462, 0.7, '#d8c8a0', -6) + staff(120, 470, 80, 70) + snake(380, 456, 2.6, '#4a7a3a');

  // ---------- 74. Two shirts ----------
  const bazaar = () => L.sky('day') + L.sun(400, 110, 36) + L.town(400, 242, 4, [P.clay1, P.clay2], 0, 250, 550, 60, 110) + lane('#dcc099', '#cdb088', '#ecd9b0') + laneDoors(false)
    + Pth('M10 250 L240 290 L250 318 L60 316Z', P.terra) + Pth('M790 250 L560 290 L550 318 L740 316Z', '#2f6f8b') + Pth('M10 250 L240 290 L240 296 L10 258Z', '#8a3d2a') + Pth('M790 250 L560 290 L560 296 L790 258Z', '#1f4f66');
  S.bzr1 = () => bazaar() + L.sack(110, 480, 1) + L.sack(184, 464, 0.8, '#a88a5c') + L.jug(650, 472, 1) + L.jug(704, 486, 1.1, P.clay2) + bolts(596, 452, 0.8) + L.steps(360, 488, 6, 14, -14, P.sand4, 1.2);
  S.bzr2 = () => R(0, 0, 800, 500, '#e7d2ab') + R(0, 0, 800, 60, P.terra) + fronds(0, 800, 60, P.terra) + R(90, 100, 620, 10, P.wood3, 'rx="5"') + shirt2(270, 238, 1.75, '#fbf7ec', P.gold) + shirt2(540, 238, 1.75, '#c9b48c', null)
    + R(0, 404, 800, 96, P.wood2) + R(0, 394, 800, 12, P.wood3) + bolts(90, 394, 0.9) + bolts(714, 394, 0.9) + [236, 270, 304].map((x) => coin(x, 388, false)).join('') + [523, 557].map((x) => coin(x, 388, false)).join('');

  // ---------- 79. The blessed necklace ----------
  S.grd1 = () => R(0, 0, 800, 500, '#3b2a22') + L.glow(400, 250, 360, '#f6e7c4', 0.2) + E(400, 290, 330, 176, '#7a3d4a') + E(400, 286, 300, 156, '#8a4a58')
    + [-90, -45, 0, 45, 90].map((d) => `<path d="M${130 + Math.abs(d) * 0.9} ${286 + d} Q400 ${300 + d} ${670 - Math.abs(d) * 0.9} ${286 + d}" stroke="#e6b450" stroke-width="2" fill="none" opacity=".35"/>`).join('')
    + `<path d="M270 170 Q400 470 530 170" stroke="#b98d3a" stroke-width="4" fill="none"/>`
    + Array.from({ length: 13 }, (_, i) => { const t = (i + 1) / 14, u = 1 - t, x = u * u * 270 + 2 * t * u * 400 + t * t * 530, y = u * u * 170 + 2 * t * u * 470 + t * t * 170; return i === 6 ? '' : `<circle cx="${Math.round(x)}" cy="${Math.round(y)}" r="${i % 2 ? 9 : 12}" fill="${i % 2 ? '#e6b450' : '#2f8ea6'}"/>`; }).join('')
    + `<path d="M400 310 l19 28 l-19 36 l-19 -36Z" fill="#e6b450"/><path d="M400 322 l8 16 l-8 20 l-8 -20Z" fill="#fff3c4"/>`
    + [[250, 250], [560, 300], [330, 400]].map(([x, y], i) => bigStar(x, y, 1.1, i)).join('');

  // ---------- 85. The bunch of basil ----------
  S.gul1 = () => room('#5a3f2e', '#3b2a22') + windowArch(650, 240, 'day') + Pth('M606 240 L694 240 L640 500 L380 500Z', '#f6e7c4', 'opacity=".14"') + mat(400, 490, 440, '#6a2f4e') + E(400, 446, 160, 22, '#b98d3a') + E(400, 440, 142, 16, P.gold) + basil(400, 404, 1.3);

  // ---------- 93. The unknown servant of the caravan ----------
  S.krv1 = () => L.sky('day') + L.sun(660, 90, 38) + L.peaks(300, P.rock1, 5, 5, 110) + L.land(320, '#e6cf9f', 3, 20)
    + [0, 1, 2, 3, 4].map((i) => L.camel(150 + i * 120, 374 - (i % 2) * 4, 0.7, i % 2 ? P.rock4 : P.rock3) + L.sack(144 + i * 120, 336 - (i % 2) * 4, 0.28, '#b99a6b')).join('') + L.land(380, P.sand2, 6, 12)
    + `<path d="M0 470 Q300 420 800 446" stroke="#f0dcb0" stroke-width="40" fill="none" opacity=".7"/>` + L.steps(120, 464, 12, 50, -2, P.sand4, 1.2) + L.shrub(700, 482, 1.1, 3) + L.shrub(90, 424, 0.9, 5);

  // ---------- 53. The camel and the mosque of Madina ----------
  S.kba1 = () => L.sky('day') + L.sun(130, 90, 36) + L.cloud(560, 90, 1) + L.peaks(300, '#6a5a66', 4, 5, 60) + L.land(310, '#cfe0b0', 3, 14) + [60, 150, 240, 560, 650, 740].map((x, i) => L.palm(x, 322, 80 + (i % 3) * 14, i % 2 ? 5 : -5)).join('')
    + L.house(300, 342, 90, 56, P.clay1, { win: true }) + L.house(400, 346, 110, 70, P.clay2, { win: true, winAt: 0.75, doorAt: 0.35 }) + L.land(350, P.sand1, 5, 10) + L.palm(110, 440, 190, 10) + L.palm(690, 446, 170, -10)
    + Pth('M330 500 Q390 420 400 352 L416 352 Q430 420 480 500Z', '#f3e3bb') + rocks([[230, 456, 16], [270, 470, 12], [560, 462, 15], [600, 476, 11]], '#4a4450');
  S.mdn1 = () => L.sky('day') + L.sun(400, 100, 40) + L.town(310, 251, 9, [P.clay1, '#eedcb8', P.clay2], 0, 0, 800, 34, 70) + [40, 130, 670, 760].map((x, i) => L.palm(x, 314, 100, i % 2 ? 5 : -5)).join('') + L.land(316, P.sand1, 3, 6)
    + L.house(30, 444, 200, 120, '#ead2aa', { win: true, winAt: 0.25, doorAt: 0.7, doorFill: '#f6c98a' }) + L.house(570, 444, 200, 130, '#e3c9a0', { win: true, winAt: 0.75, doorAt: 0.3, doorFill: '#f6c98a' })
    + Pth('M240 500 L372 320 L428 320 L560 500Z', '#f3e3bb') + L.camel(400, 400, 0.95, P.rock3) + L.steps(398, 486, 5, 1, -16, P.sand4, 1.2);
  S.mdn2 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(200, 90, 1) + L.town(300, 252, 8, [P.clay1, P.clay2], 0, 0, 800, 30, 60) + L.land(304, P.sand1, 3, 6) + L.house(590, 374, 170, 96, '#ead2aa', { win: true, winAt: 0.75, doorAt: 0.3 })
    + L.palm(90, 382, 170, 10) + L.palm(180, 374, 120, -6) + L.land(378, P.sand2, 5, 8) + E(390, 450, 270, 40, '#ecd9b0') + pits(170, 310, 432, 466, 6, 30, 1) + L.camel(440, 444, 1.6, P.rock3, true);

  // ---------- 64. The runaway camel ----------
  S.shtr1 = () => L.sky('noon') + L.sun(130, 90, 38) + L.land(300, '#e6cf9f', 3, 26) + L.dust(250, 376, 1.5, '#e9d3a6', 0.6) + L.dust(120, 390, 1.1, '#e9d3a6', 0.5) + L.land(384, P.sand2, 6, 14)
    + G(480, 392, 1.25, `<g transform="rotate(-7)">${L.camel(0, 0, 1, P.rock3)}</g>`) + L.land(436, P.sand3, 8, 8) + L.steps(110, 426, 9, 36, -3, P.sand4, 1.2) + L.grass(640, 478, 8, 50, 4, '#8fb548') + L.shrub(730, 468, 1, 2);

  // ---------- 31. Sulayman and the queen of Saba ----------
  const box = `<rect x="-44" y="-34" width="88" height="34" rx="4" fill="${P.wood2}"/><path d="M-44 -34 Q0 -58 44 -34Z" fill="${P.wood1}"/><rect x="-6" y="-30" width="12" height="14" rx="2" fill="${P.gold}"/>`;
  S.sab1 = () => L.sky('day') + L.sun(130, 90, 36) + L.cloud(420, 80, 1) + L.land(320, '#a9c79a', 3, 26) + sulPalace(600, 322, 0.9) + L.land(380, P.leaf1, 6, 14) + Pth('M0 470 Q300 430 560 336 L600 340 Q340 450 0 500Z', '#f3e3bb')
    + [2, 1, 0].map((i) => { const k = 1 - i * 0.14, x = 130 + i * 140, y = 446 - i * 30; return L.camel(x, y, k, i % 2 ? P.rock4 : P.rock3) + G(x - 6, y - 58 * k, k * 0.42, box); }).join('') + L.land(490, P.leaf2, 9, 5);
  S.sab2 = () => L.sky('day') + L.cloud(160, 90, 1) + L.land(330, '#a9c79a', 3, 20) + sulPalace(400, 344, 1.5) + L.land(356, P.leaf1, 5, 8) + E(400, 466, 270, 34, '#f3e3bb') + L.glow(400, 360, 250, '#fff3c4', 0.55) + throne(400, 466, 1.2)
    + [[250, 300], [560, 280], [280, 410], [530, 420], [400, 216]].map(([x, y], i) => bigStar(x, y, 1.3, i)).join('');
  S.sab3 = () => R(0, 0, 800, 500, '#f1dfbd') + R(0, 20, 800, 14, '#b98d3a') + Pth('M320 296 v-150 a80 80 0 0 1 160 0 v150Z', '#86c5d8') + [100, 250, 550, 700].map((x) => R(x - 16, 44, 32, 252, '#fbf3df') + R(x - 24, 34, 48, 14, '#d6ac7c') + R(x - 24, 284, 48, 12, '#d6ac7c')).join('')
    + Pth('M0 500 L140 296 L660 296 L800 500Z', P.sea1) + fish(300, 370, 1.1) + fish(520, 350, 0.9, '#f0c040', true) + fish(420, 440, 1.5, '#f08a3c') + fish(200, 460, 1.3, '#e6e9ee', true) + fish(620, 450, 1.2, '#f0c040')
    + `<path class="ripple" d="M250 420 q20 -6 40 0 q20 6 40 0" stroke="#d8f0f4" stroke-width="2" fill="none"/><path class="ripple" d="M480 400 q20 -6 40 0" stroke="#d8f0f4" stroke-width="2" fill="none"/>`
    + Pth('M0 500 L140 296 L660 296 L800 500Z', '#e8f6f8', 'opacity=".28"') + [0, 1, 2, 3, 4, 5, 6].map((i) => `<line x1="${Math.round(140 + i * 86.7)}" y1="296" x2="${Math.round(i * 133.3)}" y2="500" stroke="#fff" stroke-width="2" opacity=".55"/>`).join('')
    + [330, 376, 436].map((y) => { const l = Math.round(140 - (140 * (y - 296)) / 204); return `<line x1="${l}" y1="${y}" x2="${800 - l}" y2="${y}" stroke="#fff" stroke-width="2" opacity=".55"/>`; }).join('') + Pth('M190 500 L300 296 L350 296 L290 500Z', '#fff', 'opacity=".2"');

  // ---------- 33. Zakariyya and Yahya ----------
  S.zkr1 = () => mihrab() + Pth('M360 60 L440 60 L540 384 L260 384Z', '#fff3c4', 'opacity=".2"') + L.glow(400, 210, 210, '#fff3c4', 0.4) + mat(400, 474, 280, '#2f6f8b') + [[330, 150], [470, 170], [400, 110]].map(([x, y], i) => bigStar(x, y, 1, i)).join('');
  S.zkr2 = () => room('#5a4636', '#3b2a22') + windowArch(160, 250, 'day') + Pth('M116 250 L204 250 L440 500 L220 500Z', '#f6e7c4', 'opacity=".14"') + hangLamp(620, 140, 80) + mat(400, 490, 400, '#2f6f8b')
    + `<path d="M340 474 L460 404 M460 474 L340 404" stroke="${P.wood3}" stroke-width="12" stroke-linecap="round"/>` + Pth('M300 400 L400 424 L500 400 L500 384 L400 408 L300 384Z', P.wood2)
    + Pth('M310 382 Q356 370 400 396 Q444 370 490 382 L490 300 Q444 288 400 314 Q356 288 310 300Z', '#f8efdc') + `<line x1="400" y1="314" x2="400" y2="396" stroke="#cfc0a0" stroke-width="3"/>`
    + [0, 1, 2, 3].map((i) => `<path d="M326 ${318 + i * 15} q32 -8 60 6 M474 ${318 + i * 15} q-32 -8 -60 6" stroke="#b9a888" stroke-width="2.5" fill="none"/>`).join('');

  // ================= fourth batch =================
  const donkey = (x, y, s = 1, flip = false, c = '#8d8a90') => G(x, y, s, `<g fill="${c}"><rect x="-26" y="-22" width="6" height="22"/><rect x="-14" y="-22" width="6" height="22"/><rect x="14" y="-22" width="6" height="22"/><rect x="24" y="-22" width="6" height="22"/><ellipse cx="2" cy="-34" rx="34" ry="15"/><path d="M26 -40 L40 -62 L52 -56 L40 -30Z"/><ellipse cx="52" cy="-62" rx="15" ry="9"/><path d="M40 -68 l-4 -24 l10 18Z M48 -70 l2 -24 l8 20Z"/><path d="M-32 -36 q-10 6 -8 22" stroke="${c}" stroke-width="4" fill="none"/></g><ellipse cx="62" cy="-60" rx="6" ry="6" fill="#e6e0d2"/><circle cx="54" cy="-65" r="1.8" fill="#1a1410"/>`, flip);
  const spring = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="0" rx="110" ry="20" fill="${P.sea2}"/><ellipse cx="0" cy="-3" rx="96" ry="15" fill="${P.sea1}"/><g class="bob"><path d="M-12 -2 Q-20 -70 0 -104 Q20 -70 12 -2Z" fill="#bfe6ee"/><path d="M-5 -2 Q-8 -56 0 -84 Q8 -56 5 -2Z" fill="#e8f6f8"/></g><path class="ripple" d="M-70 0 q18 -6 36 0 q18 6 36 0" stroke="#d8f0f4" stroke-width="2.5" fill="none"/>`);
  const hut = (x, y, s = 1, wall = '#8a6a54', roof = '#5a4234') => G(x, y, s, `<path d="M-90 0 L-90 -70 L0 -120 L90 -70 L90 0Z" fill="${wall}"/><path d="M-104 -66 L0 -128 L104 -66 L96 -58 L0 -114 L-96 -58Z" fill="${roof}"/><path d="M-16 0 v-46 a16 16 0 0 1 32 0 v46Z" fill="#2a1d18"/>`);
  const brickWall = (x, y, w, h, rot = 0, c = '#d6ac7c') => { let s = R(-w / 2, -h, w, h, c); const rows = Math.round(h / 22), rh = h / rows; for (let i = 0; i < rows; i++) { const yy = -h + i * rh; s += `<line x1="${-w / 2}" y1="${yy}" x2="${w / 2}" y2="${yy}" stroke="#94623e" stroke-width="2"/>`; for (let j = (i % 2 ? 0.5 : 1); j < 6; j++) s += `<line x1="${-w / 2 + j * (w / 6)}" y1="${yy}" x2="${-w / 2 + j * (w / 6)}" y2="${yy + rh}" stroke="#94623e" stroke-width="2"/>`; } return `<g transform="translate(${x} ${y}) rotate(${rot})">${s}</g>`; };
  const scales = (x, y, s = 1, tilt = 0) => G(x, y, s, `<rect x="-5" y="-200" width="10" height="200" fill="${P.wood3}"/><rect x="-50" y="-8" width="100" height="12" rx="5" fill="${P.wood4}"/><g transform="rotate(${tilt} 0 -196)"><rect x="-130" y="-200" width="260" height="8" rx="4" fill="${P.gold}"/>` + [-120, 120].map((dx) => `<g transform="rotate(${-tilt} ${dx} -196)"><path d="M${dx} -196 l-34 90 M${dx} -196 l34 90" stroke="#8a6a2a" stroke-width="2.5"/><path d="M${dx - 44} -106 h88 q-6 30 -44 30 q-38 0 -44 -30Z" fill="#b98d3a"/></g>`).join('') + `</g><circle cx="0" cy="-200" r="9" fill="${P.gold}"/>`);
  const gusts = (seed, cnt = 9, c = '#e9d3a6') => { const r = L.rng(seed); let o = ''; for (let i = 0; i < cnt; i++) { const x = Math.round(r() * 700), y = Math.round(120 + r() * 300), w = Math.round(120 + r() * 160); o += `<path class="drift" style="animation-delay:${(i * 0.3).toFixed(1)}s" d="M${x} ${y} q${Math.round(w / 2)} -18 ${w} 0" stroke="${c}" stroke-width="${3 + Math.round(r() * 4)}" fill="none" opacity=".5" stroke-linecap="round"/>`; } return o; };

  // ---------- 5. Hud and the wind ----------
  const pillarHall = (x, y, w, h, cnt = 5, c = '#d8c39a') => { let s = R(x - w / 2 - 8, y - h, w + 16, 14, '#b98d5c') + R(x - w / 2 - 8, y - 12, w + 16, 12, '#b98d5c'); for (let i = 0; i < cnt; i++) { const cx = x - w / 2 + (w / (cnt - 1)) * i; s += R(cx - 9, y - h + 14, 18, h - 26, c); } return s; };
  const fallenPalm = (x, y, s = 1, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><rect x="-90" y="-8" width="170" height="16" rx="8" fill="${P.wood3}"/>` + [0, 1, 2, 3, 4, 5].map((i) => `<path d="M${-80 + i * 28} -8 l8 8 l-8 8" stroke="${P.wood4}" stroke-width="2.5" fill="none"/>`).join('') + `<path d="M80 0 q40 -30 70 -10 M80 0 q44 0 70 18 M80 0 q30 -44 56 -40" stroke="#5a6a3a" stroke-width="7" fill="none" stroke-linecap="round"/></g>`;
  S.aad1 = () => L.sky('day') + L.sun(660, 90, 38) + L.peaks(310, P.rock1, 4, 5, 120) + L.land(330, '#e6cf9f', 3, 20) + pillarHall(230, 344, 220, 190, 6) + pillarHall(560, 348, 260, 250, 7, '#e3cfa6') + pillarHall(400, 354, 110, 120, 4, '#cdb88a')
    + L.land(358, P.sand2, 5, 10) + L.palm(70, 436, 180, 10) + L.palm(740, 440, 170, -10) + [170, 310, 500, 640].map((x, i) => tree(x, 446, 0.9, P.leaf2, i % 2 ? '#d4472a' : '#f0c040', x)).join('') + Pth('M360 500 Q390 440 398 364 L412 364 Q420 440 450 500Z', P.sea1) + L.land(490, P.sand3, 9, 3);
  S.aad2 = () => L.sky('day') + L.cloud(400, 190, 4.2, '#4a4d5a', 0.95, '') + L.cloud(170, 226, 3, '#5a5d6a', 0.9, '') + L.cloud(650, 236, 3.2, '#3d404c', 0.92, '') + L.land(334, '#e6cf9f', 3, 20) + pillarHall(400, 354, 300, 150, 7) + L.land(362, P.sand2, 5, 10)
    + L.palm(110, 444, 170, 10) + L.palm(700, 444, 160, -10) + L.land(472, P.sand3, 8, 6);
  S.aad3 = () => L.sky('storm') + L.land(320, '#6a6050', 3, 20) + L.dust(200, 300, 2.2, '#b9a888', 0.6) + L.dust(600, 320, 2.4, '#a89878', 0.6) + L.land(380, '#8a7a5a', 5, 12) + fallenPalm(240, 420, 1, -6) + fallenPalm(540, 448, 1.1, 8) + fallenPalm(360, 482, 0.9, -3) + gusts(5, 12);
  S.aad4 = () => L.sky('dawn') + L.sun(560, 240, 46) + L.land(320, '#b98a7a', 3, 20) + [[150, 150], [220, 90], [300, 190], [470, 120], [560, 60], [640, 160]].map(([x, h]) => R(x - 10, 356 - h, 20, h, '#cdb88a')).join('') + L.land(350, '#d2a070', 5, 22) + L.land(414, P.sand2, 7, 14) + L.land(472, P.sand3, 9, 6) + L.flock(300, 150, 4, 5, 90, 1);

  // ---------- 6. Salih and the she-camel ----------
  const cliff = (c1 = '#b0765a', c2 = '#94623e') => Pth('M0 500 L0 190 L90 150 L200 180 L300 120 L430 150 L540 110 L660 160 L800 130 L800 500Z', c1) + Pth('M0 260 L800 240 L800 280 L0 300Z', c2, 'opacity=".35"');
  const carved = (pts, dark = '#2a1a14', frame = '#7a4a34') => pts.map(([x, y, w = 44, h = 70]) => `<path d="M${x - w / 2 - 8} ${y} v${-h - 6} h${w + 16} v${h + 6}Z" fill="${frame}"/><path d="M${x - w / 2} ${y} v${-h + w / 2} a${w / 2} ${w / 2} 0 0 1 ${w} 0 v${h - w / 2}Z" fill="${dark}"/>`).join('');
  const thamud = [[140, 360], [260, 340, 50, 84], [400, 350], [530, 330, 54, 90], [660, 356]];
  S.slh1 = () => L.sky('day') + L.sun(130, 80, 36) + cliff() + carved(thamud) + R(0, 360, 800, 12, '#94623e') + L.land(374, P.sand2, 3, 8) + L.palm(60, 444, 150, 8) + L.palm(740, 444, 140, -8) + tree(330, 456, 1, P.leaf2, '#d4472a', 4) + tree(470, 460, 1, P.leaf3, null) + L.land(468, P.sand3, 8, 6);
  S.slh2 = () => L.sky('day') + L.sun(660, 90, 36) + cliff('#b98a6a', '#a0765a') + L.land(360, '#cfe0b0', 3, 12) + E(230, 436, 160, 28, P.sea2) + E(230, 432, 142, 21, P.sea1) + `<path class="ripple" d="M170 432 q20 -6 40 0 q20 6 40 0" stroke="#d8f0f4" stroke-width="2.5" fill="none"/>`
    + G(520, 446, 2.1, L.camel(0, 0, 1, '#c9995a'), true) + L.land(474, P.leaf1, 7, 8) + L.grass(640, 486, 10, 50, 3, P.leaf3) + L.grass(40, 490, 8, 44, 5, P.leaf2);
  S.slh3 = () => L.sky('storm') + cliff('#6a5248', '#4a3a34') + carved(thamud, '#17100c', '#4a342a') + R(0, 360, 800, 12, '#4a3a34') + L.land(374, '#7a6a58', 3, 8) + L.bolt(560, 30, 1) + E(230, 446, 150, 22, '#3a4a55') + L.land(470, '#5a4c40', 8, 6);

  // ---------- 20. Shu'ayb and the scales ----------
  S.shb1 = () => bazaar() + L.sack(110, 480, 1) + L.sack(184, 464, 0.8, '#a88a5c') + scales(610, 486, 0.72, 0) + L.steps(360, 488, 6, 14, -14, P.sand4, 1.2);
  const stall = (c) => R(0, 0, 800, 500, '#e7d2ab') + R(0, 0, 800, 60, c) + fronds(0, 800, 60, c) + R(0, 404, 800, 96, P.wood2) + R(0, 394, 800, 12, P.wood3);
  const weights = (x, y) => [0, 1, 2].map((i) => R(x + i * 30, y - 20 - i * 6, 24, 20 + i * 6, '#7d7a80', 'rx="3"')).join('');
  S.shb2 = () => stall(P.terra) + scales(400, 396, 1.35, 10) + L.sack(120, 394, 1.1) + weights(630, 394);
  S.shb3 = () => stall('#2f6f8b') + L.glow(400, 200, 260, '#fff3c4', 0.5) + scales(400, 396, 1.35, 0) + L.sack(120, 394, 1.1) + weights(630, 394);
  S.shb4 = () => L.sky('dusk') + L.cloud(400, 150, 4.6, '#2a2430', 0.96, '') + L.cloud(160, 190, 3, '#3a3440', 0.92, '') + L.cloud(660, 200, 3.2, '#241e2a', 0.94, '') + L.town(340, 311, 9, ['#6b5178', '#5a4470', '#7a5b7c'], 0, 0, 800, 40, 80) + L.land(344, '#8f6a58', 3, 6) + L.land(410, '#7a5548', 6, 10) + L.land(468, '#5a3f38', 9, 6);

  // ---------- 26. Musa and the wise servant ----------
  S.khz1 = () => L.sky('day') + L.sun(400, 90, 40) + L.sea(230, [P.sea1, P.sea2], 5, 110, 50) + Pth('M0 500 L0 330 Q200 300 330 360 Q400 400 470 360 Q600 300 800 330 L800 500Z', P.sand1) + Pth('M330 360 Q400 400 470 360 Q446 424 400 432 Q354 424 330 360Z', P.sea1)
    + E(230, 410, 100, 44, '#8f857c') + E(222, 398, 78, 30, '#a39a90') + `<path d="M190 380 h60 l-8 -34 h-44Z" fill="${P.wood1}"/><path d="M190 380 h60" stroke="${P.wood4}" stroke-width="4"/>` + `<path d="M270 392 Q330 372 380 392" stroke="#d8f0f4" stroke-width="3" fill="none" stroke-dasharray="4 8"/>` + fish(404, 398, 1.4, '#c9d8dc', true);
  S.khz2 = () => L.sky('day') + L.cloud(200, 90, 1.1) + L.sun(660, 90, 36) + L.sea(300, [P.sea1], 5, 120, 0) + L.boat(400, 384, 1.5, '') + `<path d="M372 346 l26 -6 l6 18 l-28 8Z" fill="#17131a"/>` + L.sea(380, [P.sea2, P.sea3], 5, 120, 50) + `<g class="bob"><rect x="570" y="400" width="64" height="12" rx="3" fill="${P.wood1}" transform="rotate(-12 600 406)"/></g>`;
  const khzTown = (kind, far, ground, front) => L.sky(kind) + L.town(330, 301, 8, far, 0.3, 0, 800, 40, 80) + L.land(334, ground, 3, 6) + L.house(50, 444, 190, 120, far[0], { win: true, winAt: 0.3, doorAt: 0.7 });
  S.khz3 = () => khzTown('dusk', ['#7a5b7c', '#6b5178', '#5a4470'], '#8f6a58') + brickWall(480, 446, 260, 170, 10, '#c79a80') + L.land(448, '#7a5548', 6, 6) + rocks([[640, 462, 14], [670, 474, 10], [330, 470, 12]], '#c79a80');
  S.khz4 = () => khzTown('dawn', ['#c79a80', '#b98a7a', '#d6ac8c'], '#c99560') + L.sun(660, 250, 44) + brickWall(480, 446, 260, 170, 0) + L.land(448, P.sand2, 6, 6) + L.glow(480, 478, 90, '#ffe08a', 0.8) + R(446, 464, 68, 28, P.gold, 'rx="4"') + [0, 1, 2].map((i) => `<line x1="454" y1="${471 + i * 7}" x2="506" y2="${471 + i * 7}" stroke="#8a6a2a" stroke-width="2"/>`).join('');

  // ---------- 27. Dawud and Jalut ----------
  S.jlt1 = () => L.sky('noon') + L.sun(140, 90, 40) + L.peaks(280, P.rock1, 6, 5, 80) + L.land(290, '#e6cf9f', 3, 16) + ridgeArmy(316, 9, 24, 0.9) + L.land(320, P.sand2, 4, 8) + Pth('M0 350 Q200 326 400 350 T800 340 L800 410 Q600 424 400 410 T0 420Z', P.sea1)
    + `<path class="ripple" d="M180 380 q25 -8 50 0 q25 8 50 0" stroke="#d8f0f4" stroke-width="2.5" fill="none"/><path class="ripple" d="M520 384 q25 -8 50 0" stroke="#d8f0f4" stroke-width="2.5" fill="none"/>` + L.land(432, P.sand3, 7, 8) + L.grass(60, 446, 8, 50, 3, P.leaf2) + L.grass(680, 450, 8, 50, 5, P.leaf3) + L.steps(360, 474, 5, 20, -6, P.sand4, 1.2);
  S.jlt2 = () => L.sky('day') + L.sun(660, 80, 34) + L.land(250, '#d8c39a', 3, 20) + ridgeArmy(274, 11, 46, 1.1, 20, 780) + L.land(278, P.sand2, 4, 12) + L.dust(200, 300, 1.3) + L.dust(580, 306, 1.4) + L.land(350, P.sand1, 6, 16) + ridgeArmy(450, 4, 7, 1.5, 290, 520) + L.land(456, P.sand3, 8, 8);

  // ---------- 35. Isa in the cradle ----------
  const cradle = (x, y, s = 1) => G(x, y, s, L.glow(0, -60, 130, '#fff3c4', 0.7) + `<path d="M-80 0 Q0 26 80 0" stroke="${P.wood4}" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M-70 -70 L-60 -6 L60 -6 L70 -70Z" fill="${P.wood2}"/><path d="M-70 -70 L70 -70 L66 -52 L-66 -52Z" fill="${P.wood1}"/><path d="M-62 -70 Q0 -96 62 -70Z" fill="#f8efdc"/>` + [-40, -14, 12, 38].map((dx) => `<rect x="${dx}" y="-50" width="6" height="42" fill="${P.wood3}"/>`).join(''));
  S.isa1 = () => L.sky('dawn') + L.sun(160, 240, 44) + L.peaks(320, '#5a3f72', 3, 5, 80) + L.land(340, '#b98a7a', 3, 20) + L.land(400, '#c99560', 6, 12) + Pth('M520 500 Q560 450 500 430 Q460 416 480 400 L494 402 Q480 416 520 430 Q590 452 560 500Z', P.sea1)
    + L.palm(400, 456, 280, 6) + [[392, 196], [408, 204], [420, 198], [400, 214], [414, 216]].map(([x, y]) => E(x, y, 6, 8, '#d98a2a')).join('') + [[380, 300], [436, 360], [404, 440], [452, 448], [366, 452]].map(([x, y]) => E(x, y, 5, 7, '#d98a2a')).join('') + L.land(478, P.sand2, 8, 6);
  S.isa2 = () => room('#5a4636', '#3b2a22') + windowArch(160, 250, 'day') + Pth('M116 250 L204 250 L480 500 L260 500Z', '#f6e7c4', 'opacity=".14"') + hangLamp(620, 140, 80) + mat(400, 492, 420, '#2f6f8b') + cradle(400, 452, 1.5);

  // ---------- 110. Luqman's advice ----------
  S.lqm1 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(180, 90, 1) + L.peaks(310, P.rock1, 7, 5, 80) + L.land(330, '#cfe0b0', 3, 20) + L.land(390, P.leaf1, 6, 12) + E(400, 456, 240, 30, '#3a6a4a', 'opacity=".5"') + tree(400, 450, 2.8, '#3d8262', null) + mat(290, 486, 180, P.terra) + mat(510, 486, 180, '#2f6f8b');
  S.lqm2 = () => L.sky('night') + L.stars(261, 60, 240) + L.peaks(350, '#141838', 4, 5, 90) + L.land(380, '#1b1838', 3, 10) + Pth('M250 470 L290 330 L370 280 L470 290 L540 350 L570 470Z', '#4a4458') + Pth('M290 330 L370 280 L470 290 L420 340 L330 350Z', '#5a546a')
    + `<path d="M400 300 l-8 40 l12 30 l-10 50" stroke="#17131f" stroke-width="5" fill="none"/>` + L.glow(398, 372, 46, '#ffe08a', 0.9) + `<circle class="tw" cx="398" cy="372" r="5" fill="#ffe08a"/>` + L.land(468, '#0f1230', 6, 6);
  S.lqm3 = () => L.sky('day') + L.sun(130, 90, 36) + L.town(320, 271, 8, [P.clay1, P.clay2], 0, 0, 800, 36, 70) + L.land(324, P.sand1, 3, 6) + Pth('M240 500 L372 326 L428 326 L560 500Z', '#f3e3bb') + L.palm(90, 444, 170, 10) + donkey(650, 456, 1.4, true) + L.steps(398, 488, 6, 1, -20, P.sand4, 1.2);

  // ---------- 19. Ayyub the patient ----------
  S.ayb1 = () => L.sky('day') + L.sun(130, 90, 36) + L.cloud(560, 80, 1) + L.land(300, '#cfe0b0', 3, 22) + L.house(520, 334, 200, 100, '#ead2aa', { win: true, winAt: 0.75, doorAt: 0.3 }) + tree(460, 338, 0.9, P.leaf2, '#d4472a', 2) + tree(760, 342, 0.8, P.leaf3, null) + L.land(344, P.leaf1, 5, 14)
    + L.grass(40, 424, 30, 70, 7, '#c99a2a') + cow(340, 414, 0.9, true) + cow(440, 428, 0.8, true, '#c9995a') + sheep(560, 434, 0.9) + sheep(630, 448, 0.9, true) + sheep(700, 432, 0.8, false, '#e6e0d2') + L.camel(210, 452, 0.9, P.rock3) + L.land(474, P.leaf2, 8, 8);
  S.ayb2 = () => L.sky('dusk') + L.stars(251, 16, 150) + L.town(310, 302, 6, ['#6b5178', '#5a4470'], 0.3, 440, 800, 30, 60) + L.land(316, '#6a5a6a', 3, 14) + L.land(384, '#5a4a5a', 6, 12) + hut(260, 446, 1) + burnt(500, 446, 1.1) + L.land(456, '#4a3a4a', 8, 8) + L.jug(370, 470, 0.8, '#7d7a80');
  S.ayb3 = () => L.sky('dawn') + L.sun(620, 230, 50) + L.land(316, '#8fa878', 3, 14) + L.land(384, P.leaf1, 6, 12) + hut(230, 446, 1, '#b98d6c', '#7a5a44') + tree(560, 446, 1.3, P.leaf2, '#d4472a', 5) + L.land(456, P.leaf2, 8, 8) + spring(400, 480, 1) + L.flock(420, 130, 6, 6, 110, 1);

  // ---------- shared pieces for the sira stories ----------
  const elephant = (x, y, s = 1, flip = false, c = '#7d7a86', kneel = false) => G(x, y, s, `<g fill="${c}">` + (kneel ? `<rect x="-50" y="-14" width="104" height="14" rx="6"/>` : `<rect x="-46" y="-44" width="18" height="44"/><rect x="-20" y="-44" width="18" height="44"/><rect x="16" y="-44" width="18" height="44"/><rect x="40" y="-44" width="18" height="44"/>`) + `<g transform="translate(0 ${kneel ? 30 : 0})"><ellipse cx="4" cy="-74" rx="62" ry="40"/><circle cx="62" cy="-96" r="32"/><path d="M84 -90 Q104 -70 96 -30 Q94 -14 106 -12 L108 -4 Q84 -2 84 -30 Q86 -60 70 -74Z"/><path d="M-56 -84 q-12 10 -8 34" stroke="${c}" stroke-width="5" fill="none"/></g></g><g transform="translate(0 ${kneel ? 30 : 0})"><path d="M40 -116 Q18 -128 26 -84 Q34 -62 54 -78Z" fill="#6a6772"/><path d="M76 -76 q18 6 24 22" stroke="#f1e2c0" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="72" cy="-102" r="3" fill="#1a1410"/></g>`, flip);
  const acacia = (x, y, s = 1, leaf = '#5a7a4a') => G(x, y, s, `<path d="M-5 0 L-3 -70 L-40 -104 M-3 -70 L36 -108 M-3 -60 L3 -110" stroke="${P.wood3}" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-116" rx="92" ry="24" fill="${leaf}"/><ellipse cx="-30" cy="-128" rx="50" ry="16" fill="#6a8a56"/>`);
  const saddle = (x, y, s = 1, c = P.wood2, cloth = P.terra) => G(x, y, s, `<path d="M-44 0 Q-40 -34 -22 -40 Q0 -24 22 -40 Q40 -34 44 0Z" fill="${c}"/><path d="M-30 -8 Q0 -22 30 -8 L30 0 L-30 0Z" fill="${cloth}"/>`);
  const blackStone = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="0" rx="40" ry="30" fill="#c9ccd4"/><ellipse cx="0" cy="0" rx="28" ry="20" fill="#17131a"/><ellipse cx="-8" cy="-6" rx="8" ry="5" fill="#3a3440"/>`);
  const noonValley = () => L.sky('noon') + L.sun(400, 90, 46) + L.peaks(300, P.rock1, 5, 5, 70) + Pth('M40 360 Q150 200 260 360Z', '#9a8676') + Pth('M540 360 Q660 180 780 360Z', '#9a8676') + L.land(356, '#e9d6ad', 3, 8) + L.land(410, '#dcc391', 5, 6);

  // ---------- 12. The spring of Zamzam ----------
  S.zmz1 = () => noonValley() + L.steps(250, 436, 8, 40, 0, P.sand4, 1.2) + L.shrub(110, 452, 0.9, 2) + L.shrub(700, 460, 1, 4) + `<g transform="translate(420 480) rotate(78)">${L.jug(0, 0, 0.9, '#8a5a34')}</g>` + L.land(492, '#cdb07a', 8, 3);
  S.zmz2 = () => noonValley() + L.steps(250, 436, 8, 40, 0, P.sand4, 1.2) + `<ellipse cx="400" cy="474" rx="150" ry="28" fill="none" stroke="#c9995a" stroke-width="14"/>` + spring(400, 472, 1.15) + L.flock(400, 190, 9, 8, 110, 1.2);
  S.zmz3 = () => L.sky('dusk') + L.stars(271, 16, 150) + L.peaks(300, '#5a3f72', 5, 5, 70) + Pth('M40 360 Q150 200 260 360Z', '#6b5178') + Pth('M540 360 Q660 180 780 360Z', '#6b5178') + L.land(356, '#b98a7a', 3, 8)
    + L.tent(150, 420, 1.1) + L.tent(260, 430, 0.9, '#e9dcc0', '#2f6f8b') + L.tent(640, 424, 1.1) + L.camel(540, 430, 0.7, P.rock3, true) + L.land(432, '#c99560', 5, 6) + spring(400, 476, 0.9) + L.palm(480, 470, 90, 6) + L.flock(400, 170, 6, 7, 120, 1.1);

  // ---------- 40. The army of the elephant ----------
  S.fil1 = () => L.sky('day') + L.sun(660, 90, 38) + L.peaks(300, P.rock1, 3, 5, 110) + L.land(320, '#e6cf9f', 3, 16) + ridgeArmy(340, 13, 30, 1) + L.land(344, P.sand2, 4, 10) + L.dust(180, 380, 1.4) + L.dust(640, 386, 1.3) + elephant(400, 456, 1.5) + L.land(476, P.sand3, 8, 6);
  S.fil2 = () => L.sky('day') + L.sun(130, 90, 38) + L.cloud(600, 90, 1) + valley() + kaaba(400, 396, 100, 104, true) + L.land(400, P.sand2, 5, 8)
    + [[110, 300, 0.5], [190, 320, 0.55], [640, 306, 0.5], [710, 326, 0.55], [150, 460, 0.9], [270, 470, 1], [560, 466, 0.95], [680, 472, 0.9]].map(([x, y, s], i) => G(x, y, s, L.camel(0, 0, 1, i % 2 ? P.rock3 : P.rock4), i > 1 && i < 4 || i > 5)).join('') + L.land(486, P.sand3, 8, 4);
  S.fil3 = () => L.sky('day') + L.flock(200, 110, 31, 16, 180, 1.3) + L.flock(560, 130, 32, 16, 180, 1.3) + L.flock(400, 70, 33, 12, 200, 1.1) + L.peaks(310, P.rock1, 3, 5, 100) + L.land(330, '#e6cf9f', 3, 16)
    + [[180, 250], [260, 300], [340, 230], [440, 280], [520, 240], [610, 310], [300, 350], [480, 360]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="#3a2a20"/>`).join('') + L.land(380, P.sand2, 5, 10)
    + elephant(400, 450, 1.5, false, '#7d7a86', true) + `<g transform="translate(180 470) rotate(70)">${L.banner(0, 0, 70, P.terra, 1.2)}</g><g transform="translate(640 476) rotate(-64)">${L.banner(0, 0, 70, '#2f6f8b', 1.2)}</g>` + L.land(488, P.sand3, 8, 4);

  // ---------- 42. The Trustworthy and the Black Stone ----------
  S.hjr1 = () => L.sky('day') + L.sun(650, 90, 36) + valley() + L.land(430, P.sand3, 6, 8) + kaaba(400, 440, 220, 110, false) + rocks([[170, 458], [210, 470, 12], [140, 474, 14], [620, 460], [660, 474, 13], [590, 478, 11]]) + L.sticks(250, 478, 1, false) + L.sticks(560, 482, 0.9, false);
  S.hjr2 = () => L.sky('day') + R(0, 0, 800, 250, '#8f857c') + [50, 100, 150, 200].map((y) => `<line x1="0" y1="${y}" x2="800" y2="${y}" stroke="#6a6058" stroke-width="2"/>`).join('') + [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<line x1="${i * 100 + 50}" y1="50" x2="${i * 100 + 50}" y2="100" stroke="#6a6058" stroke-width="2"/><line x1="${i * 100}" y1="100" x2="${i * 100}" y2="150" stroke="#6a6058" stroke-width="2"/><line x1="${i * 100 + 50}" y1="150" x2="${i * 100 + 50}" y2="200" stroke="#6a6058" stroke-width="2"/>`).join('')
    + R(0, 250, 800, 250, P.sand2) + Pth('M180 470 L250 300 L550 300 L620 470Z', '#f4f1ea') + Pth('M206 456 L264 314 L536 314 L594 456Z', 'none', `stroke="${P.terra}" stroke-width="4"`) + [[180, 470], [250, 300], [550, 300], [620, 470]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="#e6dcc6"/>`).join('') + blackStone(400, 384, 1.5);
  S.hjr3 = () => L.sky('day') + L.sun(130, 80, 34) + kaaba(470, 500, 620, 420, false) + R(150, 80, 20, 420, '#6a6058') + blackStone(190, 330, 1.25) + L.glow(190, 330, 110, '#fff3c4', 0.5) + L.flock(80, 150, 5, 4, 50, 0.9);

  // ---------- 44. The cave of Hira ----------
  const nur = (c1, c2) => Pth('M150 500 L330 170 L400 110 L470 150 L560 260 L700 500Z', c1) + Pth('M400 110 L470 150 L560 260 L470 230 L420 180Z', c2);
  S.hra1 = () => L.sky('night') + L.stars(281, 80, 280) + L.moon(660, 90, 28) + L.peaks(380, '#141838', 5, 5, 90) + nur('#1a1f45', '#232a58') + E(432, 196, 22, 16, '#0a0c1c') + L.glow(432, 196, 46, '#ffe08a', 0.5)
    + L.town(452, 282, 7, ['#2a2a55', '#232349'], 0.25, 0, 300, 24, 44) + R(96, 414, 30, 34, '#0e0c16') + R(96, 422, 30, 4, P.gold) + L.land(456, '#0f1230', 6, 6);
  S.hra2 = () => L.sky('night') + L.stars(282, 60, 260) + L.moon(520, 130, 22) + L.peaks(330, '#141838', 4, 5, 80) + L.land(350, '#1b1838', 3, 10) + L.town(372, 283, 8, ['#2a2a55', '#232349', '#30305e'], 0.3, 220, 580, 20, 40) + R(388, 340, 26, 30, '#0e0c16') + R(388, 346, 26, 3, P.gold) + L.land(376, '#262148', 5, 6)
    + Pth('M0 0 H800 V500 H0Z M400 70 C560 60 650 190 630 340 C620 420 540 440 400 440 C260 440 180 420 170 340 C150 190 240 60 400 70Z', '#17131f', 'fill-rule="evenodd"')
    + Pth('M0 0 H800 V500 H0Z M400 40 C590 30 700 180 680 350 C668 450 560 474 400 474 C240 474 132 450 120 350 C100 180 210 30 400 40Z', '#231d2e', 'fill-rule="evenodd"') + mat(400, 486, 200, '#3a4a5a');
  S.hra3 = () => L.sky('dawn') + L.peaks(380, '#5a3f72', 5, 5, 90) + Pth('M432 196 L300 0 L560 0Z', '#fff3c4', 'opacity=".3"') + nur('#4a3a66', '#5a4a78') + L.glow(432, 196, 150, '#fff3c4', 0.9) + E(432, 196, 22, 16, '#fff6d8')
    + L.town(452, 284, 7, ['#c79a80', '#b98a7a'], 0, 0, 300, 24, 44) + R(96, 414, 30, 34, '#2a221c') + R(96, 422, 30, 4, P.gold) + L.land(456, '#8a5a6a', 6, 6) + L.flock(600, 140, 7, 6, 90, 1);

  // ---------- 51. The night of the hijra ----------
  S.mbt1 = () => L.sky('night') + L.stars(291, 80, 300) + L.moon(400, 110, 26) + L.town(400, 42, 4, ['#1a1c3e', '#20224a'], 0.2, 250, 550, 60, 110) + lane('#232349', '#1c1c40', '#2e2a52') + laneDoors(false)
    + [[40, 480, -8], [90, 470, 6], [150, 452, -4], [650, 452, 5], [710, 470, -6], [760, 480, 8]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r})"><line x1="0" y1="0" x2="0" y2="-150" stroke="#0d0f24" stroke-width="4"/><path d="M-6 -150 l6 -22 l6 22Z" fill="#aeb3bd"/></g>`).join('');
  S.mbt2 = () => room('#3a3050', '#2a2238') + windowArch(640, 240, 'night') + L.lamp(130, 392, 1.1) + R(220, 420, 360, 16, P.wood3, 'rx="4"') + R(232, 436, 12, 30, P.wood4) + R(556, 436, 12, 30, P.wood4) + R(232, 392, 336, 30, '#d8cdb4', 'rx="8"')
    + Pth('M262 384 L540 384 L560 426 L244 426Z', '#2f7a4a') + Pth('M276 392 L528 392 L540 418 L264 418Z', 'none', `stroke="${P.gold}" stroke-width="2.5"`);

  // ---------- 57. The moaning trunk ----------
  const masjid = () => R(0, 0, 800, 500, '#e7d2ab') + floor(392, '#cdb07a') + R(0, 0, 800, 64, P.wood3) + fronds(0, 800, 64) + pcol(90, 64, 400) + pcol(710, 64, 400);
  const minbar = (x, y) => R(x, y - 34, 190, 34, P.wood2) + R(x + 60, y - 68, 130, 34, P.wood1) + R(x + 120, y - 102, 70, 34, P.wood2) + R(x + 176, y - 190, 14, 190, P.wood3) + [0, 60, 120].map((d) => R(x + d, y - 34 - (d / 60) * 34, 70, 5, P.wood4)).join('');
  S.hnn1 = () => masjid() + niche(560, 392, 130, 210, '#b98d5c') + pcol(300, 64, 420) + R(280, 412, 40, 12, P.wood4, 'rx="4"') + mat(300, 486, 300, '#2f6f8b');
  S.hnn2 = () => masjid() + niche(400, 392, 120, 200, '#b98d5c') + L.glow(230, 250, 150, '#fff3c4', 0.7) + pcol(230, 64, 420) + R(210, 412, 40, 12, P.wood4, 'rx="4"') + minbar(500, 440) + mat(360, 492, 260, '#2f6f8b');

  // ---------- 66. Born in the Ka'ba ----------
  S.mld1 = () => L.sky('day') + kaaba(400, 500, 700, 470, false) + L.glow(400, 280, 220, '#fff3c4', 0.8) + `<path d="M400 60 l-14 60 l20 50 l-22 60 l24 56 l-18 60 l16 70 l-10 84" stroke="#fff6d8" stroke-width="16" fill="none" stroke-linejoin="round"/><path d="M400 60 l-14 60 l20 50 l-22 60 l24 56 l-18 60 l16 70 l-10 84" stroke="#ffe08a" stroke-width="5" fill="none" stroke-linejoin="round"/>`;
  S.mld2 = () => L.sky('dawn') + L.sun(160, 250, 44) + valley('#7a6a90', '#5a4a72') + L.land(430, '#c9a070', 6, 8) + L.glow(400, 330, 240, '#fff3c4', 0.5) + kaaba(400, 440, 210, 220, true) + L.dove(250, 452, 0.9) + L.dove(560, 458, 0.8, '#dfe3e7', true) + L.flock(580, 150, 6, 6, 90, 1);

  // ---------- 69. Ghadir Khumm ----------
  const ghadir = (kind = 'noon') => L.sky(kind) + L.sun(400, 80, 50, '#fff0a8') + L.peaks(290, P.rock1, 7, 5, 60) + L.land(310, '#e9d6ad', 3, 14) + L.land(370, '#dcc391', 5, 10);
  S.ghd1 = () => ghadir() + [0, 1, 2, 3].map((i) => L.camel(70 + i * 80, 350 - (i % 2) * 4, 0.55, i % 2 ? P.rock4 : P.rock3)).join('') + [0, 1, 2, 3].map((i) => G(730 - i * 80, 352 - (i % 2) * 4, 0.55, L.camel(0, 0, 1, i % 2 ? P.rock3 : P.rock4), true)).join('')
    + E(400, 430, 150, 26, P.sea2) + E(400, 426, 132, 19, P.sea1) + acacia(250, 440, 1.2) + acacia(560, 446, 1.3) + acacia(660, 420, 0.8) + L.land(480, '#cdb07a', 8, 5);
  S.ghd2 = () => ghadir() + acacia(210, 440, 1.7) + acacia(600, 444, 1.8) + E(400, 462, 190, 22, '#cdb07a') + [[-66, 0], [-22, 0], [22, 0], [66, 0], [-44, -34], [0, -34], [44, -34], [-22, -68], [22, -68]].map(([dx, dy], i) => saddle(400 + dx, 460 + dy, 1, i % 2 ? P.wood2 : P.wood1, i % 3 ? P.terra : '#2f6f8b')).join('') + R(340, 356, 120, 8, '#f4f1ea', 'rx="4"');
  S.ghd3 = () => L.sky('dusk') + L.stars(295, 16, 140) + L.peaks(290, '#5a3f72', 7, 5, 60) + L.land(310, '#b98a7a', 3, 14) + ridgeArmy(340, 17, 20, 0.8) + L.land(344, '#c99560', 5, 10) + L.tent(400, 452, 2.2, '#f1e6cf', '#2f7a4a') + L.tent(150, 440, 1.2) + L.tent(660, 444, 1.3, '#e9dcc0', '#2f6f8b') + L.steps(250, 484, 6, 22, -4, P.sand4, 1.2) + L.steps(470, 486, 6, 22, 4, P.sand4, 1.2);

  // ---------- 71. The fellow traveller ----------
  S.hms1 = () => road() + L.steps(120, 452, 12, 50, -2, P.sand4, 1.3) + L.steps(140, 474, 12, 50, -2, '#8a5a34', 1.3);
  S.hms2 = () => L.sky('day') + L.sun(400, 90, 38) + L.land(280, '#e6cf9f', 3, 18) + L.town(296, 291, 6, [P.clay1, P.clay2, '#eedcb8'], 0, 30, 300, 26, 56) + L.palm(40, 300, 70, 4) + L.palm(310, 300, 60, -4) + L.house(620, 300, 80, 44, P.clay2, { win: true }) + L.palm(720, 300, 60, -4) + L.land(304, P.sand2, 5, 8)
    + Pth('M330 500 Q380 420 300 380 Q220 340 170 306 L196 304 Q260 336 340 372 Q440 420 470 500Z', '#f3e3bb') + Pth('M400 440 Q480 400 560 360 Q620 330 650 306 L672 308 Q650 340 590 372 Q520 410 450 470Z', '#f3e3bb')
    + L.steps(470, 430, 5, 34, -22, P.sand4, 1.2) + L.steps(486, 446, 5, 34, -22, '#8a5a34', 1.2) + L.shrub(120, 440, 1, 3) + L.shrub(700, 450, 1, 5);

  // ---------- 99. The farm ----------
  const rowsGreen = (y0, y1, cnt, c1 = '#5fa57c', c2 = '#4a8a64') => Array.from({ length: cnt }, (_, i) => { const y = y0 + ((y1 - y0) / cnt) * i, h = (y1 - y0) / cnt; return R(0, y, 800, h + 1, i % 2 ? c1 : c2); }).join('');
  S.mzr1 = () => L.sky('day') + L.sun(130, 90, 36) + L.cloud(560, 80, 1) + L.land(290, '#cfe0b0', 3, 16) + L.house(560, 316, 150, 80, '#ead2aa', { win: true, winAt: 0.75, doorAt: 0.3 }) + L.palm(740, 318, 110, -6) + L.palm(500, 318, 90, 5) + rowsGreen(320, 500, 9)
    + L.grass(0, 400, 80, 40, 3, '#3d8262') + L.grass(0, 470, 86, 46, 5, '#2a634a') + donkey(250, 420, 1.3, false, '#b9a48a');
  S.mzr2 = () => L.sky('day') + L.land(200, '#cfe0b0', 3, 16) + rowsGreen(230, 500, 8) + L.grass(0, 330, 86, 44, 3, '#3d8262') + E(400, 440, 190, 34, '#c9995a') + L.sack(380, 440, 1.1, '#6a2f4e') + [[460, 436, 1], [496, 444, 1], [530, 434, 1], [476, 420, 1], [512, 418, 1], [446, 452, 1], [540, 452, 1]].map(([x, y]) => coin(x, y, true)).join('') + L.grass(0, 500, 86, 40, 7, '#2a634a');

  // ---------- 11. Ibrahim's guests ----------
  S.mhm1 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(200, 90, 1) + L.peaks(300, P.rock1, 9, 5, 70) + L.land(320, '#e6cf9f', 3, 18) + L.land(380, P.sand2, 5, 10) + tree(620, 440, 1.6, P.leaf2, null) + L.tent(330, 446, 2.4, '#f1e6cf', P.terra) + L.land(450, P.sand3, 7, 6)
    + Pth('M330 500 Q340 470 330 448 L344 448 Q370 470 400 500Z', '#f3e3bb') + L.jug(480, 470, 0.9) + sheep(120, 440, 0.8) + cow(190, 452, 0.8, true);
  S.mhm2 = () => R(0, 0, 800, 500, '#e9dcc0') + Pth('M0 0 L400 -120 L800 0 L800 90 L400 20 L0 90Z', P.terra) + R(0, 340, 800, 160, '#c9995a') + Pth('M110 480 L220 350 L580 350 L690 480Z', '#efe2c4') + Pth('M140 468 L234 362 L566 362 L660 468Z', 'none', `stroke="${P.terra}" stroke-width="3"`)
    + E(400, 420, 130, 26, '#b98d3a') + E(400, 414, 116, 20, P.gold) + Pth('M320 412 Q340 350 400 346 Q470 350 480 412Z', '#a8643a') + Pth('M340 404 Q360 366 400 362 Q430 364 448 384 Q420 372 390 380 Q360 388 340 404Z', '#c98a52')
    + L.loaf(250, 400, 0.8) + L.loaf(550, 400, 0.8) + L.loaf(280, 444, 0.8) + L.loaf(520, 444, 0.8) + L.bowl(400, 462, 0.7, P.clay3);

  // ---------- 10. Ibrahim and the four birds ----------
  const eagle = (x, y, s = 1, flip = false) => G(x, y, s, `<path d="M-40 -20 L-66 -6 L-60 10 L-36 -4Z" fill="#5a3d28"/><ellipse cx="-6" cy="-22" rx="34" ry="20" fill="#6a4a30"/><path d="M-24 -30 Q-4 -62 26 -40 Q6 -24 -2 -12Z" fill="#4a3220"/><circle cx="26" cy="-40" r="13" fill="#f4f1ea"/><path d="M36 -42 L54 -36 L38 -30Z" fill="#e6b450"/><circle cx="29" cy="-43" r="2.2" fill="#1a1410"/><path d="M-10 -4 v14 M4 -4 v14" stroke="#e6b450" stroke-width="3.5"/>`, flip);
  const rooster = (x, y, s = 1, flip = false) => G(x, y, s, `<path d="M-30 -24 Q-62 -64 -34 -70 Q-50 -44 -20 -34Z" fill="#2a634a"/><path d="M-28 -22 Q-54 -50 -44 -66 Q-36 -40 -16 -32Z" fill="#b9573d"/><ellipse cx="-4" cy="-24" rx="28" ry="18" fill="#c9773a"/><path d="M12 -30 Q20 -58 28 -56 L30 -28Z" fill="#c9773a"/><circle cx="26" cy="-58" r="11" fill="#d98a4e"/><path d="M18 -68 q4 -10 8 0 q4 -10 8 0 q4 -8 6 2 l-22 2Z" fill="#d4472a"/><path d="M36 -58 L48 -54 L36 -50Z" fill="#e6b450"/><path d="M30 -48 q4 10 -4 12Z" fill="#d4472a"/><circle cx="29" cy="-60" r="2" fill="#1a1410"/><path d="M-8 -6 v16 M6 -6 v16" stroke="#e6b450" stroke-width="3.5"/>`, flip);
  const duck = (x, y, s = 1, flip = false) => G(x, y, s, `<ellipse cx="-4" cy="-16" rx="32" ry="17" fill="#f4f1ea"/><path d="M-34 -18 l-14 -10 l6 16Z" fill="#e6e0d2"/><path d="M14 -22 Q18 -46 28 -46 L30 -20Z" fill="#f4f1ea"/><circle cx="28" cy="-48" r="11" fill="#3d8262"/><path d="M36 -50 h16 q4 4 0 7 h-16Z" fill="#f0a030"/><circle cx="31" cy="-51" r="2" fill="#1a1410"/><path d="M-6 0 l-6 8 h12Z M8 0 l-6 8 h12Z" fill="#f0a030"/>`, flip);
  const peacock = (x, y, s = 1, flip = false) => G(x, y, s, `<path d="M-10 -20 Q-110 -30 -150 20 Q-90 0 -10 -6Z" fill="#2a8a6a"/>` + [[-130, 12], [-104, 0], [-78, -6], [-52, -10]].map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="8" fill="#e6b450"/><circle cx="${cx}" cy="${cy}" r="4" fill="#2f6f8b"/>`).join('') + `<ellipse cx="0" cy="-20" rx="24" ry="16" fill="#1f6f9b"/><path d="M12 -28 Q16 -66 26 -66 L28 -24Z" fill="#1f6f9b"/><circle cx="26" cy="-70" r="9" fill="#2580b0"/><path d="M33 -72 L44 -68 L33 -65Z" fill="#e6b450"/><circle cx="28" cy="-72" r="1.8" fill="#1a1410"/><path d="M22 -78 l-2 -12 M26 -79 l0 -13 M30 -78 l2 -12" stroke="#1f6f9b" stroke-width="2"/><circle cx="20" cy="-91" r="2.5" fill="#e6b450"/><circle cx="26" cy="-93" r="2.5" fill="#e6b450"/><circle cx="32" cy="-91" r="2.5" fill="#e6b450"/><path d="M-4 -4 v14 M8 -4 v14" stroke="#8a6a44" stroke-width="3"/>`, flip);
  const meadow = () => L.sky('day') + L.sun(650, 90, 38) + L.cloud(190, 90, 1) + L.peaks(300, P.rock1, 4, 5, 80) + L.land(320, '#cfe0b0', 3, 18) + L.land(390, P.leaf1, 6, 12);
  S.prn1 = () => L.sky('day') + L.sun(650, 90, 38) + L.cloud(200, 90, 1.1) + L.sea(240, [P.sea1, P.sea2, P.sea3], 6, 110, 40) + fish(250, 336, 1.3, '#c9d8dc') + fish(440, 352, 1.1, '#f0c040', true) + L.land(384, P.sand1, 4, 16) + L.land(444, P.sand2, 7, 10)
    + rocks([[570, 424, 26], [612, 440, 18]], '#8f857c') + L.shrub(120, 454, 1.1, 3) + L.steps(250, 484, 7, 34, -6, P.sand4, 1.2);
  S.prn2 = () => meadow() + peacock(300, 450, 1.5) + duck(450, 466, 1.4) + rooster(580, 452, 1.4) + eagle(712, 444, 1.5, true) + L.land(488, P.leaf2, 9, 4);
  const hill = (x, y, r, c) => Pth(`M${x - r} ${y + 80} Q${x} ${y - r} ${x + r} ${y + 80}Z`, c);
  S.prn3 = () => L.sky('day') + L.cloud(200, 80, 1) + L.cloud(620, 110, 0.9) + [[60, 250, 70], [170, 232, 86], [290, 252, 74], [410, 228, 92], [530, 250, 76], [650, 234, 84], [750, 254, 66]].map(([x, y, r], i) => hill(x, y, r, i % 2 ? P.rock1 : P.rock2)).join('')
    + L.land(324, '#cfe0b0', 3, 14) + [[130, 350, 80], [400, 340, 96], [670, 350, 80]].map(([x, y, r]) => hill(x, y, r, '#8aa878')).join('') + L.land(414, P.leaf1, 6, 10) + mat(400, 490, 260, P.terra) + L.bowl(340, 466, 0.7, P.clay3) + L.bowl(460, 466, 0.7, P.clay3, false) + pits(438, 482, 440, 448, 3, 10, 0.5);
  S.prn4 = () => meadow() + mat(400, 492, 320, P.terra) + L.bowl(330, 470, 0.9, P.clay3) + L.bowl(470, 470, 0.9, P.clay3, false) + pits(440, 500, 440, 450, 3, 12, 0.6) + rooster(170, 452, 1.2) + peacock(330, 440, 1.1) + duck(540, 456, 1.1, true) + eagle(660, 446, 1.2, true)
    + [[250, 300], [400, 260], [560, 300], [330, 360], [480, 350]].map(([x, y], i) => bigStar(x, y, 1.2, i)).join('') + L.flock(400, 140, 5, 6, 120, 1);

  // ---------- 27. Dawud: the sling, and the Ark ----------
  S.jlt3 = () => L.sky('day') + L.sun(130, 90, 36) + L.peaks(300, P.rock1, 6, 5, 80) + L.land(320, '#cfe0b0', 3, 18) + sheep(600, 376, 0.7) + sheep(660, 388, 0.7, true) + sheep(540, 394, 0.65, false, '#e6e0d2') + L.land(400, P.leaf1, 6, 12)
    + Pth('M0 470 Q400 430 800 470 L800 500 L0 500Z', P.sand2) + L.sack(250, 474, 0.9, '#8a5a34') + `<path d="M330 456 Q380 408 430 452 Q470 484 520 434" stroke="${P.wood4}" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="430" cy="456" rx="30" ry="12" fill="${P.wood2}"/>` + L.glow(430, 444, 50, '#fff3c4', 0.8) + E(430, 448, 15, 11, '#8f857c') + E(426, 445, 6, 4, '#bdbac0');
  S.jlt4 = () => L.sky('dawn') + L.sun(400, 250, 60) + L.peaks(330, '#5a3f72', 2, 4, 80) + L.land(350, '#8a5a6a', 3, 16) + L.town(366, 312, 7, ['#c79a80', '#b98a7a'], 0, 0, 800, 30, 56) + L.land(370, '#c99560', 5, 8) + L.glow(400, 400, 200, '#fff3c4', 0.7)
    + G(400, 460, 2.2, `<rect x="-66" y="-30" width="132" height="5" rx="2" fill="${P.wood4}"/><rect x="-50" y="-40" width="100" height="40" rx="4" fill="${P.wood2}"/><rect x="-54" y="-46" width="108" height="10" rx="3" fill="${P.gold}"/><rect x="-50" y="-22" width="100" height="5" fill="${P.gold}"/><circle cx="-36" cy="-10" r="4" fill="${P.gold}"/><circle cx="36" cy="-10" r="4" fill="${P.gold}"/>`)
    + L.land(490, '#b07e48', 8, 3) + [[270, 330], [530, 320], [400, 280]].map(([x, y], i) => bigStar(x, y, 1.3, i)).join('');

  // ---------- 110. Luqman: a ship on the deep sea ----------
  S.lqm4 = () => L.sky('dawn') + L.sun(400, 240, 60) + L.sea(270, ['#4a6f8f'], 4, 140, 0) + L.boat(400, 372, 1.5) + L.sea(366, [P.sea2, P.sea3, P.sea4], 6, 120, 44) + L.flock(580, 150, 5, 5, 80, 1);

  // ====================== batch 5: seven stories for the older children ======================
  const pebbles = (pts, c = '#7d7a80') => pts.map(([x, y, r = 6]) => E(x, y, r, r * 0.7, c)).join('');
  const wheat = (x0, x1, y, seed, h = 46, c = '#d9a94a') => L.grass(x0, y, Math.round((x1 - x0) / 10), h, seed, c);
  const ram = (x, y, s = 1, flip = false) => G(x, y, s, sheep(0, 0, 1) + `<path d="M24 -38 q-12 -12 -2 -20 q14 -6 16 8 q0 8 -8 6" stroke="#b9a48a" stroke-width="5" fill="none" stroke-linecap="round"/>`, flip);

  // ---------- 3. The two brothers and the crow ----------
  const crow = (x, y, s = 1, flip = false, down = false) => G(x, y, s, `<ellipse cx="-4" cy="-20" rx="30" ry="15" fill="#17131a"/><path d="M-28 -22 L-60 -10 L-52 -2 L-26 -12Z" fill="#17131a"/>` + (down ? `<path d="M16 -24 Q30 -22 34 -6 L22 -10Z" fill="#17131a"/><circle cx="32" cy="-6" r="10" fill="#17131a"/><path d="M36 0 L42 14 L30 4Z" fill="#3a3440"/><circle cx="35" cy="-8" r="1.8" fill="#e9e4d8"/>` : `<path d="M14 -26 Q22 -46 30 -44 L28 -20Z" fill="#17131a"/><circle cx="28" cy="-46" r="10" fill="#17131a"/><path d="M36 -48 L52 -44 L36 -40Z" fill="#3a3440"/><circle cx="31" cy="-48" r="1.8" fill="#e9e4d8"/>`) + `<path d="M-8 -6 v16 M4 -6 v16" stroke="#3a3440" stroke-width="3"/>`, flip);
  const sheaf = (x, y, s = 1, c = '#d9a94a') => G(x, y, s, [-24, -14, -5, 5, 14, 24].map((a) => `<g transform="rotate(${a})"><path d="M0 0 L0 -70" stroke="${c}" stroke-width="4"/><ellipse cx="0" cy="-78" rx="5" ry="13" fill="${c}"/></g>`).join('') + `<rect x="-12" y="-30" width="24" height="7" rx="3" fill="${P.wood3}"/>`);
  const altar = (x, y, s = 1) => G(x, y, s, `<path d="M-60 0 L-50 -34 L50 -34 L60 0Z" fill="#8f857c"/><path d="M-50 -34 L-44 -46 L44 -46 L50 -34Z" fill="#a39a90"/><path d="M-30 0 v-34 M10 0 v-34 M-52 -17 h104" stroke="#6f665e" stroke-width="2"/>`);
  S.hbl1 = () => L.sky('day') + L.sun(400, 90, 38) + L.cloud(180, 90, 1) + L.cloud(620, 120, 0.9) + L.peaks(300, P.rock1, 4, 5, 80) + L.land(320, '#cfe0b0', 3, 18) + R(0, 372, 372, 128, '#c9a04a') + wheat(0, 372, 420, 3, 50) + wheat(0, 372, 468, 5, 56)
    + Pth('M400 500 L400 372 Q600 344 800 372 L800 500Z', P.leaf1) + Pth('M350 500 Q384 430 368 372 L404 372 Q424 430 440 500Z', '#e6cf9f') + sheep(540, 426, 0.9) + sheep(650, 446, 1, true) + sheep(730, 416, 0.8, false, '#e6e0d2') + ram(590, 488, 1.1) + wheat(0, 360, 504, 7, 50);
  S.hbl2 = () => L.sky('day') + L.cloud(200, 100, 1.2) + L.peaks(330, P.rock1, 6, 5, 70) + Pth('M0 500 L0 420 Q400 250 800 420 L800 500Z', '#b9c890') + Pth('M560 0 L640 0 L700 392 L500 392Z', '#fff3c4', 'opacity=".4"') + L.glow(600, 340, 130, '#ffe08a', 0.75)
    + altar(220, 404, 1.3) + sheaf(220, 346, 0.62, '#b99a5a') + altar(600, 396, 1.3) + ram(596, 338, 0.9) + L.grass(0, 504, 86, 36, 3, P.leaf2);
  S.hbl3 = () => L.sky('storm') + L.cloud(220, 110, 2.4, '#2a2e3a', 0.9, '') + L.cloud(600, 140, 2.6, '#22262f', 0.9, '') + L.peaks(330, '#3a3f4c', 6, 5, 70) + Pth('M0 500 L0 420 Q400 280 800 420 L800 500Z', '#5a6050') + burnt(640, 400, 1.3) + rocks([[300, 430, 30], [350, 444, 18], [250, 446, 14]], '#4a4a50') + L.steps(420, 462, 7, 44, 5, '#33382f', 1.3);
  S.hbl4 = () => L.sky('dusk') + L.peaks(330, '#5a3f72', 6, 5, 70) + Pth('M0 500 L0 350 Q400 270 800 350 L800 500Z', '#8a7a5a') + burnt(660, 330, 1.1) + E(440, 372, 74, 16, '#5a4a38') + Pth('M476 372 Q526 322 580 372Z', '#6a5844') + crow(350, 356, 1.7, false, true) + L.land(450, '#7a6a4c', 7, 6) + rocks([[150, 440, 22], [190, 452, 12], [640, 446, 16]], '#6a5a44') + L.land(488, '#6a5a44', 9, 4);
  S.hbl5 = () => L.sky('dawn') + L.sun(400, 260, 56) + L.peaks(330, '#5a3f72', 3, 5, 70) + L.land(350, '#8a6a7a', 3, 14) + L.land(400, '#a9b890', 6, 10) + L.glow(400, 410, 130, '#fff3c4', 0.7) + `<path d="M400 474 Q398 430 400 392" stroke="${P.leaf3}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M400 424 Q368 408 358 380 Q392 388 400 424Z M400 406 Q432 390 444 360 Q408 370 400 406Z" fill="${P.leaf1}"/>` + L.land(470, '#8aa070', 8, 4) + L.flock(580, 150, 5, 5, 80, 1);

  // ---------- 14. Ibrahim's dream ----------
  const mina = (c = '#b79a8a') => Pth('M0 500 L0 270 L140 190 L280 280 L400 220 L540 290 L680 210 L800 270 L800 500Z', c);
  S.zbh1 = () => L.sky('night') + L.stars(311, 90, 300) + L.moon(640, 90, 26) + mina('#141838') + L.land(380, '#1b1838', 4, 14) + L.glow(400, 400, 150, '#ffe08a', 0.3) + L.tent(400, 456, 2.3, '#3a3660', '#6a5a8a') + L.land(474, '#0f1230', 6, 8);
  S.zbh2 = () => L.sky('dawn') + L.sun(560, 240, 50) + mina('#6b5178') + L.land(360, '#b98a7a', 3, 10) + Pth('M290 500 Q420 430 396 380 Q386 350 430 330 L450 332 Q424 352 444 384 Q476 430 430 500Z', '#e6c9a0') + L.steps(336, 484, 5, 14, -26, '#5a3f38', 1.4) + L.steps(376, 490, 5, 14, -26, '#7a5548', 1) + L.shrub(640, 440, 1.1, 3) + L.shrub(120, 420, 1, 5);
  S.zbh3 = () => L.sky('day') + L.sun(140, 90, 38) + mina() + L.land(350, '#e6cf9f', 3, 10) + L.land(420, P.sand2, 6, 8)
    + [[200, 424, 0.8], [400, 444, 1], [600, 424, 0.8]].map(([x, y, s]) => G(x, y, s, `<ellipse cx="0" cy="0" rx="64" ry="13" fill="#cdb07a"/><rect x="-18" y="-92" width="36" height="92" fill="#8f857c"/><rect x="-23" y="-98" width="46" height="10" fill="#a39a90"/>`)).join('')
    + pebbles([[330, 462, 7], [352, 474, 6], [372, 458, 6], [430, 468, 7], [452, 456, 6], [470, 476, 7], [300, 484, 6], [500, 488, 6], [396, 486, 7], [416, 480, 5], [342, 490, 5], [468, 492, 5]]);
  S.zbh4 = () => L.sky('day') + L.sun(400, 80, 44, '#fff0a8') + Pth('M310 0 L490 0 L640 430 L200 430Z', '#fff3c4', 'opacity=".3"') + mina() + Pth('M0 500 L0 420 Q400 300 800 420 L800 500Z', '#d9c08f') + L.glow(420, 330, 150, '#ffe08a', 0.7) + ram(420, 378, 1.8) + rocks([[220, 410, 34], [262, 426, 18]], '#8f857c') + L.shrub(650, 410, 1.1, 3) + L.land(470, '#c9a878', 7, 6);
  S.zbh5 = () => L.sky('day') + L.sun(650, 80, 36) + mina() + L.land(330, '#e6cf9f', 3, 10) + [[90, 362, 0.9], [230, 358, 0.9], [370, 364, 0.9], [510, 358, 0.9], [650, 362, 0.9], [760, 366, 0.8]].map(([x, y, s]) => L.tent(x, y, s, '#f4f1ea', '#2f7a4a')).join('') + L.land(382, P.sand2, 6, 8)
    + [[160, 444, 1.4], [400, 456, 1.6], [640, 444, 1.4]].map(([x, y, s]) => L.tent(x, y, s, '#f4f1ea', P.terra)).join('') + L.land(472, P.sand3, 8, 5) + sheep(280, 490, 0.8) + sheep(530, 494, 0.8, true);

  // ---------- 39. Dhul-Qarnayn and the iron wall ----------
  const twoMts = (c1, c2) => Pth('M0 500 L0 150 L110 70 L230 130 L330 400 L330 500Z', c1) + Pth('M800 500 L800 140 L700 60 L570 130 L470 400 L470 500Z', c1) + Pth('M110 70 L230 130 L330 400 L250 300 L180 180Z', c2) + Pth('M700 60 L570 130 L470 400 L540 300 L620 170Z', c2);
  const ironWall = (rows, hot) => { let s = ''; for (let r = 0; r < rows; r++) { const y = 400 - (r + 1) * 30, half = 74 + (r + 1) * 11.5; for (let x = 400 - half; x < 400 + half - 1; x += 29) s += R(Math.round(x), y, 27, 28, hot ? (r % 2 ? '#d4572a' : '#b9432a') : (r % 2 ? '#5a5560' : '#4a4650'), 'rx="2"'); } return s; };
  const village = (lit) => L.land(400, '#cfe0b0', 3, 8) + L.town(440, 325, 6, [P.clay1, P.clay2], lit, 60, 320, 26, 50) + [[520, 448, 0.6], [600, 452, 0.7], [690, 446, 0.6]].map(([x, y, s]) => hut(x, y, s)).join('') + L.land(450, P.leaf1, 6, 6) + rowsGreen(470, 500, 2);
  S.zul1 = () => L.sky('day') + L.sun(130, 90, 38) + L.cloud(560, 90, 1.1) + L.peaks(290, P.rock1, 8, 6, 90) + L.land(310, '#cfe0b0', 3, 16) + ridgeArmy(350, 13, 22, 0.9) + L.land(354, P.sand1, 5, 10) + Pth('M300 500 Q380 420 360 354 L392 354 Q440 420 500 500Z', '#f3e3bb') + L.camel(200, 444, 0.9) + L.camel(610, 454, 1, P.rock3) + L.land(490, P.sand3, 8, 4);
  S.zul2 = () => L.sky('dusk') + L.sun(400, 300, 70, '#ffb060') + L.land(300, '#5a3f52', 3, 10) + Pth('M0 320 Q400 290 800 320 L800 424 Q400 444 0 424Z', '#3a2f3a') + Pth('M270 326 Q400 314 530 326 L600 404 Q400 418 200 404Z', '#e08a50', 'opacity=".45"') + `<path class="ripple" d="M300 360 q25 -8 50 0 q25 8 50 0" stroke="#f0c090" stroke-width="2.5" fill="none"/><path class="ripple" d="M430 388 q25 -8 50 0" stroke="#f0c090" stroke-width="2.5" fill="none"/>`
    + L.land(428, '#4a3540', 6, 8) + L.grass(20, 444, 10, 90, 3, '#2a2430') + L.grass(660, 448, 12, 100, 5, '#2a2430') + [[130, 474, 0.9], [250, 484, 0.8]].map(([x, y, s]) => hut(x, y, s, '#3a2c34', '#241c24')).join('') + L.land(490, '#30242c', 8, 4);
  S.zul3 = () => L.sky('dawn') + L.glow(400, 300, 330, '#ffd070', 0.5) + L.sun(400, 300, 90, '#ffe08a') + L.land(300, '#d9a070', 3, 6) + L.land(360, '#e0b080', 5, 5) + L.land(430, '#c99560', 8, 4) + L.steps(120, 470, 9, 60, -2, '#8a5a34', 1.2) + pebbles([[300, 400, 8], [520, 416, 6], [640, 388, 7], [180, 380, 5]], '#a9775a');
  S.zul4 = () => L.sky('day') + L.cloud(400, 90, 1.2) + L.peaks(330, '#8a86a0', 5, 6, 60) + twoMts('#7d6a72', '#94808a') + village(0);
  S.zul5 = () => L.sky('dusk') + L.peaks(330, '#5a3f72', 5, 6, 60) + ironWall(5, true) + L.glow(400, 330, 210, '#ff9a40', 0.55) + twoMts('#4a3d4a', '#5a4a58') + L.land(400, '#6a5548', 3, 8) + L.fire(300, 444, 0.6) + L.fire(500, 444, 0.6) + L.fire(400, 456, 0.5)
    + [[190, 474], [610, 474]].map(([x, y], i) => G(x, y, 1.2, `<path d="M-40 0 L-30 -34 L20 -24 L44 -10 L20 0Z" fill="${P.wood2}"/><path d="M-30 -34 L20 -24 L20 0 L-40 0Z" fill="#8a5a44" opacity=".6"/><rect x="40" y="-13" width="26" height="6" fill="#4a4650"/>`, i === 1)).join('') + [[110, 492], [146, 496], [660, 492], [696, 496]].map(([x, y]) => R(x, y - 16, 30, 16, '#4a4650', 'rx="2"')).join('');
  S.zul6 = () => L.sky('dawn') + L.sun(400, 100, 40) + L.peaks(330, '#5a3f72', 5, 6, 60) + ironWall(9, false) + [338, 278, 218, 158].map((y) => R(180, y, 440, 3, '#c9773a', 'opacity=".8"')).join('') + twoMts('#7d6a72', '#94808a') + village(0.4) + sheep(420, 474, 0.6) + sheep(470, 482, 0.6, true);

  // ---------- 47. The migrants and the king of Habasha ----------
  const court = () => room('#6a4a3a', '#4a3226') + [110, 250, 550, 690].map((x) => R(x - 16, 40, 32, 340, '#8a6a4a') + R(x - 24, 30, 48, 14, '#b98d3a') + R(x - 24, 368, 48, 12, '#b98d3a')).join('') + Pth('M330 500 L372 380 L428 380 L470 500Z', '#8a2f3a') + throne(400, 380, 0.9);
  S.hbs1 = () => L.sky('dawn') + L.sun(620, 230, 50) + L.sea(270, ['#4a6f8f'], 4, 140, 0) + Pth('M0 272 Q120 232 260 262 Q340 250 420 272Z', '#3d6a52') + L.boat(300, 372, 1.3) + L.boat(560, 350, 0.9) + L.sea(366, [P.sea2, P.sea3, P.sea4], 6, 120, 44) + L.flock(200, 140, 5, 5, 80, 1);
  S.hbs2 = () => L.sky('day') + L.sun(650, 90, 38) + L.cloud(200, 90, 1.2) + L.peaks(290, '#6a8a7a', 4, 5, 110) + L.land(310, '#8fc08a', 3, 22) + acacia(120, 352, 1) + acacia(700, 348, 1.1) + L.land(360, P.leaf1, 5, 14) + [[250, 434, 1], [420, 424, 1.2], [600, 440, 1]].map(([x, y, s]) => hut(x, y, s, '#c9a878', '#8a6a44')).join('') + L.land(444, P.leaf2, 7, 8) + goat(160, 484, 0.8) + L.jug(700, 488, 0.9) + L.grass(300, 504, 20, 30, 3, P.leaf3);
  S.hbs3 = () => court() + G(180, 474, 1.3, box) + bolts(640, 474, 1) + [[540, 490], [596, 496]].map(([x, y]) => Pth(`M${x - 40} ${y} q10 -18 40 -16 q30 -2 40 16Z`, '#a8643a')).join('') + L.sack(262, 488, 0.8);
  S.hbs4 = () => court() + Pth('M360 0 L440 0 L530 500 L270 500Z', '#fff3c4', 'opacity=".14"') + scroll(240, 456, 1.3, -8) + scroll(570, 460, 1.2, 10) + L.glow(400, 464, 80, '#fff3c4', 0.6) + `<path d="M356 474 L444 458" stroke="${P.wood2}" stroke-width="5" stroke-linecap="round"/><path d="M420 462 l12 -13" stroke="${P.wood2}" stroke-width="3" stroke-linecap="round"/>`;

  // ---------- 49. The journey to Ta'if ----------
  const grapes = (x, y, s = 1, c = '#6a2f6e') => G(x, y, s, [[0, 0], [-10, 0], [10, 0], [-5, 9], [5, 9], [-15, 9], [15, 9], [0, 18], [-10, 18], [10, 18], [-5, 27], [5, 27], [0, 36]].map(([dx, dy]) => `<circle cx="${dx}" cy="${dy}" r="6" fill="${c}"/>`).join('') + `<path d="M0 -6 v-12" stroke="${P.wood3}" stroke-width="3"/><path d="M0 -14 q14 -12 24 -2 q-12 8 -24 2Z" fill="${P.leaf2}"/>`);
  const vine = (x0, x1, y) => { let s = `<path d="M${x0} ${y} ` + Array.from({ length: Math.ceil((x1 - x0) / 80) }, () => 'q20 -16 40 0 t40 0').join(' ') + `" stroke="${P.wood3}" stroke-width="5" fill="none"/>`; for (let x = x0 + 20, i = 0; x < x1; x += 40, i++) s += `<path d="M${x} ${y - 4} q-16 -18 -2 -30 q18 8 2 30Z" fill="${i % 2 ? P.leaf2 : P.leaf1}"/>` + (i % 3 === 1 ? grapes(x + 10, y + 14, 0.7) : ''); return s; };
  S.tyf1 = () => L.sky('day') + L.sun(130, 90, 38) + L.peaks(280, P.rock1, 6, 5, 110) + Pth('M300 500 L300 310 Q520 200 800 250 L800 500Z', '#9aa878') + L.town(266, 331, 6, [P.clay1, '#eedcb8', P.clay2], 0, 520, 790, 26, 54) + [500, 560, 640, 720, 780].map((x, i) => tree(x, 292 + (i % 2) * 8, 0.5, P.leaf2, i % 2 ? '#7a3d8a' : null, i + 1)).join('') + L.land(330, '#d9c08f', 3, 18)
    + Pth('M100 500 Q260 440 330 380 Q420 320 560 286 L580 292 Q460 334 380 398 Q320 450 260 500Z', '#f3e3bb') + L.steps(190, 474, 6, 30, -22, P.sand4, 1.2) + L.shrub(620, 440, 1.1, 3) + L.shrub(80, 420, 1, 5);
  S.tyf2 = () => L.sky('dusk') + L.town(300, 341, 8, ['#7a5b7c', '#6b5178', '#5a4470'], 0.2, 0, 800, 40, 90) + L.land(304, '#8f6a58', 3, 6) + Pth('M240 500 Q360 400 380 304 L420 304 Q440 400 560 500Z', '#b98a7a')
    + pebbles([[330, 420, 9], [372, 396, 7], [430, 430, 10], [404, 470, 12], [470, 460, 8], [350, 462, 8], [300, 484, 10], [500, 488, 9], [392, 350, 6], [420, 372, 6], [200, 470, 9], [610, 466, 8], [150, 440, 7], [660, 430, 7]], '#5a4a50') + L.steps(384, 484, 6, 5, -26, '#5a3f38', 1.1) + sandal(462, 404, 30);
  S.tyf3 = () => L.sky('dusk') + L.peaks(300, '#5a3f72', 6, 5, 90) + L.land(320, '#8f6a58', 3, 10) + [120, 300, 520, 700].map((x, i) => tree(x, 340, 0.8, P.leaf3, null, i + 2)).join('') + brickWall(400, 440, 800, 130, 0, '#c79a80') + vine(0, 800, 316) + vine(-30, 800, 352) + R(0, 440, 800, 60, '#7a5548') + Pth('M200 440 L600 440 L680 500 L120 500Z', '#5a3f38', 'opacity=".5"') + L.steps(330, 484, 3, 26, -4, '#3a2a24', 1.1);
  S.tyf4 = () => L.sky('dusk') + vine(0, 800, 60) + vine(-30, 800, 112) + R(0, 330, 800, 170, '#c79a80') + R(0, 318, 800, 18, '#a97a62') + [0, 1, 2, 3, 4].map((i) => `<line x1="${i * 180 + 60}" y1="336" x2="${i * 180 + 60}" y2="500" stroke="#a97a62" stroke-width="3"/>`).join('') + L.glow(400, 290, 160, '#fff3c4', 0.5) + E(400, 318, 130, 22, '#8a6a44') + E(400, 312, 116, 16, P.clay1) + grapes(356, 258, 1.5) + grapes(436, 266, 1.3, '#7a3d8a') + grapes(396, 276, 1.2, '#5a2a5e');
  S.tyf5 = () => L.sky('night') + L.stars(321, 90, 300) + L.moon(640, 90, 26) + nightHills() + L.steps(260, 480, 8, 40, -3, '#3a3660', 1.2);

  // ---------- 73. The brother and the heated iron ----------
  const brazier = (x, y, s = 1) => G(x, y, s, `<path d="M-70 -40 L70 -40 L50 0 L-50 0Z" fill="#4a4650"/><rect x="-78" y="-48" width="156" height="12" rx="5" fill="#5a5560"/><rect x="-44" y="0" width="8" height="26" fill="#3a3640"/><rect x="36" y="0" width="8" height="26" fill="#3a3640"/>` + [[-44, -52], [-14, -56], [18, -52], [46, -54]].map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="12" fill="#d4472a"/><circle cx="${cx}" cy="${cy - 2}" r="6" fill="#f0a030"/>`).join(''));
  S.aql1 = () => room('#5a4636', '#3b2a22') + windowArch(640, 250, 'day') + Pth('M596 250 L684 250 L600 500 L420 500Z', '#f6e7c4', 'opacity=".12"') + [[110, 474, 1.3], [204, 484, 1.2], [156, 424, 1.1], [296, 488, 1.1]].map(([x, y, s], i) => L.sack(x, y, s, i % 2 ? '#a88a5c' : '#b99a6b')).join('') + scales(480, 480, 0.8, 0) + G(690, 474, 1, box);
  S.aql2 = () => room('#2a1d18', '#1f1512') + L.glow(400, 290, 280, '#ff9a40', 0.5) + brazier(400, 400, 1.6) + `<g transform="translate(396 312) rotate(-24)"><rect x="-10" y="-6" width="150" height="12" rx="4" fill="#f0a030"/><rect x="-10" y="-6" width="64" height="12" rx="4" fill="#ffd070"/><rect x="140" y="-8" width="60" height="16" rx="5" fill="${P.wood3}"/></g>` + mat(150, 490, 200, '#6a2f4e');
  S.aql3 = () => L.sky('night') + L.stars(331, 40, 110) + R(0, 110, 800, 334, '#3a3050') + R(0, 100, 800, 14, '#2a2440') + L.door(400, 444, 150, 250, false) + R(0, 444, 800, 56, '#2a2440') + L.lamp(570, 444, 1) + L.glow(250, 462, 90, '#fff3c4', 0.4) + E(250, 480, 66, 12, '#8a6a44') + Pth('M194 476 Q250 420 306 476Z', '#d8c8a0') + `<circle cx="250" cy="446" r="6" fill="#b98d3a"/>`;
  S.aql4 = () => L.sky('day') + L.land(260, '#e6cf9f', 3, 10) + L.land(330, P.sand2, 5, 8) + L.grass(40, 424, 8, 150, 3, P.leaf2) + L.grass(650, 434, 9, 170, 5, P.leaf3) + L.land(420, P.sand1, 7, 6) + L.glow(430, 420, 130, '#fff3c4', 0.6) + L.ant(400, 444, 3.2) + `<path d="M446 432 q34 -22 60 4 q-30 14 -60 -4Z" fill="#d9a94a"/><path d="M450 432 q30 -8 54 4" stroke="#a9773f" stroke-width="2" fill="none"/>` + L.ant(180, 474, 1.2, true) + L.ant(640, 480, 1.1);

  // ---------- 97. The profit that was too much ----------
  const pouch = (x, y, s = 1, c = '#6a2f4e') => G(x, y, s, `<path d="M-34 0 Q-50 -40 -16 -58 L16 -58 Q50 -40 34 0Z" fill="${c}"/><path d="M-18 -58 Q0 -78 18 -58 Q0 -50 -18 -58Z" fill="${c}"/><rect x="-18" y="-62" width="36" height="7" rx="3" fill="${P.gold}"/>`);
  S.sud1 = () => room('#5a4636', '#3b2a22') + windowArch(160, 250, 'day') + Pth('M116 250 L204 250 L420 500 L200 500Z', '#f6e7c4', 'opacity=".12"') + mat(420, 456, 380, '#2f6f8b') + pouch(400, 436, 1.6) + [[484, 432], [516, 440], [504, 422], [544, 430], [326, 442]].map(([x, y]) => coin(x, y, true)).join('') + L.lamp(660, 386, 1.1);
  S.sud2 = () => L.sky('day') + L.sun(660, 90, 38) + L.land(280, '#e6cf9f', 3, 10) + L.town(300, 345, 7, [P.clay1, '#eedcb8', P.clay2], 0, 420, 800, 30, 70) + [440, 520, 610, 700, 770].map((x, i) => L.palm(x, 306, 70 + (i % 2) * 20, i % 2 ? 5 : -5)).join('') + Pth('M380 298 Q600 288 800 302 L800 332 Q600 318 380 328Z', P.sea1) + L.land(330, P.sand1, 5, 8)
    + [0, 1, 2, 3].map((i) => L.camel(120 + i * 130, 424 + (i % 2) * 8, 0.9, i % 2 ? P.rock3 : P.rock4) + L.sack(112 + i * 130, 375 + (i % 2) * 8, 0.36, '#8a5a34')).join('') + L.land(474, P.sand3, 8, 5);
  S.sud3 = () => room('#5a4636', '#3b2a22') + windowArch(640, 250, 'day') + mat(400, 456, 460, '#2f6f8b') + L.glow(300, 400, 100, '#fff3c4', 0.4) + pouch(300, 436, 1.6) + pouch(500, 436, 1.6, '#2a634a');
  S.sud4 = () => room('#5a4636', '#3b2a22') + windowArch(400, 240, 'day') + [[130, 474, 1.4, '#b99a6b'], [234, 484, 1.2, '#a88a5c'], [600, 478, 1.3, '#8a7a5c'], [694, 486, 1.1, '#9a8a6a']].map(([x, y, s, c]) => L.sack(x, y, s, c)).join('') + L.mill(400, 474, 1) + L.loaf(310, 492, 0.9) + L.loaf(490, 492, 0.9);
}

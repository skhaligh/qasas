// One function per picture. Scenes show only what the sources mention, or neutral setting.
import * as L from './lib.js';
const { P } = L;
const R = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;
const E = (cx, cy, rx, ry, fill, extra = '') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${extra}/>`;
const Pth = (d, fill, extra = '') => `<path d="${d}" fill="${fill}" ${extra}/>`;
const floor = (y, fill) => R(0, y, 800, 500 - y, fill);

const S = {};

// ---------- 4. Nuh's ship ----------
S.nuh1 = () => L.sky('day') + L.sun(650, 90, 38) + L.cloud(180, 100, 1.1) + L.cloud(480, 70, 0.7, '#fff', 0.7)
  + L.land(310, '#d9c08f', 2, 26) + L.land(370, P.sand2, 5, 18) + L.palm(90, 372, 120, 8) + L.palm(720, 366, 100, -8)
  + L.land(425, P.sand3, 8, 12)
  + R(250, 418, 6, 30, P.wood4) + R(545, 418, 6, 30, P.wood4) + L.ark(400, 430, 1.25, 'frame')
  + L.sticks(120, 462, 1.2, false) + L.sticks(650, 468, 0.9, false)
  + `<g transform="translate(590 440) rotate(-28)"><rect x="-3" y="-34" width="6" height="40" fill="${P.wood2}"/><rect x="-14" y="-44" width="28" height="13" rx="2" fill="#56525e"/></g>`;
S.nuh2 = () => L.sky('day') + L.cloud(150, 90, 1.5, '#8f97a6', 0.8) + L.cloud(420, 60, 1.3, '#a2a9b6', 0.75) + L.cloud(680, 110, 1.4, '#8a92a2', 0.8)
  + L.land(330, '#cdb98f', 3, 20) + L.land(400, P.sand2, 6, 12)
  + L.ark(480, 410, 1.15) + Pth('M250 452 L330 380 L352 388 L290 456Z', P.wood3)
  + L.land(450, P.sand3, 9, 8)
  + L.camel(150, 458, 0.95, P.rock3) + L.camel(60, 466, 0.85, P.rock4)
  + L.dove(262, 440, 0.6) + L.dove(232, 446, 0.55, '#dfe3e7')
  + L.bird(330, 190, 1.3, P.ink, 'flap') + L.bird(366, 204, 1.1, P.ink, 'flap') + L.bird(250, 150, 1, P.ink, 'flap') + L.bird(282, 162, 0.9, P.ink, 'flap');
S.nuh3 = () => L.sky('storm') + L.cloud(160, 90, 2, '#262c38', 0.95) + L.cloud(470, 70, 2.2, '#1f2530', 0.95) + L.cloud(720, 110, 1.8, '#2a303c', 0.95)
  + L.bolt(600, 110, 1.1) + L.land(350, '#4a4d55', 3, 22)
  + L.ark(400, 392, 1.15, 'done', 'bob') + L.sea(385, ['#3f6d80', '#2c5466', '#1c3d4d'], 6, 100, 34) + L.rain(4, 120);
S.nuh4 = () => L.sky('storm') + L.cloud(200, 70, 2.2, '#1f2530', 0.95) + L.cloud(600, 90, 2.2, '#262c38', 0.95)
  + L.sea(250, ['#35596d'], 40, 400, 0) + L.sea(300, ['#2a4c60'], 34, 320, 0)
  + L.ark(420, 352, 0.62, 'done', 'bob')
  + L.sea(350, ['#1f4052', '#163242', '#0d2331'], 30, 260, 52) + L.rain(9, 110);
S.nuh5 = () => L.sky('dawn') + L.sun(620, 170, 46) + L.cloud(150, 110, 1.2, '#fff', 0.5) + L.cloud(660, 90, 1, '#fff', 0.45)
  + L.peaks(330, P.rock1, 4, 5, 90) + Pth('M120 500 L300 262 L500 262 L690 500Z', P.rock2) + Pth('M300 262 L500 262 L560 340 L400 300 L250 330Z', P.rock1, 'opacity=".6"')
  + L.ark(400, 264, 0.78)
  + L.land(430, P.leaf2, 3, 14) + L.sea(458, [P.sea1, P.sea2], 4, 100, 22)
  + L.flock(200, 190, 6, 5, 60, 1.1);

// ---------- 9. The fire that turned cool ----------
const idolBits = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-18" width="52" height="18" fill="#6d6672"/><path d="M-20 -18 L-8 -40 L6 -26 L18 -18Z" fill="#8b8490"/><path d="M30 0 L44 -14 L60 0Z M-58 0 L-44 -10 L-34 0Z M66 0 L74 -8 L84 0Z" fill="#9a939f"/></g>`;
S.ibr1 = () => L.sky('room') + Pth('M330 0 L470 0 L560 500 L240 500Z', '#f3d9a0', 'opacity=".16"') + floor(400, '#3b2a22')
  + [70, 230, 570, 730].map((x) => R(x - 18, 60, 36, 350, '#5d4a40') + R(x - 28, 50, 56, 16, '#75604f') + R(x - 28, 400, 56, 14, '#75604f')).join('')
  + idolBits(150, 420, 1) + idolBits(650, 425, 1.1) + idolBits(300, 446, 0.8)
  + `<g transform="translate(410 430)"><rect x="-56" y="-26" width="112" height="26" fill="#6d6672"/><path d="M-36 -26 L-30 -170 Q0 -196 30 -170 L36 -26Z" fill="#8b8490"/><rect x="-24" y="-222" width="48" height="50" rx="10" fill="#9a939f"/><rect x="-12" y="-204" width="8" height="5" fill="#4b4552"/><rect x="5" y="-204" width="8" height="5" fill="#4b4552"/></g>`;
const woodPile = (x, y, s = 1) => { let g = ''; for (let r = 0; r < 5; r++) for (let i = 0; i < 9 - r * 2; i++) g += `<rect x="${-100 + r * 22 + i * 22}" y="${-16 - r * 15}" width="34" height="11" rx="5" fill="${(i + r) % 2 ? P.wood2 : P.wood3}" transform="rotate(${((i * 7 + r * 13) % 9) - 4} ${-83 + r * 22 + i * 22} ${-10 - r * 15})"/>`; return `<g transform="translate(${x} ${y}) scale(${s})">${g}</g>`; };
const ring = (y, fill = '#6a5d58') => Pth(`M130 ${y} Q400 ${y + 70} 670 ${y} L670 ${y + 34} Q400 ${y + 104} 130 ${y + 34}Z`, fill);
S.ibr2 = () => L.sky('dusk') + L.peaks(300, '#4b3a66', 3, 5, 80) + L.town(318, 4, 9, ['#6b5178', '#5a4470', '#7a5b7c'], 0.2, 0, 800, 30, 60)
  + L.land(330, '#b9895a', 2, 10) + L.land(400, '#a2733f', 6, 8)
  + woodPile(400, 418, 1.6) + ring(400) + L.sticks(110, 452, 1.1) + L.sticks(700, 458, 1);
S.ibr3 = () => L.sky('night') + L.stars(7, 40, 200) + L.town(330, 4, 9, ['#1c1a38', '#232046', '#191733'], 0, 0, 800, 30, 60)
  + L.land(336, '#3a2a2a', 2, 8) + L.land(400, '#4d3226', 6, 8)
  + woodPile(400, 418, 1.6) + L.fire(400, 420, 2.5) + L.fire(280, 428, 1.5) + L.fire(520, 428, 1.6) + ring(400, '#3d302e')
  + [[330, 150], [470, 120], [420, 80], [360, 60], [500, 190], [300, 210]].map(([x, y], i) => `<circle class="tw" style="animation-delay:${i * 0.4}s" cx="${x}" cy="${y}" r="2.6" fill="#ffd27a"/>`).join('');
S.ibr4 = () => L.sky('dawn') + L.sun(560, 250, 44) + L.land(300, '#8f9c7a', 3, 26) + L.land(350, P.leaf1, 5, 20) + L.land(410, P.leaf2, 8, 14)
  + Pth('M330 500 Q420 430 380 390 Q350 362 470 336 Q520 322 540 300 L556 302 Q540 330 490 346 Q400 368 430 392 Q490 440 450 500Z', '#e9d7ae')
  + [[120, 372], [220, 350], [640, 356], [700, 390], [60, 420]].map(([x, y], i) => E(x, y - 22, 26, 22, i % 2 ? P.leaf3 : '#3a7458') + R(x - 3, y - 6, 6, 18, P.wood3)).join('')
  + E(135, 452, 70, 12, '#3a3436') + `<path class="drift" d="M130 440 q-16 -30 4 -56 q18 -26 -2 -54" stroke="#cfc6c0" stroke-width="7" fill="none" opacity=".55" stroke-linecap="round"/>`
  + L.flock(300, 140, 3, 5, 70, 1);

// ---------- 29. Sulayman and the ant ----------
S.sul1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(560, 80, 1.2) + L.land(330, '#a9c79a', 3, 30) + L.land(390, P.leaf1, 6, 22)
  + `<g transform="translate(520 330)">${L.house(-150, 0, 110, 90, P.clay1, { dome: true, domeFill: P.gold, win: true })}${L.house(-50, 0, 140, 140, '#f1dfbd', { dome: true, domeFill: P.gold, win: true, winAt: 0.25 })}${L.house(80, 0, 100, 80, P.clay1, { dome: true, domeFill: P.gold, win: true })}</g>`
  + L.land(440, P.leaf2, 9, 14) + L.palm(110, 440, 130, 10) + L.palm(190, 452, 100, -6)
  + L.flock(300, 150, 11, 12, 150, 1.4) + L.bird(250, 250, 1.7, '#7a3d2a', 'flap') + L.bird(330, 220, 1.5, '#2b5a7a', 'flap');
const ridgeArmy = (y, seed, count, s = 1, x0 = 60, x1 = 760) => { const r = L.rng(seed); let o = ''; for (let i = 0; i < count; i++) { const x = x0 + i * ((x1 - x0) / count) + r() * 12; o += r() > 0.45 ? L.banner(x, y + r() * 6, 50 + r() * 26, [P.terra, P.gold, '#2f6f8b', '#7a3d6a'][Math.floor(r() * 4)], s) : `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - (44 + r() * 20) * s}" stroke="${P.ink}" stroke-width="${2 * s}"/><path d="M${x - 4 * s} ${y - 44 * s} l${4 * s} ${-12 * s} l${4 * s} ${12 * s}Z" fill="#c9c6cf"/>`; } return o; };
S.sul2 = () => L.sky('noon') + L.sun(660, 80, 34) + L.land(300, '#d8c39a', 3, 24)
  + ridgeArmy(322, 5, 22, 1) + L.land(326, P.sand2, 4, 14) + L.dust(200, 340, 1.2) + L.dust(560, 350, 1.3)
  + ridgeArmy(396, 9, 15, 1.5) + L.land(400, P.sand3, 7, 10) + L.dust(380, 430, 1.6, '#f0dcb4', 0.5)
  + [0, 1, 2, 3, 4].map((i) => L.bird(400 - i * 40, 110 + i * 22, 1.2, P.ink, 'flap') + (i ? L.bird(400 + i * 40, 110 + i * 22, 1.2, P.ink, 'flap') : '')).join('');
const anthill = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-120 0 Q-60 -90 0 -96 Q60 -90 120 0Z" fill="${P.sand4}"/><path d="M-80 0 Q-40 -60 0 -66 Q40 -60 80 0Z" fill="#b98548" opacity=".5"/><ellipse cx="0" cy="-30" rx="24" ry="16" fill="#2a1a10"/></g>`;
S.sul3 = () => L.sky('day') + L.land(170, '#d8c39a', 3, 16) + ridgeArmy(184, 5, 26, 0.5) + L.land(188, '#e3cd9c', 4, 10) + L.dust(400, 200, 1.4, '#f0dcb4', 0.5)
  + L.land(290, P.sand2, 6, 18) + anthill(600, 400, 1.2) + L.land(410, P.sand3, 9, 10)
  + E(250, 418, 46, 18, '#8d8a90') + L.ant(250, 392, 2.4, false)
  + [0, 1, 2, 3].map((i) => L.ant(360 + i * 62, 440 - i * 10, 1.5 - i * 0.08, false)).join('') + L.ant(150, 462, 1.6, false) + L.ant(80, 446, 1.4, false)
  + L.grass(20, 500, 9, 150, 3) + L.grass(700, 500, 9, 170, 5, P.leaf3) + L.grass(130, 500, 5, 90, 8, P.leaf1);
S.sul4 = () => L.sky('dusk') + L.sun(400, 210, 40, '#ffd08a') + L.land(190, '#b98a6a', 3, 16) + ridgeArmy(204, 5, 26, 0.5) + L.land(208, '#c79a70', 4, 10)
  + L.land(300, '#c99560', 6, 18) + anthill(400, 410, 1.5) + L.land(420, '#b07e48', 9, 10)
  + L.ant(430, 368, 1.5, true) + L.ant(375, 366, 1.3, false) + L.ant(300, 440, 1.6, false) + L.ant(520, 446, 1.6, true) + L.ant(230, 458, 1.4, false)
  + L.grass(30, 500, 8, 140, 3, '#3a6a4c') + L.grass(690, 500, 9, 160, 5, '#2f5a40');

// ---------- 32. Yunus and the whale ----------
S.yun1 = () => L.sky('dusk') + L.sun(620, 280, 40, '#ffc98a') + L.peaks(330, '#5a3f72', 2, 4, 70)
  + L.town(338, 6, 5, ['#8a6480', '#7a5878', '#9a7088'], 0.5, 0, 330, 34, 70) + L.land(340, '#8f6a58', 3, 6)
  + L.sea(345, ['#4a6f8f', '#365a7a', '#254466'], 5, 100, 34) + L.boat(500, 372, 1.15)
  + R(60, 372, 240, 12, P.wood3) + [80, 150, 220, 280].map((x) => R(x, 372, 9, 80, P.wood4)).join('')
  + R(110, 348, 34, 24, P.clay3) + R(150, 352, 28, 20, P.clay4) + L.sack(230, 372, 0.4);
S.yun2 = () => L.sky('storm') + L.cloud(180, 80, 2.2, '#1f2530', 0.95) + L.cloud(620, 100, 2.1, '#262c38', 0.95)
  + L.sea(260, ['#35596d'], 36, 380, 0) + `<g transform="rotate(-9 380 320)">${L.boat(380, 330, 0.95)}</g>`
  + L.sea(330, ['#2a4c60'], 30, 300, 0) + L.whale(560, 440, 0.9, '#0f2434') + L.sea(400, ['#1c3d50', '#122c3c'], 24, 240, 50) + L.rain(5, 70);
S.yun3 = () => L.sky('deep') + Pth('M300 0 L380 0 L250 500 L80 500Z', '#9fe0e8', 'opacity=".08"') + Pth('M460 0 L520 0 L640 500 L500 500Z', '#9fe0e8', 'opacity=".06"')
  + L.land(450, '#04141c', 3, 20) + L.whale(400, 270, 1.5, '#0b1f2e')
  + [[160, 300, 5], [150, 250, 3], [172, 210, 4], [640, 180, 4], [660, 130, 3], [300, 110, 3], [620, 380, 5]].map(([x, y, r], i) => `<circle class="rise" style="animation-delay:${i * 0.7}s" cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#bfeef2" stroke-width="1.4" opacity=".7"/>`).join('')
  + Pth('M90 430 q14 -8 28 0 q-14 8 -28 0Z M650 440 q12 -7 24 0 q-12 7 -24 0Z', '#2f7f8f', 'opacity=".6"');
const gourd = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-150 0 Q-90 -70 -20 -40 Q40 -14 90 -66 Q130 -104 170 -70" stroke="${P.leaf3}" stroke-width="7" fill="none" stroke-linecap="round"/>${[[-110, -44, 44], [-40, -52, 52], [30, -40, 46], [96, -78, 54], [150, -84, 40], [-70, -14, 40]].map(([cx, cy, r], i) => `<path d="M${cx} ${cy + r * 0.5} C${cx - r} ${cy + r * 0.4} ${cx - r} ${cy - r * 0.7} ${cx} ${cy - r * 0.45} C${cx + r} ${cy - r * 0.7} ${cx + r} ${cy + r * 0.4} ${cx} ${cy + r * 0.5}Z" fill="${i % 2 ? P.leaf1 : P.leaf2}"/>`).join('')}<ellipse cx="-10" cy="-6" rx="20" ry="26" fill="#cbdc9a"/><ellipse cx="74" cy="-28" rx="16" ry="21" fill="#d7e3a8"/></g>`;
S.yun4 = () => L.sky('dawn') + L.sun(170, 230, 44) + L.sea(290, [P.sea1, P.sea2, P.sea3], 5, 100, 26)
  + Pth('M600 300 q16 -34 44 -40 q-10 22 -4 44 q-22 -10 -40 -4Z', '#16324a') + L.land(372, P.sand1, 4, 16) + L.land(430, P.sand2, 8, 10)
  + gourd(440, 420, 1.25) + L.flock(560, 130, 4, 4, 60, 1);
S.yun5 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(200, 90, 1.1) + L.peaks(300, P.rock1, 3, 5, 70)
  + L.town(300, 11, 12, [P.clay1, '#eedcb8', P.clay2], 0, 0, 800, 30, 56) + L.land(304, '#d6bd8c', 2, 6)
  + L.town(360, 12, 9, [P.clay2, P.clay1, P.clay3], 0, 0, 800, 44, 80) + L.land(364, P.sand2, 4, 6)
  + L.town(430, 13, 7, [P.clay1, P.clay3, '#f1dfbd'], 0, -30, 830, 56, 100) + L.land(434, P.sand3, 6, 6)
  + L.palm(60, 440, 120, 8) + L.palm(740, 446, 110, -8) + L.flock(420, 130, 8, 6, 100, 1);

// ---------- 52. The cave of Thawr ----------
S.thw1 = () => L.sky('night') + L.stars(11, 70, 260) + L.moon(650, 90, 30) + L.peaks(300, '#1a1f45', 4, 5, 110) + L.peaks(330, '#141838', 7, 6, 60)
  + L.town(360, 14, 9, ['#2a2a55', '#232349', '#30305e'], 0.2, 0, 800, 34, 64)
  + R(366, 286, 68, 76, '#0e0c16') + R(366, 304, 68, 7, P.gold) + L.land(362, '#262148', 3, 6)
  + L.town(440, 15, 6, ['#34315f', '#2a2853', '#3d396b'], 0.25, -20, 820, 50, 90) + L.land(442, '#1b1838', 5, 6);
S.thw2 = () => L.sky('night') + L.stars(13, 80, 300) + L.moon(120, 90, 28) + L.peaks(380, '#141838', 5, 5, 90)
  + Pth('M120 500 L300 180 L380 110 L470 150 L560 260 L700 500Z', '#262a55') + Pth('M380 110 L470 150 L560 260 L460 230 L400 180Z', '#333868')
  + E(420, 196, 30, 22, '#05060f') + Pth('M392 198 q28 -34 58 0Z', '#05060f')
  + `<path d="M250 500 Q330 430 300 380 Q280 340 360 300 Q410 270 400 222" stroke="#8c8fb5" stroke-width="5" fill="none" stroke-dasharray="3 12" stroke-linecap="round" opacity=".8"/>`
  + L.land(470, '#0f1230', 6, 10) + E(640, 470, 60, 26, '#1c2046') + E(120, 480, 80, 26, '#1c2046');
S.thw3 = () => L.sky('dawn') + L.peaks(330, '#3a2f66', 6, 5, 80) + L.land(360, '#2a2250', 3, 10)
  + Pth('M0 0 H800 V500 H0Z M400 80 C560 70 660 190 640 330 C630 410 540 440 400 440 C260 440 170 410 160 330 C140 190 240 70 400 80Z', '#0a0810', 'fill-rule="evenodd"')
  + Pth('M0 0 H800 V500 H0Z M400 50 C590 40 700 180 680 340 C668 440 560 470 400 470 C240 470 132 440 120 340 C100 180 210 40 400 50Z', '#17131f', 'fill-rule="evenodd"')
  + L.web(400, 255, 190, 0.8)
  + [[340, 200], [470, 300], [420, 170], [330, 310], [500, 220]].map(([x, y], i) => `<circle class="tw" style="animation-delay:${i * 0.6}s" cx="${x}" cy="${y}" r="2.4" fill="#eaf4ff"/>`).join('');
S.thw4 = () => L.sky('dawn') + L.sun(600, 240, 46) + L.land(300, '#b98a7a', 3, 26) + L.land(350, '#d2a070', 5, 22)
  + L.palm(690, 352, 60, 4, '#5a3a2a', '#3a6a4c') + L.palm(720, 356, 50, -4, '#5a3a2a', '#3a6a4c') + L.palm(660, 356, 44, 6, '#5a3a2a', '#3a6a4c')
  + L.camel(300, 350, 0.42, '#4a3048') + L.camel(350, 352, 0.42, '#4a3048') + L.camel(400, 351, 0.42, '#4a3048')
  + L.land(390, P.sand2, 8, 16) + Pth('M120 500 Q260 440 240 410 Q230 392 330 372 L346 376 Q270 398 290 416 Q330 450 260 500Z', '#f0dcb0', 'opacity=".8"')
  + L.land(456, P.sand3, 11, 10) + L.steps(150, 480, 6, 22, -5, P.sand4, 1);

// ---------- 61. "The firewood is mine" ----------
const stones = (x, y) => E(x - 40, y, 22, 12, '#8d8a90') + E(x + 40, y, 22, 12, '#7d7a80') + E(x, y + 6, 24, 12, '#9c999f');
S.hzm1 = () => L.sky('noon') + L.sun(140, 90, 38) + L.land(300, '#e6cf9f', 3, 26) + L.land(360, P.sand2, 6, 20)
  + L.camel(200, 392, 1.1, P.rock3, true) + L.camel(330, 400, 1.2, P.rock4, true) + L.camel(560, 384, 1.1, P.rock3)
  + L.land(420, P.sand3, 9, 10) + L.sack(450, 448, 0.6) + L.sack(500, 452, 0.5, '#a88a5c') + L.jug(640, 452, 0.7) + L.shrub(720, 440, 1.2, 3) + L.shrub(80, 450, 1, 5);
S.hzm2 = () => L.sky('noon') + L.land(280, '#e6cf9f', 3, 24) + L.shrub(120, 300, 0.8, 2) + L.shrub(660, 296, 0.9, 4) + L.land(340, P.sand2, 6, 16)
  + L.land(410, P.sand3, 9, 8) + stones(400, 440) + L.pot(400, 432, 1.3)
  + L.jug(580, 450, 1) + L.bowl(230, 452, 1) + L.bowl(150, 462, 0.8, P.clay2, false) + R(520, 456, 60, 8, P.wood2, 'rx="3"');
S.hzm3 = () => L.sky('day') + L.sun(640, 120, 36, '#ffd98a') + L.land(270, '#e6cf9f', 3, 26) + L.shrub(150, 290, 0.8, 2) + L.shrub(420, 282, 0.7, 6) + L.shrub(620, 292, 0.9, 4)
  + L.land(340, P.sand2, 6, 18) + L.shrub(250, 376, 1.5, 7) + L.shrub(560, 384, 1.7, 9) + L.shrub(700, 372, 1.2, 12)
  + L.land(420, P.sand3, 9, 10) + L.sticks(400, 452, 1.5) + L.steps(120, 470, 6, 34, -6, P.sand4, 1.3) + L.steps(470, 440, 4, 26, -12, P.sand4, 1.1);
S.hzm4 = () => L.sky('dusk') + L.stars(21, 30, 160) + L.land(300, '#8a5a6a', 3, 24) + L.camel(120, 330, 0.6, '#3a2444', true) + L.camel(200, 334, 0.6, '#3a2444', true)
  + L.land(340, '#a0685a', 6, 16) + L.land(410, '#8a563f', 9, 8)
  + stones(400, 446) + L.sticks(400, 446, 0.9, false) + L.fire(400, 440, 0.95) + L.pot(560, 452, 1) + L.sticks(200, 462, 1.1)
  + [[120, 430, 70], [650, 416, 60], [300, 478, 60], [520, 480, 56]].map(([x, y, w]) => E(x, y, w, 12, '#b9573d', 'opacity=".75"')).join('');

// ---------- 77. Three nights of iftar ----------
const room = (wall = '#5a3f2e', fl = '#3b2a22') => R(0, 0, 800, 500, wall) + floor(380, fl) + R(0, 372, 800, 10, '#2c1f1a');
const windowArch = (x, y, kind) => { const c = { day: '#9fd3e0', dusk: '#f0a060', night: '#101b44' }[kind]; return `<path d="M${x - 44} ${y} v-80 a44 44 0 0 1 88 0 v80Z" fill="${c}"/>` + (kind === 'night' ? `<circle cx="${x - 12}" cy="${y - 70}" r="2" fill="#fff6d8"/><circle cx="${x + 16}" cy="${y - 40}" r="1.6" fill="#fff6d8"/><circle cx="${x + 4}" cy="${y - 96}" r="1.6" fill="#fff6d8"/>` : '') + `<path d="M${x - 44} ${y} v-80 a44 44 0 0 1 88 0 v80" fill="none" stroke="#2c1f1a" stroke-width="8"/>`; };
const sofreh = (x, y, w = 360) => `<path d="M${x - w / 2} ${y} L${x - w / 2 + 40} ${y - 50} L${x + w / 2 - 40} ${y - 50} L${x + w / 2} ${y}Z" fill="#efe2c4"/><path d="M${x - w / 2 + 16} ${y - 8} L${x - w / 2 + 48} ${y - 44} L${x + w / 2 - 48} ${y - 44} L${x + w / 2 - 16} ${y - 8}Z" fill="none" stroke="${P.terra}" stroke-width="3"/>`;
S.hal1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(520, 80, 1) + L.town(330, 22, 7, [P.clay1, P.clay2], 0, 0, 800, 40, 70) + L.land(332, P.sand1, 3, 6)
  + L.house(250, 430, 300, 170, '#ead2aa', { win: true, winAt: 0.8, doorAt: 0.4 }) + L.palm(620, 430, 170, -10) + L.palm(170, 432, 130, 8)
  + L.land(432, P.sand2, 6, 6) + L.jug(590, 456, 0.7) + L.dove(120, 446, 0.6) + L.dove(86, 452, 0.5, '#dfe3e7', true);
S.hal2 = () => room() + windowArch(640, 250, 'day') + Pth('M596 250 L684 250 L600 500 L420 500Z', '#f6e7c4', 'opacity=".12"')
  + L.mill(190, 440, 1.1) + L.sack(360, 430, 0.8) + E(350, 444, 46, 8, '#e4cf8f')
  + `<g fill="#f4f1ea">${E(520, 420, 34, 22, '#f4f1ea')}${E(552, 410, 26, 20, '#ece7dc')}${E(498, 406, 24, 18, '#fbf9f4')}</g><line x1="590" y1="440" x2="610" y2="380" stroke="${P.wood2}" stroke-width="5" stroke-linecap="round"/><ellipse cx="601" cy="408" rx="9" ry="13" fill="#f4f1ea"/>`
  + R(560, 446, 190, 10, P.wood3, 'rx="4"') + [0, 1, 2, 3, 4].map((i) => L.loaf(590 + i * 34, 440 - (i % 2) * 5, 0.5)).join('');
S.hal3 = () => room('#4d3628', '#33241d') + windowArch(160, 250, 'dusk') + L.door(650, 384, 130, 240)
  + sofreh(360, 470) + [[270, 440], [340, 432], [410, 440], [310, 456], [390, 458]].map(([x, y]) => L.loaf(x, y, 0.7)).join('') + L.jug(480, 440, 0.6) + L.bowl(230, 452, 0.5)
  + L.lamp(80, 380, 1.1);
S.hal4 = () => room('#3f2c22', '#2a1d18') + windowArch(160, 250, 'night') + L.door(650, 384, 130, 240, true)
  + [[610, 180], [690, 210], [640, 250], [670, 300], [620, 320]].map(([x, y]) => `<circle class="tw" cx="${x}" cy="${y}" r="1.8" fill="#fff6d8"/>`).join('')
  + sofreh(360, 470) + L.bowl(360, 448, 0.9) + L.jug(470, 440, 0.6) + L.lamp(80, 380, 1.1);
S.hal5 = () => L.sky('dawn') + L.stars(31, 20, 140) + L.sun(400, 250, 60) + L.town(330, 22, 7, ['#b98a7a', '#a87a70'], 0, 0, 800, 40, 70) + L.land(332, '#c79a70', 3, 6)
  + L.house(250, 430, 300, 170, '#e3c29a', { win: true, winAt: 0.8, doorAt: 0.4 }) + L.palm(620, 430, 170, -10) + L.palm(170, 432, 130, 8)
  + L.land(432, P.sand2, 6, 6) + L.flock(400, 120, 8, 9, 160, 1.2);

// ---------- 82. The old man's wudu ----------
const basin = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="170" ry="46" fill="#8d8a90"/><rect x="-170" y="-34" width="340" height="34" fill="#a3a0a6"/><ellipse cx="0" cy="-34" rx="170" ry="46" fill="#bdbac0"/><ellipse cx="0" cy="-34" rx="146" ry="36" fill="${P.sea1}"/><path class="ripple" d="M-60 -34 q30 -9 60 0 q30 9 60 0" stroke="#d8f0f4" stroke-width="2.5" fill="none"/><path class="ripple" d="M-90 -22 q20 -6 40 0" stroke="#d8f0f4" stroke-width="2" fill="none"/></g>`;
S.wdu1 = () => L.sky('day') + L.sun(660, 90, 36) + L.cloud(200, 90, 1) + L.land(300, '#e6cf9f', 3, 20) + L.palm(120, 380, 190, 12) + L.palm(700, 372, 160, -10) + L.palm(600, 360, 110, 6)
  + L.land(372, P.sand2, 6, 12) + basin(400, 440, 1) + L.jug(650, 462, 0.9) + L.land(476, P.sand3, 9, 6);
S.wdu2 = () => L.sky('day') + L.land(250, '#e6cf9f', 3, 18) + L.land(330, P.sand2, 6, 10) + R(0, 392, 800, 108, '#bdbac0') + R(0, 392, 800, 14, '#d4d1d6')
  + L.jug(250, 392, 1.5, P.clay3) + L.jug(550, 392, 1.5, P.clay2) + L.bowl(400, 392, 1.2)
  + `<path class="ripple" d="M360 366 q20 -6 40 0 q20 6 40 0" stroke="#fff" stroke-width="2" fill="none"/>` + L.palm(720, 330, 150, -10) + L.palm(70, 334, 130, 8);
S.wdu3 = () => L.sky('day') + L.sun(400, 120, 50) + L.land(300, '#e6cf9f', 3, 20) + L.palm(110, 380, 170, 12) + L.palm(690, 376, 180, -12)
  + L.land(372, P.sand2, 6, 12) + basin(400, 440, 1.05) + L.dove(250, 392, 0.9) + L.dove(560, 394, 0.85, '#dfe3e7', true)
  + [[340, 396], [420, 388], [470, 404], [380, 412]].map(([x, y], i) => `<circle class="tw" style="animation-delay:${i * 0.5}s" cx="${x}" cy="${y}" r="3" fill="#fff"/>`).join('') + L.flock(400, 220, 5, 4, 90, 1);

// ---------- 91. The sacks in the night ----------
const lane = (wallL, wallR, ground) => Pth('M0 500 L0 120 L250 210 L250 400Z', wallL) + Pth('M800 500 L800 120 L550 210 L550 400Z', wallR) + Pth('M0 500 L250 400 L550 400 L800 500Z', ground);
const laneDoors = (lit) => Pth('M60 470 v-150 a40 40 0 0 1 60 14 v108Z', '#2a1a12') + Pth('M740 470 v-150 a40 40 0 0 0 -60 14 v108Z', '#2a1a12')
  + Pth('M176 426 v-96 a22 22 0 0 1 36 8 v72Z', '#2a1a12') + Pth('M624 426 v-96 a22 22 0 0 0 -36 8 v72Z', '#2a1a12')
  + (lit ? L.glow(150, 230, 40, '#ffd27a', 0.5) + Pth('M136 250 v-30 a14 14 0 0 1 28 4 v30Z', '#ffd27a') : '');
S.saj1 = () => L.sky('night') + L.stars(41, 90, 330) + L.town(400, 42, 4, ['#1a1c3e', '#20224a'], 0.3, 250, 550, 60, 110)
  + lane('#232349', '#1c1c40', '#2e2a52') + laneDoors(true);
S.saj2 = () => L.sky('night') + L.stars(43, 50, 260) + R(380, 60, 420, 360, '#2a2853') + R(380, 50, 420, 14, '#1d1b40') + floor(410, '#2e2a52')
  + L.door(610, 414, 140, 250) + L.sack(250, 440, 1.3, '#a88a5c') + L.loaf(246, 330, 0.7) + L.loaf(262, 322, 0.6) + L.sticks(120, 452, 1)
  + L.steps(60, 478, 5, 30, -3, '#1d1b40', 1.2);
S.saj3 = () => L.sky('storm') + L.town(400, 42, 4, ['#1a1c2e', '#20222e'], 0.2, 250, 550, 60, 110) + lane('#262a38', '#20242f', '#30343f') + laneDoors(false)
  + E(400, 462, 90, 12, '#4a5a6a', 'opacity=".7"') + E(250, 486, 60, 8, '#4a5a6a', 'opacity=".6"')
  + L.sack(330, 440, 0.9, '#a39a86') + L.sticks(450, 446, 0.9) + L.rain(8, 110);
S.saj4 = () => L.sky('dawn') + L.sun(400, 300, 50) + L.town(400, 42, 4, ['#b98a7a', '#c79a80'], 0, 250, 550, 60, 110)
  + lane('#caa07c', '#b98d6c', '#e0c49a') + laneDoors(false) + L.flock(400, 150, 12, 7, 120, 1.1);

// ---------- 103. The boy who did not run ----------
const baghdad = (y) => L.town(y, 51, 10, [P.clay1, '#eedcb8', P.clay2], 0, 0, 800, 30, 60)
  + `<path d="M330 ${y - 50} a50 50 0 0 1 100 0Z" fill="#2f8ea6"/>` + R(322, y - 50, 116, 50, '#f1dfbd') + R(376, y - 112, 8, 16, P.gold) + L.palm(560, y, 90, 6) + L.palm(210, y, 80, -6);
const toys = (x, y) => `<g transform="translate(${x} ${y}) scale(1.7)"><circle cx="0" cy="-16" r="16" fill="${P.terra}"/><path d="M-16 -16 q16 -10 32 0" stroke="#f1dfbd" stroke-width="3" fill="none"/>` + [[50, 0], [70, -6], [62, 8], [84, 4], [-50, 4], [-66, -4]].map(([dx, dy]) => `<circle cx="${dx}" cy="${dy}" r="6" fill="#8a6a44"/>`).join('') + '</g>';
S.jwd1 = () => L.sky('day') + L.sun(120, 90, 36) + L.cloud(600, 80, 1.1) + baghdad(300) + R(0, 300, 800, 22, P.sea1) + L.land(326, P.leaf1, 3, 6)
  + L.land(350, P.sand1, 5, 8) + Pth('M240 500 L360 350 L440 350 L560 500Z', '#f3e3bb') + toys(400, 440);
S.jwd2 = () => L.sky('day') + L.sun(120, 90, 36) + baghdad(300) + R(0, 300, 800, 22, P.sea1) + L.land(326, P.leaf1, 3, 6)
  + L.land(350, P.sand1, 5, 8) + Pth('M240 500 L360 350 L440 350 L560 500Z', '#f3e3bb')
  + ridgeArmy(372, 61, 9, 0.9, 310, 490) + L.dust(400, 380, 1.1) + L.dust(400, 410, 0.7, '#f0dcb4', 0.6)
  + L.bird(560, 140, 2.2, '#5a4a3a', 'flap') + toys(400, 462);
S.jwd3 = () => L.sky('day') + L.sun(660, 100, 40) + L.cloud(220, 90, 1) + baghdad(280) + R(0, 280, 800, 20, P.sea1) + L.land(304, P.leaf1, 3, 6)
  + L.land(326, P.sand1, 5, 8) + Pth('M40 500 L340 326 L460 326 L760 500Z', '#f3e3bb') + Pth('M392 500 L398 330 L402 330 L408 500Z', '#e6cf9f')
  + L.palm(110, 420, 150, 10) + L.palm(700, 426, 140, -10) + L.bird(420, 150, 2, '#5a4a3a', 'flap') + toys(400, 470);

// ---------- covers for stories not written yet ----------
const GROUP_TINT = { A: ['#1f3a6e', '#2f6f8b'], B: ['#1f6b5a', '#3d8262'], C: ['#6a2f4e', '#b9573d'], D: ['#5a4a2a', '#a9773f'] };
export function emblem(group, seed) {
  const [a, b] = GROUP_TINT[group] || GROUP_TINT.A, r = L.rng(seed * 97 + 3), i = L.uid('em');
  let s = `<defs><linearGradient id="${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="500" fill="url(#${i})"/>`;
  for (let k = 0; k < 7; k++) s += L.shamsa(r() * 800, r() * 500, 20 + r() * 50, '#ffffff', 0.06);
  return s + L.shamsa(400, 250, 92, P.gold, 0.9) + L.shamsa(400, 250, 60, a, 1) + L.shamsa(400, 250, 30, P.gold, 0.9);
}

export const SCENES = S;
export function scene(id, cls = '') { return L.wrap(S[id] ? S[id]() : emblem('A', 1), cls); }
export function cover(story, cls = 'still') { return L.wrap(story.cover && S[story.cover] ? S[story.cover]() : emblem(story.group, story.id), cls); }

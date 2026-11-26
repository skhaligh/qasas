// Shared picture library. Every scene is drawn in code on an 800 x 500 canvas.
// Rule: places, objects, animals and nature only. No holy figures, and no glow standing in for one.

let uidN = 0;
export const uid = (p = 'a') => p + (++uidN);
export function rng(seed) {
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const n = (v) => Math.round(v * 10) / 10;

export const P = {
  sand1: '#ecd3a0', sand2: '#deb877', sand3: '#c9995a', sand4: '#a9773f',
  rock1: '#9a86a8', rock2: '#76628a', rock3: '#54426b', rock4: '#35284a',
  sea1: '#2f8ea6', sea2: '#1f6f8b', sea3: '#17566e', sea4: '#0f3d54',
  leaf1: '#5fa57c', leaf2: '#3d8262', leaf3: '#2a634a',
  wood1: '#a8743f', wood2: '#8a5a34', wood3: '#6a4226', wood4: '#472a17',
  clay1: '#e7c9a0', clay2: '#d6ac7c', clay3: '#bd8a5c', clay4: '#94623e',
  gold: '#e6b450', cream: '#f8efdc', terra: '#b9573d', ink: '#231c33', night: '#0d1533',
};

const SKY = {
  day: ['#86c5d8', '#c6e5e0', '#f7e8c6'],
  noon: ['#63b3d1', '#b5dde6', '#f3ead0'],
  dawn: ['#34407f', '#c96f6e', '#f6c98a'],
  dusk: ['#262459', '#9c4d79', '#f0a060'],
  night: ['#070b20', '#0f1a42', '#1c2c5e'],
  storm: ['#171c28', '#333c4a', '#566070'],
  deep: ['#11677c', '#083a4c', '#020d15'],
  room: ['#2c1f1a', '#4a3226', '#6b4a32'],
};
export function sky(kind) {
  const i = uid('sk'), s = SKY[kind];
  return `<defs><linearGradient id="${i}" x1="0" y1="0" x2="0" y2="1">${s.map((c, k) => `<stop offset="${k / (s.length - 1)}" stop-color="${c}"/>`).join('')}</linearGradient></defs><rect width="800" height="500" fill="url(#${i})"/>`;
}
export function glow(x, y, r, color = '#fff3c4', op = 0.8) {
  const i = uid('gl');
  return `<defs><radialGradient id="${i}"><stop offset="0" stop-color="${color}" stop-opacity="${op}"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient></defs><circle cx="${x}" cy="${y}" r="${r}" fill="url(#${i})"/>`;
}
export function stars(seed = 1, count = 60, maxY = 300) {
  const r = rng(seed); let s = '';
  for (let i = 0; i < count; i++) {
    s += `<circle class="tw" style="animation-delay:${n(r() * 4)}s" cx="${n(r() * 800)}" cy="${n(r() * maxY)}" r="${n(0.6 + r() * 1.5)}" fill="#fff6d8" opacity="${n(0.45 + r() * 0.5)}"/>`;
  }
  return s;
}
export function moon(x, y, r = 34, crescent = true) {
  const m = uid('mn');
  if (!crescent) return glow(x, y, r * 3.2, '#fff3c4', 0.35) + `<circle cx="${x}" cy="${y}" r="${r}" fill="#fdf2c8"/>`;
  return glow(x, y, r * 3, '#fff3c4', 0.28) + `<defs><mask id="${m}"><rect width="800" height="500" fill="#fff"/><circle cx="${x + r * 0.45}" cy="${y - r * 0.2}" r="${r * 0.9}" fill="#000"/></mask></defs><circle cx="${x}" cy="${y}" r="${r}" fill="#fdf2c8" mask="url(#${m})"/>`;
}
export function sun(x, y, r = 40, color = '#ffe08a') {
  return glow(x, y, r * 4, color, 0.55) + `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
}
export function cloud(x, y, s = 1, fill = '#ffffff', op = 0.85, cls = 'drift') {
  return `<g opacity="${op}" fill="${fill}" transform="translate(${x} ${y}) scale(${s})"><g class="${cls}"><ellipse cx="0" cy="0" rx="60" ry="20"/><ellipse cx="-30" cy="-12" rx="32" ry="20"/><ellipse cx="14" cy="-20" rx="38" ry="26"/><ellipse cx="50" cy="-6" rx="28" ry="16"/></g></g>`;
}
// Smooth rolling ground (dunes, hills). y = average top edge.
export function land(y, fill, seed = 1, amp = 26, segs = 4, extra = '') {
  const r = rng(seed), w = 800 / segs;
  let d = `M0 500 L0 ${n(y + (r() - 0.5) * amp)} Q${n(w / 2)} ${n(y - amp * (0.4 + r()))} ${n(w)} ${n(y + (r() - 0.5) * amp)}`;
  for (let i = 2; i <= segs; i++) d += ` T${n(i * w)} ${n(y + (r() - 0.5) * amp)}`;
  return `<path d="${d} L800 500Z" fill="${fill}" ${extra}/>`;
}
// Jagged mountains.
export function peaks(base, fill, seed = 1, count = 5, h = 120, extra = '') {
  const r = rng(seed), w = 800 / count; let d = `M0 500 L0 ${base}`;
  for (let i = 0; i < count; i++) {
    const x0 = i * w, xm = x0 + w * (0.3 + r() * 0.4), top = base - h * (0.45 + r() * 0.55);
    d += ` L${n(x0 + (xm - x0) * 0.55)} ${n(top + (base - top) * 0.42)} L${n(xm)} ${n(top)} L${n(xm + (x0 + w - xm) * 0.5)} ${n(top + (base - top) * 0.5)} L${n(x0 + w)} ${n(base - r() * h * 0.2)}`;
  }
  return `<path d="${d} L800 500Z" fill="${fill}" stroke="${fill}" stroke-width="6" stroke-linejoin="round" ${extra}/>`;
}
export function palm(x, y, h = 120, lean = 10, trunk = P.wood3, leaf = P.leaf3) {
  const tx = x + lean, ty = y - h, k = h / 120;
  let s = `<path d="M${n(x - 5 * k)} ${y} Q${n(x + lean * 0.15 - 2)} ${n(y - h * 0.5)} ${n(tx - 3 * k)} ${n(ty)} L${n(tx + 3 * k)} ${n(ty)} Q${n(x + lean * 0.15 + 9 * k)} ${n(y - h * 0.5)} ${n(x + 6 * k)} ${y}Z" fill="${trunk}"/>`;
  const fr = [[-78, 16], [-64, -22], [-34, -48], [0, -58], [34, -48], [64, -22], [78, 16]];
  fr.forEach(([dx, dy]) => {
    const ex = tx + dx * k, ey = ty + dy * k;
    s += `<path d="M${n(tx)} ${n(ty)} Q${n(tx + dx * k * 0.55)} ${n(ty + dy * k - 26 * k)} ${n(ex)} ${n(ey)} Q${n(tx + dx * k * 0.5)} ${n(ty + dy * k * 0.5 - 4 * k)} ${n(tx)} ${n(ty + 5 * k)}Z" fill="${leaf}"/>`;
  });
  s += `<circle cx="${n(tx)}" cy="${n(ty + 2 * k)}" r="${n(5 * k)}" fill="${trunk}"/>`;
  return `<g class="sway" style="transform-origin:${x}px ${y}px">${s}</g>`;
}
// Layered water. period = wave length, amp = wave height.
export function sea(y, cols = [P.sea2, P.sea3, P.sea4], amp = 7, period = 100, gap = 30) {
  let s = '';
  cols.forEach((c, i) => {
    const yy = y + i * gap, a = amp * (1 + i * 0.25); let d = `M${-2 * period} ${yy}`;
    for (let x = -2 * period; x < 800 + 2 * period; x += period) d += ` q${period / 4} ${-a} ${period / 2} 0 t${period / 2} 0`;
    s += `<path class="wave" style="--p:${period}px;animation-duration:${5 + i * 2.5}s;animation-direction:${i % 2 ? 'reverse' : 'normal'}" d="${d} L${800 + 2 * period} 520 L${-2 * period} 520Z" fill="${c}"/>`;
  });
  return s;
}
export function rain(seed = 3, count = 90, color = '#cfe3ee') {
  const r = rng(seed); let s = '';
  for (let i = 0; i < count; i++) { const x = r() * 900 - 50, y = r() * 520 - 40, l = 14 + r() * 16; s += `<line x1="${n(x)}" y1="${n(y)}" x2="${n(x - l * 0.3)}" y2="${n(y + l)}"/>`; }
  return `<g class="rainfall" stroke="${color}" stroke-width="1.6" stroke-linecap="round" opacity="0.55">${s}</g>`;
}
export function bolt(x, y, s = 1) {
  return `<path class="flash" transform="translate(${x} ${y}) scale(${s})" d="M0 0 L-22 70 L-4 68 L-30 150 L20 52 L2 54 L18 0Z" fill="#fff4b8"/>`;
}
export function fire(x, y, s = 1) {
  const f = 'M-40 0 C-66 -42 -34 -70 -24 -112 C-8 -84 8 -104 4 -146 C40 -104 60 -58 40 0Z';
  return `<g transform="translate(${x} ${y}) scale(${s})">${glow(0, -50, 170, '#ffb347', 0.5)}<g class="flick"><path d="${f}" fill="#d4472a"/></g><g class="flick f2"><path d="${f}" transform="scale(.7)" fill="#f08a2c"/></g><g class="flick f3"><path d="${f}" transform="scale(.42)" fill="#ffd866"/></g></g>`;
}
// The ark. Origin = middle of the keel. stage: 'frame' (being built) or 'done'.
export function ark(x, y, s = 1, stage = 'done', cls = '') {
  const hull = 'M-170 -62 C-158 -14 -118 0 -84 0 L86 0 C122 0 156 -16 174 -68 Z';
  let g = '';
  if (stage === 'frame') {
    g += `<path d="${hull}" fill="none" stroke="${P.wood3}" stroke-width="7" stroke-linejoin="round"/>`;
    for (let i = -130; i <= 130; i += 37) g += `<path d="M${i} -64 Q${i + 4} -30 ${i * 0.82} ${-4 - Math.abs(i) * 0.02}" stroke="${P.wood2}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    g += `<path d="M-150 -38 C-120 -22 120 -22 152 -40" stroke="${P.wood1}" stroke-width="6" fill="none"/>`;
  } else {
    g += `<path d="${hull}" fill="${P.wood2}"/>`;
    g += `<path d="M-160 -44 C-130 -30 130 -30 162 -48" stroke="${P.wood4}" stroke-width="2.5" fill="none" opacity=".6"/><path d="M-146 -24 C-116 -12 116 -12 148 -28" stroke="${P.wood4}" stroke-width="2.5" fill="none" opacity=".6"/>`;
    g += `<path d="M-172 -62 L176 -68 L172 -78 L-168 -72Z" fill="${P.wood3}"/>`;
    g += `<rect x="-96" y="-120" width="192" height="48" fill="${P.wood1}"/><path d="M-108 -120 L0 -150 L108 -120Z" fill="${P.wood3}"/>`;
    for (let i = -72; i <= 72; i += 36) g += `<rect x="${i - 7}" y="-106" width="14" height="18" rx="7" fill="${P.wood4}"/>`;
  }
  return `<g transform="translate(${x} ${y}) scale(${s})"><g class="${cls}">${g}</g></g>`;
}
// A merchant ship with one sail (Yunus).
export function boat(x, y, s = 1, cls = 'bob', sail = '#f1e2c0') {
  return `<g transform="translate(${x} ${y}) scale(${s})"><g class="${cls}"><path d="M-120 -40 C-104 -4 -70 0 -50 0 L60 0 C96 0 118 -18 132 -52 Z" fill="${P.wood2}"/><path d="M-112 -28 C-80 -16 90 -16 122 -36" stroke="${P.wood4}" stroke-width="2.5" fill="none" opacity=".6"/><rect x="-3" y="-190" width="6" height="150" fill="${P.wood4}"/><path d="M6 -184 C70 -160 78 -100 8 -64Z" fill="${sail}"/><path d="M-6 -176 C-50 -150 -56 -104 -6 -72Z" fill="${sail}" opacity=".85"/><rect x="-70" y="-58" width="34" height="18" fill="${P.clay3}"/><rect x="-30" y="-62" width="30" height="22" fill="${P.clay4}"/><rect x="40" y="-58" width="36" height="18" fill="${P.clay3}"/><ellipse cx="22" cy="-48" rx="14" ry="10" fill="${P.sand3}"/></g></g>`;
}
export function whale(x, y, s = 1, fill = '#16324a', cls = 'swim') {
  return `<g transform="translate(${x} ${y}) scale(${s})"><g class="${cls}"><path d="M-180 0 C-160 -78 30 -96 130 -42 C160 -26 184 -48 214 -84 C206 -40 210 -6 228 26 C196 14 160 4 130 14 C40 62 -130 62 -180 0Z" fill="${fill}"/><path d="M-176 6 C-120 44 20 48 118 14 C40 30 -100 34 -176 6Z" fill="#c9d8dc" opacity=".35"/><circle cx="-128" cy="-12" r="4.5" fill="#f4f1e4"/><circle cx="-128" cy="-12" r="2" fill="#0a1320"/><path d="M-60 26 C-40 52 -10 52 0 30Z" fill="${fill}"/></g></g>`;
}
export function camel(x, y, s = 1, fill = P.rock4, kneel = false) {
  const legs = kneel ? `<rect x="-30" y="-12" width="58" height="9" rx="4"/>` : `<rect x="-27" y="-36" width="5" height="36"/><rect x="-16" y="-36" width="5" height="36"/><rect x="13" y="-36" width="5" height="36"/><rect x="23" y="-36" width="5" height="36"/>`;
  const up = kneel ? 22 : 0;
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="${fill}">${legs}<g transform="translate(0 ${up})"><ellipse cx="0" cy="-46" rx="34" ry="15"/><path d="M-20 -54 Q-2 -86 18 -54Z"/><path d="M26 -50 Q42 -58 42 -86 L51 -86 Q54 -54 34 -38Z"/><ellipse cx="52" cy="-89" rx="11" ry="6"/><path d="M-33 -48 Q-42 -40 -40 -26" stroke="${fill}" stroke-width="3" fill="none"/></g></g>`;
}
export function house(x, y, w, h, fill = P.clay2, o = {}) {
  const trim = o.trim || P.clay4;
  let s = `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="${fill}"/><rect x="${x - 3}" y="${y - h - 5}" width="${w + 6}" height="8" rx="2" fill="${trim}"/>`;
  if (o.dome) s += `<path d="M${x + w * 0.2} ${y - h - 5} a${w * 0.3} ${w * 0.3} 0 0 1 ${w * 0.6} 0Z" fill="${o.domeFill || trim}"/>`;
  if (o.door !== false) { const dw = Math.min(w * 0.24, 30), dh = Math.min(h * 0.55, 52), dx = x + w * (o.doorAt ?? 0.5) - dw / 2; s += `<path d="M${n(dx)} ${y} v${n(-dh + dw / 2)} a${n(dw / 2)} ${n(dw / 2)} 0 0 1 ${n(dw)} 0 v${n(dh - dw / 2)}Z" fill="${o.doorFill || P.wood4}"/>`; }
  if (o.win) { const wx = x + w * (o.winAt ?? 0.78), wy = y - h * 0.68; s += (o.lit ? glow(wx, wy, 26, '#ffd27a', 0.6) : '') + `<rect x="${n(wx - 6)}" y="${n(wy - 8)}" width="12" height="16" rx="6" fill="${o.lit ? '#ffd27a' : P.wood4}"/>`; }
  return s;
}
// A row of flat-roofed houses. lit = share of windows with lamplight.
export function town(y, seed = 1, count = 7, fills = [P.clay1, P.clay2, P.clay3], lit = 0, x0 = 0, x1 = 800, hMin = 46, hMax = 96) {
  const r = rng(seed), w = (x1 - x0) / count; let s = '';
  for (let i = 0; i < count; i++) {
    const ww = w * (0.8 + r() * 0.35), h = hMin + r() * (hMax - hMin);
    s += house(n(x0 + i * w + (r() - 0.5) * 8), y, n(ww), n(h), fills[Math.floor(r() * fills.length)], { win: r() > 0.25, lit: r() < lit, dome: r() > 0.82, doorAt: 0.3 + r() * 0.3, winAt: 0.74 });
  }
  return s;
}
// A big wooden door seen close up. x,y = bottom centre.
export function door(x, y, w = 150, h = 250, open = false) {
  const l = x - w / 2, r = w / 2;
  let s = `<path d="M${l - 16} ${y} v${-h + r - 8} a${r + 16} ${r + 16} 0 0 1 ${w + 32} 0 v${h - r + 8}Z" fill="${P.clay4}"/>`;
  s += `<path d="M${l} ${y} v${-h + r} a${r} ${r} 0 0 1 ${w} 0 v${h - r}Z" fill="${open ? '#0d1533' : P.wood3}"/>`;
  if (!open) {
    for (let i = 1; i < 4; i++) s += `<line x1="${l + (w / 4) * i}" y1="${y}" x2="${l + (w / 4) * i}" y2="${y - h + r * 0.4}" stroke="${P.wood4}" stroke-width="2.5" opacity=".7"/>`;
    for (let j = 0; j < 3; j++) for (let i = 0; i < 4; i++) s += `<circle cx="${l + w / 8 + (w / 4) * i}" cy="${y - 34 - j * 58}" r="3.2" fill="${P.gold}"/>`;
    s += `<circle cx="${x + w * 0.22}" cy="${y - h * 0.42}" r="10" fill="none" stroke="${P.gold}" stroke-width="3.5"/>`;
  }
  return s;
}
export function lamp(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">${glow(8, -22, 80, '#ffcf6b', 0.55)}<path d="M-22 0 Q-26 -14 -8 -16 L12 -16 Q24 -16 30 -22 L34 -18 Q28 -4 14 0Z" fill="${P.clay4}"/><ellipse cx="-4" cy="1" rx="16" ry="3" fill="${P.wood4}"/><g class="flick f3"><path d="M32 -22 C26 -30 30 -36 33 -44 C38 -36 40 -30 34 -22Z" fill="#ffd866"/></g></g>`;
}
export function web(cx, cy, r = 110, op = 0.75) {
  let s = ''; const spokes = 12;
  for (let i = 0; i < spokes; i++) { const a = (i / spokes) * Math.PI * 2; s += `<line x1="${cx}" y1="${cy}" x2="${n(cx + Math.cos(a) * r)}" y2="${n(cy + Math.sin(a) * r)}"/>`; }
  for (let k = 1; k <= 5; k++) {
    const rr = (r * k) / 5.4; let d = '';
    for (let i = 0; i <= spokes; i++) { const a = (i / spokes) * Math.PI * 2, a0 = ((i - 0.5) / spokes) * Math.PI * 2; d += i === 0 ? `M${n(cx + rr)} ${cy}` : ` Q${n(cx + Math.cos(a0) * rr * 0.9)} ${n(cy + Math.sin(a0) * rr * 0.9)} ${n(cx + Math.cos(a) * rr)} ${n(cy + Math.sin(a) * rr)}`; }
    s += `<path d="${d}" fill="none"/>`;
  }
  return `<g stroke="#f4f7ff" stroke-width="1.3" opacity="${op}" stroke-linecap="round">${s}</g>`;
}
export function bird(x, y, s = 1, color = P.ink, cls = '') {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path class="${cls}" d="M-14 2 Q-8 -9 0 0 Q8 -9 14 2 Q7 -3 0 4 Q-7 -3 -14 2Z" fill="${color}"/></g>`;
}
export function flock(x, y, seed = 1, count = 7, spread = 90, s = 1, color = P.ink) {
  const r = rng(seed); let o = '';
  for (let i = 0; i < count; i++) o += bird(n(x + (r() - 0.5) * spread * 2), n(y + (r() - 0.5) * spread * 0.8), n(s * (0.6 + r() * 0.7)), color, 'flap');
  return o;
}
export function dove(x, y, s = 1, fill = '#eef0f2', flip = false) {
  return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><ellipse cx="0" cy="0" rx="22" ry="13" fill="${fill}"/><path d="M-18 -2 L-42 -12 L-38 4Z" fill="${fill}"/><circle cx="20" cy="-11" r="8.5" fill="${fill}"/><path d="M28 -11 l9 3 l-9 2Z" fill="${P.gold}"/><circle cx="22" cy="-13" r="1.6" fill="${P.ink}"/><path d="M-10 -4 Q2 -18 14 -2 Q2 4 -10 -4Z" fill="#cfd5db"/></g>`;
}
export function nest(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-36 0 Q0 30 36 0 Q20 12 0 12 Q-20 12 -36 0Z" fill="${P.wood3}"/><path d="M-36 0 Q0 16 36 0" stroke="${P.wood1}" stroke-width="3" fill="none"/><path d="M-30 4 L-44 -4 M28 5 L44 -6 M-12 14 L-18 24" stroke="${P.wood2}" stroke-width="2.5"/><ellipse cx="-8" cy="0" rx="7" ry="9" fill="#f4eee0"/><ellipse cx="9" cy="1" rx="7" ry="9" fill="#efe6d2"/></g>`;
}
export function ant(x, y, s = 1, flip = false, color = '#3a2418') {
  return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})" fill="${color}" stroke="${color}"><ellipse cx="-13" cy="0" rx="10" ry="6.5"/><ellipse cx="0" cy="1" rx="5.5" ry="4.5"/><circle cx="9.5" cy="-1" r="5"/><g stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M-3 3 L-9 13 M0 4 L0 14 M3 3 L9 13"/><path d="M12 -5 Q16 -14 22 -13 M13 -3 Q20 -8 25 -5"/></g></g>`;
}
export function grass(x, y, count = 6, h = 60, seed = 1, fill = P.leaf2) {
  const r = rng(seed); let s = '';
  for (let i = 0; i < count; i++) { const bx = x + i * 9 + (r() - 0.5) * 6, hh = h * (0.5 + r() * 0.6), lean = (r() - 0.5) * 40; s += `<path d="M${n(bx - 4)} ${y} Q${n(bx + lean * 0.3)} ${n(y - hh * 0.6)} ${n(bx + lean)} ${n(y - hh)} Q${n(bx + lean * 0.4 + 5)} ${n(y - hh * 0.5)} ${n(bx + 4)} ${y}Z" fill="${fill}"/>`; }
  return `<g class="sway" style="transform-origin:${x}px ${y}px">${s}</g>`;
}
export function shrub(x, y, s = 1, seed = 1, color = P.wood3) {
  const r = rng(seed); let d = '';
  for (let i = 0; i < 9; i++) { const a = -Math.PI * (0.12 + 0.76 * (i / 8)), l = 26 + r() * 22; const ex = Math.cos(a) * l, ey = Math.sin(a) * l; d += `M0 0 L${n(ex)} ${n(ey)} M${n(ex * 0.55)} ${n(ey * 0.55)} l${n((r() - 0.5) * 16)} ${n(-6 - r() * 8)} `; }
  return `<path transform="translate(${x} ${y}) scale(${s})" d="${d}" stroke="${color}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
}
export function sticks(x, y, s = 1, tied = true) {
  let g = '';
  [[-44, 2, 46, -4], [-40, -8, 44, -12], [-46, -16, 40, -20], [-36, -24, 46, -26], [-42, 10, 42, 6]].forEach(([a, b, c, d], i) => { g += `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="${i % 2 ? P.wood2 : P.wood3}" stroke-width="7" stroke-linecap="round"/>`; });
  if (tied) g += `<rect x="-6" y="-32" width="9" height="48" rx="3" fill="${P.sand3}"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">${g}</g>`;
}
export function pot(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-40 -44 Q-52 0 -24 0 L24 0 Q52 0 40 -44Z" fill="#2c2a33"/><ellipse cx="0" cy="-44" rx="42" ry="9" fill="#44414d"/><ellipse cx="0" cy="-44" rx="34" ry="6" fill="#1a1820"/></g>`;
}
export function jug(x, y, s = 1, fill = P.clay3) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 0 Q-34 -34 -12 -62 L-10 -80 L10 -80 L12 -62 Q34 -34 16 0Z" fill="${fill}"/><ellipse cx="0" cy="-80" rx="11" ry="3.5" fill="${P.clay4}"/><path d="M12 -70 Q40 -62 22 -30" stroke="${fill}" stroke-width="6" fill="none"/><path d="M-22 -40 Q0 -34 22 -40" stroke="${P.clay4}" stroke-width="2.5" fill="none"/></g>`;
}
export function bowl(x, y, s = 1, fill = P.clay3, water = true) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-44 -22 Q-36 6 0 6 Q36 6 44 -22Z" fill="${fill}"/><ellipse cx="0" cy="-22" rx="44" ry="9" fill="${P.clay4}"/>${water ? `<ellipse cx="0" cy="-21" rx="37" ry="6.5" fill="${P.sea1}"/><path d="M-20 -22 q10 -3 20 0" stroke="#d8f0f4" stroke-width="1.5" fill="none"/>` : ''}</g>`;
}
export function loaf(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="34" ry="11" fill="#d9a55c"/><ellipse cx="0" cy="-2" rx="30" ry="8.5" fill="#e9c07c"/><g fill="#b98443"><circle cx="-12" cy="-3" r="1.8"/><circle cx="4" cy="-5" r="1.8"/><circle cx="14" cy="-1" r="1.8"/><circle cx="-2" cy="1" r="1.8"/></g></g>`;
}
export function sack(x, y, s = 1, fill = '#b99a6b') {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-38 0 Q-52 -52 -18 -78 L-22 -94 Q0 -86 22 -94 L18 -78 Q52 -52 38 0Z" fill="${fill}"/><path d="M-20 -78 Q0 -72 20 -78" stroke="#7a5a34" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-24 -40 Q-10 -20 -18 -6 M12 -50 Q24 -30 16 -10" stroke="#8f744a" stroke-width="2.5" fill="none" opacity=".6"/></g>`;
}
export function mill(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="74" ry="20" fill="#7d7a80"/><rect x="-74" y="-22" width="148" height="22" fill="#8d8a90"/><ellipse cx="0" cy="-22" rx="74" ry="20" fill="#a3a0a6"/><rect x="-64" y="-48" width="128" height="24" fill="#b3b0b6"/><ellipse cx="0" cy="-24" rx="64" ry="17" fill="#9c999f"/><ellipse cx="0" cy="-48" rx="64" ry="17" fill="#c8c5ca"/><ellipse cx="0" cy="-48" rx="10" ry="3.5" fill="#55525a"/><rect x="38" y="-84" width="8" height="38" rx="3" fill="${P.wood2}"/></g>`;
}
export function steps(x, y, count = 6, dx = 26, dy = -6, color = P.sand4, s = 1) {
  let o = '';
  for (let i = 0; i < count; i++) o += `<ellipse cx="${n(x + i * dx)}" cy="${n(y + i * dy + (i % 2 ? 7 * s : -7 * s))}" rx="${n(7 * s * (1 - i * 0.05))}" ry="${n(3.6 * s * (1 - i * 0.05))}" fill="${color}" opacity="${n(0.75 - i * 0.06)}"/>`;
  return o;
}
export function banner(x, y, h = 70, color = P.terra, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-1.5" y="${-h}" width="3" height="${h}" fill="${P.wood4}"/><path class="flag" d="M1.5 ${-h} q14 -4 26 4 q-12 6 -26 10Z" fill="${color}"/></g>`;
}
export function dust(x, y, s = 1, color = '#e9d3a6', op = 0.55) {
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="${color}" opacity="${op}"><g class="drift"><ellipse cx="0" cy="0" rx="80" ry="26"/><ellipse cx="-50" cy="-18" rx="44" ry="24"/><ellipse cx="30" cy="-28" rx="54" ry="30"/><ellipse cx="84" cy="-8" rx="40" ry="20"/></g></g>`;
}
export function tent(x, y, s = 1, fill = '#e9dcc0', stripe = P.terra) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-70 0 L0 -70 L70 0Z" fill="${fill}"/><path d="M-12 0 L0 -44 L12 0Z" fill="${P.rock4}"/><path d="M-50 -20 L50 -20" stroke="${stripe}" stroke-width="5"/><line x1="0" y1="-70" x2="0" y2="-82" stroke="${P.wood4}" stroke-width="3"/></g>`;
}
// Eight-pointed star, used on covers of stories that are not written yet.
export function shamsa(cx, cy, r, fill = P.gold, op = 1) {
  const sq = (a) => { let d = ''; for (let i = 0; i < 4; i++) { const t = a + (i * Math.PI) / 2; d += `${i ? 'L' : 'M'}${n(cx + Math.cos(t) * r)} ${n(cy + Math.sin(t) * r)}`; } return d + 'Z'; };
  return `<path d="${sq(0)} ${sq(Math.PI / 4)}" fill="${fill}" opacity="${op}"/>`;
}
export const wrap = (inner, cls = '') => `<svg class="art ${cls}" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;

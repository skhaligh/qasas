// Helpers for story files: quote ayat verbatim from content/ayat.js (never retype Qur'an text).
import { A } from './ayat.js';
const fa = (n) => String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
// Whole ayat with their numbers: ay('11:40', '11:41')
export const ay = (...keys) => keys.map((k) => { if (!A[k]) throw new Error('missing ayah ' + k); return `${A[k]} ﴿${fa(k.split(':')[1])}﴾`; }).join(' ');
// A phrase inside one ayah, by word position (1-based, inclusive): cut('11:41', 4, 7)
export const cut = (key, from, to) => { if (!A[key]) throw new Error('missing ayah ' + key); return A[key].split(' ').slice(from - 1, to).join(' '); };

// Offline support. Everything is served from the cache first and refreshed in the background,
// so the app opens without a connection and picks up new stories on the next launch.
// Both the install and the background refresh bypass the browser's own cache, so a new version never mixes with old files.
const CACHE = 'qasas-v5';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'css/app.css', 'css/art.css', 'fonts/Vazirmatn-wght.woff2',
  'js/app.js', 'js/audio.js', 'js/store.js', 'js/rec.js', 'js/art/lib.js', 'js/art/scenes.js', 'js/art/scenes2.js',
  'content/catalog.js', 'content/ayat.js', 'content/util.js', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png',
  ...[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 40, 42, 44, 51, 52, 53, 57, 58, 59, 60, 61, 62, 63, 64, 66, 68, 69, 71, 74, 75, 77, 78, 79, 80, 82, 85, 86, 91, 92, 93, 94, 96, 99, 100, 103, 110, 111].map((n) => `content/stories/${String(n).padStart(3, '0')}.js`)];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req, { cache: 'no-cache' }).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});

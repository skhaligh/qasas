// Offline support. Everything is served from the cache first and refreshed in the background,
// so the app opens without a connection and picks up new stories on the next launch.
const CACHE = 'qasas-v2';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'css/app.css', 'css/art.css', 'fonts/Vazirmatn-wght.woff2',
  'js/app.js', 'js/audio.js', 'js/store.js', 'js/art/lib.js', 'js/art/scenes.js', 'js/art/scenes2.js',
  'content/catalog.js', 'content/ayat.js', 'content/util.js', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png',
  ...[4, 7, 8, 9, 13, 21, 22, 25, 29, 30, 32, 34, 37, 38, 52, 58, 60, 61, 63, 68, 75, 77, 78, 82, 86, 91, 92, 96, 100, 103, 111].map((n) => `content/stories/${String(n).padStart(3, '0')}.js`)];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});

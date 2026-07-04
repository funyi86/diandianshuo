const CACHE = 'ddshuo-v2';
const PICTOS = [
  'i', 'want', 'no', 'more', 'help', 'done', 'hug', 'bye',
  'pee', 'poop', 'washhands', 'bath', 'sleep', 'teeth', 'dress', 'goout',
  'eat', 'drink', 'play', 'draw', 'read',
].map((n) => './pictos/' + n + '.png');
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  ...PICTOS,
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 先用缓存立即响应（离线可用），后台再尝试更新缓存
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(e.request);
      const refresh = fetch(e.request)
        .then((res) => {
          if (res && res.ok) cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => null);
      return cached || refresh.then((res) => res || Response.error());
    })
  );
});

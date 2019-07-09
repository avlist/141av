const version = "0.1.4";
const cacheName = `141av-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/?utm_source=homescreen`,
        `/db.json`,
        `/images/background.jpg`,
        `/styles/main.css`,
        `/scripts/app.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css`,
        `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});

var CACHE_NAME = '141av-cache-v1';
var urlsToCache = [
  '/',
  '/db.json',
  '/favicon.ico',
  '/css/style.css',
  '/js/app.js',
  'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

var staticCacheName = "freego" + new Date().getTime();

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    '/home',
    'fridge/list',
    '/map',
    '/favorite',
    '/settings',
    '/static/fridge/logos/icon-128x128.png',
    '/static/fridge/logos/icon-144x144.png',
    '/static/fridge/logos/icon-152x152.png',
    '/static/fridge/logos/icon-192x192.png',
    '/static/fridge/logos/icon-256x256.png',
    '/static/fridge/logos/icon-512x512.png',
];

// Cache on install
self.addEventListener('install', event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("django-pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});
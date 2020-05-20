const CACHE_NAME = 'static-cache-v3';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    '/offline-view',
    'fridge/css/style.css',
    'fridge/icons/vegan-icon.png',
    'fridge/icons/vegetarian-icon.png',
    'fridge/js/script.js',
    'fridge/logos/icon-128x128.png',
    'fridge/logos/icon-144x144.png',
    'fridge/logos/icon-152x152.png',
    'fridge/logos/icon-192x192.png',
    'fridge/logos/icon-256x256.png',
    'fridge/logos/icon-512x512.png',
];


// Cache on install
self.addEventListener('install', event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return fetch('/offline-view')
                    .then(response => cache.put('/offline-view', new Response(response.body)));
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
        fetch(event.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('/offline-view');
                    });
            })
    )
});
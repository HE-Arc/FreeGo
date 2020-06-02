const cacheName = 'freego-pwa-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

const precacheResources = [
    //urls
    '/fridge/list',
    '/',
    '/home',
    '/map',
    '/favorite',
    '/offline',
    //css
    '/static/fridge/css/materialize.min.css',
    '/static/fridge/css/style.css',
    //icons
    '/static/fridge/icons/vegan-icon.png',
    '/static/fridge/icons/vegetarian-icon.png',
    '/static/fridge/icons/feather/corner-up-left.svg',
    //js
    '/static/fridge/js/feather.min.js',
    '/static/fridge/js/jquery-3.5.1.min.js',
    '/static/fridge/js/materialize.min.js',
    '/static/fridge/js/script.js',
    '/static/fridge/js/idb.js',
    '/static/fridge/js/app.js',
    //logos
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
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(precacheResources);

            })
    );
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName && key !== DATA_CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
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
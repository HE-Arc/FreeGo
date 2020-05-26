const CACHE_NAME = 'freego-pwa-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    //urls
    '/fridge/list',
    '/',
    '/home',
    '/map',
    '/favorite',
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
    '/static/fridge/js/idbop.js',
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
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    // if (event.request.url.includes('/forecast/')) {
    //     event.respondWith(
    //         caches.open(DATA_CACHE_NAME).then((cache) => {
    //             return fetch(event.request)
    //                 .then((response) => {
    //                     // If the response was good, clone it and store it in the cache.
    //                     if (response.status === 200) {
    //                         cache.put(event.request.url, response.clone());
    //                     }
    //                     return response;
    //                 }).catch((err) => {
    //                     // Network request failed, try to get it from the cache.
    //                     return cache.match(event.request);
    //                 });
    //         }));
    //     return;
    // }
    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request)
                .then((response) => {
                    return response || fetch(event.request);
                });
        })
    );
});
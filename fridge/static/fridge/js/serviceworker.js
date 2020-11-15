const cacheName = 'freego-pwa-v10';

const filesToCache = [
    //urls
    '/list',
    '/',
    '/home',
    '/favorite',
    '/map',
    '/offline',
    //css
    '/static/fridge/css/style.css',
    '/static/fridge/css/all.min.css',
    //icons
    '/static/fridge/icons/vegan-icon.png',
    '/static/fridge/icons/vegetarian-icon.png',
    // iconfont
    '/static/fridge/iconfont/codepoints',
    '/static/fridge/iconfont/material-icons.css',
    '/static/fridge/iconfont/MaterialIcons-Regular.eot',
    '/static/fridge/iconfont/MaterialIcons-Regular.ijmap',
    '/static/fridge/iconfont/MaterialIcons-Regular.svg',
    '/static/fridge/iconfont/MaterialIcons-Regular.ttf',
    '/static/fridge/iconfont/MaterialIcons-Regular.woff',
    '/static/fridge/iconfont/MaterialIcons-Regular.woff2',
    // webfonts
    '/static/fridge/webfonts/fa-brands-400.eot',
    '/static/fridge/webfonts/fa-brands-400.svg',
    '/static/fridge/webfonts/fa-brands-400.ttf',
    '/static/fridge/webfonts/fa-brands-400.woff',
    '/static/fridge/webfonts/fa-brands-400.woff2',
    '/static/fridge/webfonts/fa-regular-400.eot',
    '/static/fridge/webfonts/fa-regular-400.svg',
    '/static/fridge/webfonts/fa-regular-400.ttf',
    '/static/fridge/webfonts/fa-regular-400.woff',
    '/static/fridge/webfonts/fa-regular-400.woff2',
    '/static/fridge/webfonts/fa-solid-900.eot',
    '/static/fridge/webfonts/fa-solid-900.svg',
    '/static/fridge/webfonts/fa-solid-900.ttf',
    '/static/fridge/webfonts/fa-solid-900.woff',
    '/static/fridge/webfonts/fa-solid-900.woff2',
    //js
    '/static/fridge/js/jquery-3.5.1.min.js',
    '/static/fridge/js/script.js',
    '/static/fridge/js/app.js',
    //logos
    '/static/fridge/logos/icon-128x128.png',
    '/static/fridge/logos/icon-144x144.png',
    '/static/fridge/logos/icon-152x152.png',
    '/static/fridge/logos/icon-192x192.png',
    '/static/fridge/logos/icon-256x256.png',
    '/static/fridge/logos/icon-512x512.png',
    //images
    '/media/default.JPG',
    '/media/offline.PNG',
    //cdn
    // 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    // 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap',
    // 'https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap',
    // 'https://unpkg.com/vuelayers/lib/style.css',

    // 'https://unpkg.com/vue/dist/vue.min.js',
    // 'https://kit.fontawesome.com/8072de43d0.js',
    // 'https://unpkg.com/axios/dist/axios.min.js',
    // 'https://unpkg.com/idb@5.0.4/build/cjs/index.js',
    // 'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v5.3.0/build/ol.js',
    // 'https://unpkg.com/vuelayers/lib/index.umd.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
];


// Cache on install
self.addEventListener('install', event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('[ServiceWorker] Pre-caching offline page');
                return cache.addAll(filesToCache);
            })
    );
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
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
                console.log("fetch event");
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});
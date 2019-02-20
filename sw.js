var PRECACHE = 'precache-v4';
var RUNTIME = 'runtime';

// list the files you want cached by the service worker
PRECACHE_URLS = [
    'index.html',
    'portfolio.html',
    'preguntas.html',
    './',
    'index.html?utm_source=homescreen',
    'css/main.min.css',
    'css/hamburgers.spin.min.css',
    'js/index-post-jq.js',
    'js/portfolio-post-jq.js',
    'js/preguntas-post-jq.js',
    'js/js-index-loader.js',
    'js/js-portfolio-loader.js',
    'js/js-preguntas-loader.js',
    'js/main-min.js',
    'fotos/no_image.jpg',
    'fotos/Entrepiso_1.jpg',
    'fotos/Entrepiso_2.jpg',
    'fotos/Entrepiso_3.jpg',
    'fotos/Entrepiso_4.jpg',
    'fotos/Entrepiso_5.jpg',
    'fotos/Entrepiso_6.jpg',
    'fotos/Entrepiso_7.jpg',
    'fotos/Entrepiso_8.jpg',
    'fotos/Entrepiso_principal2.webp',
    'fotos/Entrepiso_principal2.jpg'

];

// the rest below handles the installing and caching
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS)).then(self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        var responseToCache = response.clone();

                        caches.open(RUNTIME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

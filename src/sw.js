var CACHE_NAME = 'pwgen-cache-v1';
var urlsToCache = [
     './',
     'sw.js?',
     'manifest.json',
     'favicon.ico',
     'assets/icons/icon_72x72.png',
     'assets/icons/icon_96x96.png',
     'assets/icons/icon_128x128.png',
     'assets/icons/icon_144x144.png',
     'assets/icons/icon_152x152.png',
     'assets/icons/icon_192x192.png',
     'assets/icons/icon_384x384.png',
     'assets/icons/icon_512x512.png',
     'https://fonts.googleapis.com/css?family=Special+Elite'
];
console.log('loading sw');

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('installing sw');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                var x = cache.addAll(urlsToCache);
                console.log('cache added');
                return x;
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
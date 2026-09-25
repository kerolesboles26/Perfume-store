const CACHE_NAME = 'perfume-store-v4';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/products.html',
  '/product-details.html',
  '/cart.html',
  '/checkout.html',
  '/about.html',
  '/contact.html',
  '/order-history.html',
  '/order-success.html',
  '/wishlist.html',
  '/profile.html',
  '/404.html',
  '/style.css',
  '/app.js',
  '/firebase-auth.js',
  '/manifest.json',
  '/images/perfume1.jpg',
  '/images/perfume2.jpg',
  '/images/perfume3.jpg',
  '/images/perfume4.jpg',
  '/images/perfume5.jpg',
  '/images/perfume6.jpg',
  '/images/perfume7.jpg',
  '/images/perfume8.jpg',
  '/images/perfume9.jpg',
  '/images/perfume10.jpg',
  '/images/perfume11.jpg',
  '/images/perfume12.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Cache prefetch warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Ignore firebase/google auth requests to prevent caching sensitive data
  const url = event.request.url;
  if (url.includes('identitytoolkit') || url.includes('firestore') || url.includes('googleapis')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch background update
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/404.html');
        }
      });
    })
  );
});

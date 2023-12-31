// Created & Designed by Prasad Madhuranga @2023

// Service worker for https://prasad-kmd.vercel.app

// Cache name
const cacheName = 'pm-personal-web-v1';

// Files to cache
const filesToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/styles.css',
  '/manifest.json',
  '/images/icon.png',
];

// Install service worker
self.addEventListener('install', (event) => {
  console.log('Service worker installing...');

  // Cache files
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Activate service worker
self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');

  // Delete old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercept fetch requests
self.addEventListener('fetch', (event) => {
  console.log('Service worker fetching...', event.request.url);

  // Check if request is for a cached file
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If file is in cache, return it
      if (response) {
        console.log('Serving file from cache...', event.request.url);
        return response;
      }

      // Otherwise, fetch file from network
      return fetch(event.request).then((response) => {
        // Cache the fetched file
        caches.open(cacheName).then((cache) => {
          cache.put(event.request, response);
        });

        // Return the fetched file
        return response;
      });
    })
  );
});
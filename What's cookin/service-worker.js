// service-worker.js

// Define a versioned cache name
const CACHE_NAME = 'meal-finder-cache-v1';

// List the core files (app shell) to cache
const urlsToCache = [
  '/', // The root path (usually serves index.html)
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'icons/icon-192x192.png', // Cache key icons used by manifest/HTML
  'icons/icon-512x512.png',
  'favicon.ico'
  // Add other essential assets here if needed (e.g., specific logo file if separate)
  // Note: Google Fonts are loaded from Google's servers and usually not cached here.
];

// --- Installation Event ---
// Cache the application shell files
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete, caching finished.');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('[Service Worker] Installation failed:', error);
      })
  );
});

// --- Activation Event ---
// Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // If the cache name is different from the current version, delete it
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activation complete, old caches cleaned.');
      return self.clients.claim(); // Take control of uncontrolled clients
    })
  );
});

// --- Fetch Event ---
// Serve cached content when offline, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  // console.log('[Service Worker] Fetching:', event.request.url); // Uncomment for debugging fetch requests

  // Use a Cache falling back to Network strategy
  event.respondWith(
    caches.match(event.request) // Check the cache first
      .then((response) => {
        // If found in cache, return it
        if (response) {
          // console.log('[Service Worker] Serving from cache:', event.request.url); // Debug log
          return response;
        }
        // If not in cache, fetch from the network
        // console.log('[Service Worker] Fetching from network:', event.request.url); // Debug log
        return fetch(event.request);
      })
      .catch((error) => {
         // Handle fetch errors, e.g., offline scenario for uncached requests
         console.error('[Service Worker] Fetch failed:', error);
         // Optionally return a fallback offline page/resource here if needed
         // For example: return caches.match('/offline.html');
      })
  );
});
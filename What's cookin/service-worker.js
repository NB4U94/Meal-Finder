// Service Worker for Meal Finder PWA

const CACHE_NAME = 'meal-finder-cache-v1';
// List of essential files to cache for offline use
const urlsToCache = [
  '/',                  // Alias for index.html
  '/index.html',        // Your main HTML file 
  '/styles.css',        // Your CSS file 
  '/script.js',         // Your main JS file 
  // Add paths to your meal data JS files (relative to root) 
  '/meals_data/meals_asian_inspired.js',
  '/meals_data/meals_aussie_favourite.js',
  '/meals_data/meals_beef.js',
  '/meals_data/meals_british.js',
  '/meals_data/meals_cheese.js',
  '/meals_data/meals_chicken.js',
  '/meals_data/meals_chinese.js',
  '/meals_data/meals_chips.js',
  '/meals_data/meals_deep_fried.js',
  '/meals_data/meals_family_favourite.js',
  '/meals_data/meals_fish.js',
  '/meals_data/meals_italian.js',
  '/meals_data/meals_pasta.js',
  '/meals_data/meals_pub_classic.js',
  '/meals_data/meals_quick_meal.js',
  '/meals_data/meals_schnitzel.js',
  '/meals_data/meals_seafood.js',
  '/meals_data/meals_stir_fry.js',
  '/meals_data/meals_takeaway_classic.js',
  '/meals_data/meals_winter_warmer.js',
  // Add paths to any essential images if you have them (e.g., logo)
  // '/images/logo.png', // Example
  '/images/icon-192x192.png', // Cache the PWA icon
  '/images/icon-512x512.png'  // Cache the PWA icon
];

// Install event: Cache core assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
         console.log('Service Worker: Installation complete');
         return self.skipWaiting(); // Activate worker immediately
      })
      .catch(error => {
        console.error('Service Worker: Caching failed during install:', error);
      })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
       console.log('Service Worker: Activation complete');
       return self.clients.claim(); // Take control immediately
    })
  );
});

// Fetch event: Serve cached content when offline, otherwise fetch from network
self.addEventListener('fetch', event => {
  // console.log('Service Worker: Fetching', event.request.url);
  // Use a cache-first strategy for cached assets
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          // console.log('Service Worker: Serving from cache:', event.request.url);
          return response;
        }
        // Not in cache - fetch from network
        // console.log('Service Worker: Fetching from network:', event.request.url);
        return fetch(event.request);
      })
      .catch(error => {
          console.error('Service Worker: Fetch error:', error);
          // Optional: Return a fallback offline page here if needed
      })
  );
});

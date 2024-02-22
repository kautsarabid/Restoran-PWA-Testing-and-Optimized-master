import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/maskable_restaurant.png',
  './icons/maskable_restaurant_x48.png',
  './icons/maskable_restaurant_x72.png',
  './icons/maskable_restaurant_x96.png',
  './icons/maskable_restaurant_x128.png',
  './icons/maskable_restaurant_x192.png',
  './icons/maskable_restaurant_x384.png',
  './icons/maskable_restaurant_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

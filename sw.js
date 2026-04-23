// This is the Service Worker
// It runs in the background and makes the app work offline
// Think of it as a tiny helper that caches your app files

var CACHE_NAME = "locatemenow-v1";
var FILES_TO_CACHE = [
  "/Locate-me-now/",
  "/Locate-me-now/index.html"
];

// When the service worker installs, save the files
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// When the app requests a file, try cache first
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
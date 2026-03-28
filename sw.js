self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "script.js",
        "styles.css",
        "icon.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((response) => {
        return caches.open("my-cache").then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
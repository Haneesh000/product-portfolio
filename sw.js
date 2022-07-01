self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./favicon.ico", "./favicon.png", "./index.js", "./screenshot.png"]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

self.addEventListener("install", (event) => {
    console.log("Service Worker installing.");
    event.waitUntil(
        caches.open("pwa-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/manifest.json",
                "/logo.png",
            ]);
        })
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return; // Bỏ qua request không phải GET

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type !== "basic") {
                        return response;
                    }

                    // Sao chép response vào cache
                    let responseToCache = response.clone();
                    caches.open("pwa-cache").then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                });
        })
    );
});
;

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.routing.registerRoute(

    /\.(?:html|css|js|json)$/,
    console.log("cached!"),
    new workbox.strategies.StaleWhileRevalidate({
        "cacheName": "assets"
    })
);

workbox.routing.registerRoute(

    /\.(?:png|jpg|gif)$/,
    console.log("cached!"),
    new workbox.strategies.CacheFirst({
        "cacheName": "images"
    })
);
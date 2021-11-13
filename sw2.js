  self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        'b.jpeg',
        'a.jpeg',
        'index.html',
        'index.css'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });


//   self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.open('mysite-dynamic').then(function(cache) {
//         return cache.match(event.request).then(function (response) {
//           return response || fetch(event.request).then(function(response) {
//             cache.put(event.request, response.clone());
//             return response;
//           });
//         });
//       })
//     );
//   });
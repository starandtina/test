'use strict';

// Licensed under a CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
// http://creativecommons.org/publicdomain/zero/1.0/

(function () {
  // Update 'version' if you need to refresh the cache
  var version = 'v2:';
  var staticCacheName = version + 'static--starandtina.github.io/test/web/api';

  var rainbows = 'https://i.imgur.com/EgwCMYB.jpg';
  var offlineFundamentals = [
    './boilerplate.html',
    './CSS.supports.html',
    './fwe_filmstrip.png',
    './getUserMedia.html',
    './matches.html',
    './matchMedia.html',
    './notification.html',
    './pageVisibility.html',
    './resourceHints.html',
    './userTiming.html',
    './serviceWorker.html',
    './toggleStyles.html',
    './offline.html',
    rainbows
  ];
  // Service Worker Life Circle
  // http://slightlyoff.github.io/ServiceWorker/spec/service_worker/#service-worker-state-enum

  self.addEventListener('install', installer);
  self.addEventListener('activate', activator);
  self.addEventListener('fetch', fetcher);

  self.addEventListener('message', function (event) {
    if (event.data.command === 'limitCaches') {
      limitCache(staticCacheName, 10);
    }
  });

  function installer(event) {
    event.waitUntil(caches.open(staticCacheName)
      .then(function (cache) {
        // These items won't block the installation of the Service Worker
        cache.addAll([
          'https://google.github.io/traceur-compiler/bin/traceur.js',
          './sw/test1.html',
          './sw/test2.html'
        ]);
        // These items must be cached for the Service Worker to complete installation
        return cache.addAll(offlineFundamentals);
      }));
  }

  function activator(event) {
    event.waitUntil(
      caches.keys()
      .then(function (keys) {
        // Remove caches whose name is no longer valid
        return Promise.all(keys
          .filter(function (key) {
            return key.indexOf(version) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
        );
      })
    );
  }

  function fetcher(event) {
    var request = event.request;
    var url = new URL(request.url);

    // Only deal with requests to my own server
    if (url.origin !== location.origin) {
      return;
    }

    // Always fetch non-GET requests from the network
    if (request.method !== 'GET') {
      event.respondWith(
        fetch(request)
        .catch(function () {
          return caches.match('./offline.html');
        })
      );
      return;
    }

    // 2. Regarding HTML requests, 
    //   2.1 Try fetching the page from the network first.
    //   2.2 If that doesn’t work, try looking for the page in the cache.
    //   2.3 If all else fails, show the offline page. 
    if (request.headers.get('Accept').indexOf('text/html') !== -1) {
      event.respondWith(
        fetch(request)
        .then(function (response) {
          // Stash a copy of this page in the cache
          var copy = response.clone();
          caches.open(staticCacheName)
            .then(function (cache) {
              cache.put(request, copy);
            });
          return response;
        })
        .catch(function () {
          return caches.match(request)
            .then(function (response) {
              return response || caches.match('./offline.html');
            })
        })
      );
      return;
    }

    // 3. Regarding non-HTML requests
    //    3.1 Look for the file in the cache first
    //    3.2 If that doesn’t work, make a network request
    //    3.3 If all else fails, and it’s a request for an image, show a placeholder
    event.respondWith(
      // Try the cache
      caches.match(request).then(function (response) {
        // Fall back to network
        return response || fetch(request);
      }).catch(function () {
        // If the request is for an image, show an offline placeholder
        if (request.headers.get('Accept').indexOf('image') !== -1) {
          // return caches.match('./offline.html');
          return new Response('<svg width="400" height="300" role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', {
            headers: {
              'Content-Type': 'image/svg+xml'
            }
          });
        }
      })
    );
  }

  // Limit the number of items in a specified cache.
  var limitCache = function (cacheName, maxItems) {
    caches.open(cacheName)
      .then(function (cache) {
        cache.keys()
          .then(function (keys) {
            if (keys.length > maxItems) {
              cache.delete(keys[0])
                .then(limitCache(cacheName, maxItems));
            }
          });
      });
  };

})();

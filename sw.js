importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([]);
// I learned about the Workbox toolset from this fellow student: https://github.com/jsoetens/udacity-nanodegree-mws/tree/d0806812cb40255e2ef3cd418f243db8b947379c/mws-project-1, then implemented it myself.
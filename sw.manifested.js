importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "css/styles.css",
    "revision": "5ff7edf46dfd297f10d32f6a1ffae8a3"
  },
  {
    "url": "data/restaurants.json",
    "revision": "78105c33fbdc0994a3d4e7b76982bdff"
  },
  {
    "url": "img/1.jpg",
    "revision": "cc074688becddd2725114187fba9471c"
  },
  {
    "url": "img/10.jpg",
    "revision": "2bd68efbe70c926de6609946e359faa2"
  },
  {
    "url": "img/2.jpg",
    "revision": "759b34e9a95647fbea0933207f8fc401"
  },
  {
    "url": "img/3.jpg",
    "revision": "81ee36a32bcfeea00db09f9e08d56cd8"
  },
  {
    "url": "img/4.jpg",
    "revision": "23f21d5c53cbd8b0fb2a37af79d0d37f"
  },
  {
    "url": "img/5.jpg",
    "revision": "0a166f0f4e10c36882f97327b3835aec"
  },
  {
    "url": "img/6.jpg",
    "revision": "eaf1fec4ee66e121cadc608435fec72f"
  },
  {
    "url": "img/7.jpg",
    "revision": "bd0ac197c58cf9853dc49b6d1d7581cd"
  },
  {
    "url": "img/8.jpg",
    "revision": "6e0e6fb335ba49a4a732591f79000bb4"
  },
  {
    "url": "img/9.jpg",
    "revision": "ba4260dee2806745957f4ac41a20fa72"
  },
  {
    "url": "index.html",
    "revision": "48852f3780cbd3867e8a83e62cec5dc4"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "9bafd82360c2033e74af39967fab6b67"
  },
  {
    "url": "js/main.js",
    "revision": "4cfb99791f1c7bc68854957a9b8e886c"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "bb70c715afc94d4973d3b75000ac3961"
  },
  {
    "url": "restaurant.html",
    "revision": "b40dbf3748ed44bab9630013cda0ed78"
  },
  {
    "url": "sw.js",
    "revision": "d858ef308bb597a57a931784dc4f1cfc"
  },
  {
    "url": "workbox-config.js",
    "revision": "7f559cc949f2166e3fcc055e6101a6f3"
  }
]);

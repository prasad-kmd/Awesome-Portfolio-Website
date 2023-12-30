// Created & Designed by Prasad Madhuranga @2023

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pm-personal-web";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "ToDo-replace-this-name.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});


  import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
  precacheAndRoute([{"revision":"ad2bc37356cfa5371b20b20f52b4ac8c","url":"assets/css/ajlkn_main.css"},{"revision":"a5464a004f078737d3fe4296aab7adc9","url":"assets/css/custom.css"},{"revision":"d47a86e66d8f26ca2522c7203b8cde30","url":"assets/css/en.style.css"},{"revision":"c58974746884be2a19d05096eed84d9d","url":"assets/css/font.css"},{"revision":"8eecf75ffba31142952b4321092579db","url":"assets/css/index.css"},{"revision":"3a9d6ba3b71deeaac157b56c4a4bb62a","url":"assets/css/index.fontawesome-all.min.css"},{"revision":"5ff4897a8f245d597df668f9b5f50268","url":"assets/css/si.style.css"},{"revision":"d66b3957b6dc7529be158a174e982447","url":"assets/fonts/demo.html"},{"revision":"d6befcca23e08942511e94ca2bd67b09","url":"assets/fonts/stylesheet.css"},{"revision":"5cd404d584fd6faeef1e2feb4747d473","url":"assets/fonts/stylesheetsi.css"},{"revision":"6b005f9334601bbabc9907d22ceab998","url":"assets/js/ajlkn_main.js"},{"revision":"407b3c76d8928a8e18c29874fc4958e1","url":"assets/js/home.js"},{"revision":"df5c68b6dd4a11112956c8ff327834ec","url":"assets/js/main.js"},{"revision":"dc9002648e16a2306d1b37fc9240a2d1","url":"assets/js/service.worker.js"},{"revision":"13b33245bf1d0964bca0e16f1f671182","url":"assets/vendor/bootstrap-icons/bootstrap-icons.css"},{"revision":"bc4789bea7c255e5c07c595d824fc183","url":"assets/vendor/bootstrap-icons/bootstrap-icons.min.css"},{"revision":"5bd0231cfd71c50c8c78bb4323da253b","url":"assets/vendor/bootstrap-icons/index.html"},{"revision":"cf899c195cc89ca44260188a3fed4812","url":"assets/vendor/bootstrap/css/bootstrap-grid.css"},{"revision":"e7454e3d83e72389589dfe366a238dea","url":"assets/vendor/bootstrap/css/bootstrap-grid.min.css"},{"revision":"0e054821afd8cb106be0a27e31c585d2","url":"assets/vendor/bootstrap/css/bootstrap-grid.rtl.css"},{"revision":"b1d4aae859210b344e9f8d788d09d86b","url":"assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css"},{"revision":"6f135d88e922000f7d6d219715e701c5","url":"assets/vendor/bootstrap/css/bootstrap-reboot.css"},{"revision":"0c7f9cfae220c82739af646b99c9adc5","url":"assets/vendor/bootstrap/css/bootstrap-reboot.min.css"},{"revision":"dcae73d819a339ba3d6e648f38ed9e39","url":"assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css"},{"revision":"48d2515c394ecf3b10b81a64a4acfd57","url":"assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css"},{"revision":"ce630c48b6c76b26f5a4938acc87df5e","url":"assets/vendor/bootstrap/css/bootstrap-utilities.css"},{"revision":"a35a29ce7d65f08821b7a515edc5d5aa","url":"assets/vendor/bootstrap/css/bootstrap-utilities.min.css"},{"revision":"7c8346b318321e3101bd89205c48cd8c","url":"assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css"},{"revision":"048af6e1c02b736476794b35fcf2ecde","url":"assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css"},{"revision":"f6e962ab807e8058302d1272f059fe45","url":"assets/vendor/bootstrap/css/bootstrap.css"},{"revision":"8880ffcc419e92bf8d438a199b8a82d4","url":"assets/vendor/bootstrap/css/bootstrap.min.css"},{"revision":"d93015b59c22f73eb235f5701f38a844","url":"assets/vendor/bootstrap/css/bootstrap.rtl.css"},{"revision":"6d7fa20ffe03df35f3503962b9eb0648","url":"assets/vendor/bootstrap/css/bootstrap.rtl.min.css"},{"revision":"5897b2158dd1236d6ece1099991dcf44","url":"assets/vendor/bootstrap/js/bootstrap.bundle.js"},{"revision":"8831aa095cdec88f66c2e46c339cf352","url":"assets/vendor/bootstrap/js/bootstrap.bundle.min.js"},{"revision":"356b5745959fe3ee31b2ad95453e9ef8","url":"assets/vendor/bootstrap/js/bootstrap.esm.js"},{"revision":"9bce7dc2435aa027f8803a576b9ee702","url":"assets/vendor/bootstrap/js/bootstrap.esm.min.js"},{"revision":"79b0236a5c469be970cf864236848729","url":"assets/vendor/bootstrap/js/bootstrap.js"},{"revision":"b5730588db13e71c65bdb1d234089260","url":"assets/vendor/bootstrap/js/bootstrap.min.js"},{"revision":"2c0319e25c5cb233f4c6cf5e69d83fa3","url":"assets/vendor/boxicons/css/animations.css"},{"revision":"f45e940704d788c4c2214d2751ed8141","url":"assets/vendor/boxicons/css/boxicons.css"},{"revision":"c3401cb6ae66ab1739fcb120359e35fe","url":"assets/vendor/boxicons/css/boxicons.min.css"},{"revision":"d5afab8d6fa009e5bf06744ef93003f1","url":"assets/vendor/boxicons/css/transformations.css"},{"revision":"7e2604695f55c59e5219b538a157d1b4","url":"assets/vendor/glightbox/css/glightbox.css"},{"revision":"f69035b3cab21535649707f30303196f","url":"assets/vendor/glightbox/css/glightbox.min.css"},{"revision":"1638ff0a89b762d4e471acd796f5acce","url":"assets/vendor/glightbox/js/glightbox.js"},{"revision":"3a40d59d5244ad9921c81ca45f3ac8e7","url":"assets/vendor/glightbox/js/glightbox.min.js"},{"revision":"8896e082b3fa1738e2e2f558a7fc1fa4","url":"assets/vendor/isotope-layout/isotope.pkgd.js"},{"revision":"2afcff647ed260006faa71c8e779e8d4","url":"assets/vendor/isotope-layout/isotope.pkgd.min.js"},{"revision":"50d43f946b9312e26d9bea785d92e17e","url":"assets/vendor/purecounter/purecounter.js"},{"revision":"a8aec561d3b9b905472b815cb2b818c2","url":"assets/vendor/remixicon/remixicon.css"},{"revision":"a68de52b21d2bdf69500417e7a7cda6a","url":"assets/vendor/remixicon/remixicon.min.css"},{"revision":"b2b598cf96cd7c1726beb376544630cc","url":"assets/vendor/swiper/swiper-bundle.min.css"},{"revision":"f65b2f51f3a11d39ce07599a8927fcb4","url":"assets/vendor/swiper/swiper-bundle.min.js"},{"revision":"361607313be9181fdeece20ccd7c1440","url":"assets/vendor/typed.js/typed.js"},{"revision":"f5b12d71c12ca01a521112c4bad75eb8","url":"assets/vendor/typed.js/typed.min.js"},{"revision":"8c601d5f892e9a29c3dd204025f9d724","url":"assets/vendor/waypoints/noframework.waypoints.js"},{"revision":"58a6230c03422c651051c98ebe95c956","url":"components/component.css"},{"revision":"67a5df22cc9ab5e256a0bb5941b5c1c0","url":"en.home.html"},{"revision":"0418a2b32b2f0465b03d092a34dad0f5","url":"index.html"},{"revision":"8e05974f2886f4d91fdd5ccb594a74f5","url":"si.home.html"}]);

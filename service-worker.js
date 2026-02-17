self.addEventListener("install", event => {
    self.skipWaiting();
  });
  

  self.addEventListener("fetch", event => {});
const CACHE_NAME = "expense-app-v2"; // change v2 -> v3 every update

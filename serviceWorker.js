self.addEventListener("install", function(event) {
  console.log("[SW] 安裝(Install) Service Worker!", event);
});
self.addEventListener("activate", function(event) {
  console.log("[SW] 觸發(Activate) Service Worker!", event);
  return self.clients.claim();
});
self.addEventListener("fetch", function(event) {
  console.log("[SW] 抓資料(Fetch)!", event);
  // event.respondWith(fetch(event.request));
});
self.addEventListener("push", function(event) {
  console.log("收到推播訊息", event);

  var contentObj = { title: "新訊息", content: "預設訊息，會被伺服器訊息覆蓋" };
  if (event.data) {
    contentObj = JSON.parse(event.data.text());
  }

  var options = {
    body: contentObj.content,
    icon: "images/icon.png",
    lang: "zh-Hant", //BCP 47
    vibrate: [100, 50, 200],
    badge: "images/badge.png",
    tag: "first-notification"
  };
  event.waitUntil(
    self.registration.showNotification(contentObj.title, options)
  );
});

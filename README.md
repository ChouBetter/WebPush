# WebPush

### Knowledge

* Notification（通知）：利用 JavaScript 實作瀏覽器推播通知
https://cythilya.github.io/2017/07/09/notification/

* Service Worker
https://cythilya.github.io/2017/07/16/service-worker/

* Day6- Service Worker終結小恐龍的命運(觀念篇)
https://ithelp.ithome.com.tw/articles/10192352

* Day 10 - 30 天 Progressive Web App 學習筆記 - Service Work 簡介
https://ithelp.ithome.com.tw/articles/10187529

* Day24-Push Notification推播概念篇
https://ithelp.ithome.com.tw/articles/10196486

### Implement - PushCodelab

* 向網絡應用添加推送通知
https://developers.google.com/web/fundamentals/codelabs/push-notifications/?hl=zh-tw

* GoogleChromeLabs/web-push-codelab
https://github.com/GoogleChromeLabs/web-push-codelab

* Push Companion
https://web-push-codelab.glitch.me/

### Implement - Firebase Cloud Messaging

* Firebase Cloud Messaging (FCM) 入門到進階應用(1) --- 開發環境建立
http://white5168.blogspot.com/2017/01/firebase-cloud-messaging-fcm-1.html#.XR1udZMzZKM

* php sample - sender
```
<?php

define('API_SERVER_ACCESS_KEY', '伺服器金鑰');

$token = ''; /* 接收端的token */
$message = ''; /* 內容 */
$title = ''; /* 標題 */

$content = array
    (
    'title' => $title,
    'body' => $message
);

$fields = array
    (
    'to' => $token,
    'notification' => $content
);

$headers = array
    (
    'Authorization: key=' . API_SERVER_ACCESS_KEY,
    'Content-Type: application/json'
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
$result = curl_exec($ch);
curl_close($ch);
echo $result;
```

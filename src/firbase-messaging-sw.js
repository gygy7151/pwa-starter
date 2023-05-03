// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js');
// }

// var deferredPrompt;
// var pushAlarmButton = document.querySelector('.push-alarm');
// pushAlarmButton.addEventListener('click', (e) => {
//   console.log(e);
//   Notification.requestPermission().then((perm) => {
//     if (perm === 'granted') {
//       new Notification('Happy Tomato!');
//     }
//   });
// });

// async function subscribe() {
//   let sw = await navigator.serviceWorker.ready;
//   let push = await sw.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey:
//       'BD6Y5yIe1LF9VdWqkbvwZny7Y-eScTmHEokauEKektdv6FAzEkUmx8iVOlERTcF_yIWX5y7FZwEBeg-U3o74NPc',
//   });
//   console.log(JSON.stringify(push));
// }

// if (!window.Promise) {
//   window.Promise = Promise;
// }

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw.js')
//     .then(async function subscribe(sw_obj) {
//       console.log(sw_obj);
//       let sw = await navigator.serviceWorker.ready;
//       let push = await sw.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey:
//           'BD6Y5yIe1LF9VdWqkbvwZny7Y-eScTmHEokauEKektdv6FAzEkUmx8iVOlERTcF_yIWX5y7FZwEBeg-U3o74NPc',
//       });
//       console.log(JSON.stringify(push));
//     })
//     .catch(function (err) {
//       console.log(err);
//     });

//   if (!window.Promise) {
//     window.Promise = Promise;
//   }
// }

// function requestPermission() {
//   console.log('권한 요청 중...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('알림 권한이 허용됨');

//       // FCM 메세지 처리
//     } else {
//       console.log('알림 권한 허용 안됨');
//     }
//   });
// }

// requestPermission();

// // Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(firebaseConfig);

// const token = getToken(getToken(messaging, {
//     vapidKey: import.meta.env.APP_VAPID_KEY,
// }))
// console.log(token);

// async function requestPermission() {
//     console.log("권한 요청 중...");

//     Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//             console.log('Notification permission granted.');
//           }
//         })

//     if (token) console.log("token: ", token);
//     else console.log("Can not get Token");

//     onMessage(messaging, (payload) => {
//         console.log("메시지가 도착했습니다.", payload);
//         // ...
//     });
// }

// requestPermission();


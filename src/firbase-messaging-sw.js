import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";



const firebaseConfig = {
    apiKey: "AIzaSyCptdd95BaSsnXJMvTCEsVVyDZblxDbJ6E",
    authDomain: "pwa-starter-6548d.firebaseapp.com",
    projectId: "pwa-starter-6548d",
    storageBucket: "pwa-starter-6548d.appspot.com",
    messagingSenderId: "157151329839",
    appId: "1:157151329839:web:37069a789b30043e78d0da",
    measurementId: "G-4969K02984"
};
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging();

const token = getToken(getToken(messaging, {
    vapidKey: import.meta.env.APP_VAPID_KEY,
}))

async function requestPermission() {
    console.log("권한 요청 중...");

    function requestPermission() {
        console.log('Requesting permission...');
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
          }
        })
    }

    if (token) console.log("token: ", token);
    else console.log("Can not get Token");

    onMessage(messaging, (payload) => {
        console.log("메시지가 도착했습니다.", payload);
        // ...
    });
}

requestPermission();
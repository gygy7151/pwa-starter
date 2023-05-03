function main() {
  const permission = document.getElementById('push-permission');

  if (
    !permission &&
    !('Notification' in window) &&
    !('serviceWorker' in navigator)
    //  || Notification.permission !== 'default'
  ) {
    return;
  }

  const button = document.createElement('button');
  button.innerText = 'Recevoir les notifications';
  permission.appendChild(button);
  button.addEventListener('click', askPermission);
}

async function askPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    registerServiceWorker();
  }
}

async function registerServiceWorker() {
  const registration = await navigator.serviceWorker.register('/sw.js');
  let subscription = await registration.pushManager.getSubscription();

  if (!subscription) {
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        'BD6Y5yIe1LF9VdWqkbvwZny7Y-eScTmHEokauEKektdv6FAzEkUmx8iVOlERTcF_yIWX5y7FZwEBeg-U3o74NPc',
    });

    console.log(subscription);
  }
  console.log(subscription);

  //   await saveSubscription(subscription);
}

// async function saveSubscription(subscription) {
//   const { key } = await fetch('/push/subscribe', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify(subscription),
//   });

//   return key;
// }

main();


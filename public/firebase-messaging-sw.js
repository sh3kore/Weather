// Load Firebase libraries
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

// Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyBZNcf7LKMHB1w93kWKWzQ_6CGxYkR7k0M",
    authDomain: "weather-3efea.firebaseapp.com",
    projectId: "weather-3efea",
    storageBucket: "weather-3efea.firebasestorage.app",
    messagingSenderId: "507367154193",
    appId: "1:507367154193:web:5a1eba14517e9d1692c7b0",
    measurementId: "G-61RR4D4JPH",
});

// Initialize Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message:', payload);

    // Display notification
    const notificationTitle = payload.notification?.title || 'Default Title';
    const notificationOptions = {
        body: payload.notification?.body || 'Default body content',
        icon: payload.notification?.image || '/icon.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

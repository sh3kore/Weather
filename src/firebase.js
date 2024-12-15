import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBZNcf7LKMHB1w93kWKWzQ_6CGxYkR7k0M",
    authDomain: "weather-3efea.firebaseapp.com",
    projectId: "weather-3efea",
    storageBucket: "weather-3efea.firebasestorage.app",
    messagingSenderId: "507367154193",
    appId: "1:507367154193:web:5a1eba14517e9d1692c7b0",
    measurementId: "G-61RR4D4JPH"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: "BDf738GkODw07AXKhU-zv0CfNHuf3Qh_xwkij4eFqDmjwEeAHBvlX3HlYf4gVPqKWlc01-kI_moH9_wDegcj-ZY"
        })
        console.log(token)
    }

};
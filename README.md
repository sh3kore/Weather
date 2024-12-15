Weather App with PWA Features

This is a simple React web application that fetches weather data and supports Progressive Web Apps (PWA).

PWA Features:

* Fetch current weather data using OpenWeather API.
* Store the latest weather data locally using localStorage for offline access.
* Push notifications enabled via Firebase Cloud Messaging (FCM).
* Offline fallback using a Service Worker.


Technologies Used

* React
* Firebase (FCM)
* OpenWeather API
* Service Workers

How to Run the Project

Clone the repository:
git clone https://github.com/sh3kore/Weather.git
cd Weaher

Install dependencies:
npm install

Run the project:
npm start

Open the browser at http://localhost:3000.


Offline Access
The app caches index.html and offline.html using a service worker to display offline content.
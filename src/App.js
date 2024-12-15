import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import { generateToken, messaging } from './firebase';
import { onMessage } from "firebase/messaging";


const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const storedWeather = localStorage.getItem("Weather");
        if (storedWeather) {
            setWeather(JSON.parse(storedWeather));
        }
    }, []);

    const search = async (e) => {
        if (e.key === 'Enter') {
            try {
                const data = await fetchWeather(query);
                localStorage.setItem("Weather", JSON.stringify(data)); // Save to localStorage
                setWeather(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
            setQuery('');
        }
    };
    useEffect(() => {
        generateToken();
        onMessage(messaging, (payload) => {
            console.log(payload);
        })
    }, []);

    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img
                            className="city-icon"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                        />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;

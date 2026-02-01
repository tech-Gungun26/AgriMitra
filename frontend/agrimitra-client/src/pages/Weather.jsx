import { useState } from "react";
import axios from "axios";
import "../styles/pages.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setError("");
      setWeather(null);

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://localhost:7208/api/Weather",
        {
          params: { city },
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setWeather(res.data);
    } catch {
      setError("City not found or API error");
    }
  };

  return (
    <div className="home-wrapper">
      <div className="signup-card page-card weather-card">
        <div className="home-top">
          <h2>Weather Forecast 🌦️</h2>
          <p className="home-sub">Check current weather by city</p>
        </div>

        <div className="weather-form" style={{ marginBottom: 15 }}>
          <input
            className="form-input"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button className="signup-button" onClick={fetchWeather} style={{ marginLeft: 8 }}>
            Get Weather
          </button>
        </div>

        {error && <p className="signup-error">{error}</p>}

        {weather && (
          <div className="weather-result">
            <h3>{weather.name}</h3>
            <p>🌡 Temperature: {weather.main.temp} °C</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>☁ Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;

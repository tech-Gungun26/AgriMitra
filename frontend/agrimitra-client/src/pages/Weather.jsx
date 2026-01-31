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
    <div className="page-card">
      <h2>Weather Forecast 🌦️</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>☁ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;

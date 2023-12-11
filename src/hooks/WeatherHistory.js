import React, { useState, useEffect } from 'react';
import useGetWeather from "./useGetWeather";

const WeatherHistory = () => {
  const [weatherHistory, setWeatherHistory] = useState([]);
  const { getWeather } = useGetWeather();

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    setWeatherHistory(storedHistory);
  }, []);

  // Handle list item click
  const handleItemClick = (cityName) => {
    // Fetch weather data for the clicked city
    getWeather(cityName);
  };

  // Handle clear history button click
  const handleClearHistory = () => {
    // Clear weather history from local storage
    localStorage.removeItem('weatherHistory');

    // Refresh the displayed list
    setWeatherHistory([]);
  };

  return (
    <div>
      <h2>Weather History</h2>
      <ul>
        {weatherHistory.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item.city)}>
            {item.city}
          </li>
        ))}
      </ul>
      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};

export default WeatherHistory;

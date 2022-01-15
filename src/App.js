import React, { useState } from 'react';
import logo from './logo.svg';
import { fetchWeather } from './api/fetchWeather'
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [weather, setWeather] = useState({});

  const doSearch = async (e) => {
    if (e.key === 'Enter') {
      // console.log(process.env.REACT_APP_WEATHER_API_KEY);
      const data = await fetchWeather(searchTerm);
      
      setWeather(data);
      setSearchTerm('');
    }
  }
  
  return (
    <div className="main-container">
      
      <input type="text"
        className='search'
        placeholder='search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={doSearch}
      />

      {/* if weather.main exists then return () 
      if it does not exist then display nothing */}
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {(Math.round(weather.main.temp) - 273)}
            <sup> &deg; C </sup>
          </div>

          <div className="info">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="city-icon" />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default App;

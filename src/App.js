import React, { useState } from 'react';

import Hero from './Hero'

const api = {
  key: "e11a71a61510280f06bc08016a46b9ef",
  base: "https://api.openweathermap.org/data/2.5/",
  lat: "6.197803",
  long: "-75.719862"
}



function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  function fetchData() {
    fetch(`${api.base}weather?lat=${api.lat}&long=${api.long}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)
      })
      .catch(error => {
        return error ('error')
      })
  }



  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        {(typeof weather.main != "undefined") ? (
        <div className="location-container">
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className={(weather.weather[0].main === "Rain") ? "temp-warm" : "temp"}>
              {Math.round(weather.main.temp)}°c
            <div className="humidity">
              humedad: {weather.main.humidity}%
            </div>
            <img className="icon" alt="img" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        </div>
        ) : (<Hero />)}
      </main>
    </div>
  );
}

export default App;
import React from 'react';

import Item from '../Item/index'

import './style.css'

const TodayCard = ({ data }) => {

  const items = [
    {
      title: "Temp min",
      description: `${Math.round(data?.main?.temp_min)}°C`,
    },
    {
      title: "Temp max",
      description: `${Math.round(data?.main?.temp_max)}°C`,
    },
    {
      title: "Clouds",
      description: `${data?.clouds?.all}%`,
    },
    {
      title: "Wind speed",
      description: `${data?.wind?.speed}km/h`,
    },
    {
      title: "Humidity",
      description: `${data?.main?.humidity}%`,
    },
    {
      title: "Feels like",
      description: `${Math.round(data?.main?.feels_like)}°C`,
    },
    {
      title: "Rain",
      description: `${data.rain ? data.rain["3h"] : null}%`,
    },
  ];


  return (
    <div className="Card-container">
      <div className="Header">
        <h1 className="Header-day">TODAY</h1>
        <p className="Header-date">{data?.dt_txt}</p>
      </div>
      <hr className="Header-hr" />

      <div className="Card-main">
        <div className="Card-text">
          <h1>{Math.round(data?.main?.temp)}°C</h1>
          <span>{data.weather ? data.weather[0].description : null}</span>
          <span> { data?.main?.humidity >= 70 ? "Probabilidad de lluvia alta" : "Probabilidad de lluvia baja" } </span>
        </div>
        <figure>
          <img src={`http://openweathermap.org/img/wn/${data.weather ? data.weather[0].icon: null}@2x.png`} alt="icon-weather"/>
        </figure>
      </div>

      <div className="Card-main-two">
        <div className="Card-sidebar">
          <ul>
            {
              items.map(item => (<Item data={data} key={item.id} item={item} />))
            }
          </ul>
        </div>
        <div className={data?.main?.humidity >= 70 ? "Card-ilustration" : "No-rain" }></div>
      </div>

    </div>
  );
};

export default TodayCard;
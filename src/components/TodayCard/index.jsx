import React from 'react';

import Item from '../Item/index'

import './style.css'

const TodayCard = ({ data }) => {

  const items = [
    {
      title: "Temp min",
      description: `${Math.round(data?.day?.mintemp_c)}°C`,
    },
    {
      title: "Temp max",
      description: `${Math.round(data?.day?.maxtemp_c)}°C`,
    },
    {
      title: "Precipitación",
      description: `${data?.day?.totalprecip_mm}%`,
    },
    {
      title: "Humedad",
      description: `${data?.day?.avghumidity}%`,
    },
    {
      title: "Viento",
      description: `${data?.day?.maxwind_kph}km/h`,
    },
    {
      title: "Lluvia",
      description: `${data?.day?.daily_chance_of_rain}%`,
    },
  ];


  return (
    <div className="Card-container">
      <div className="Header">
        <h1 className="Header-day">HOY</h1>
        <p className="Header-date">{data?.date}</p>
      </div>
      <hr className="Header-hr" />

      <div className="Card-main">
        <div className="Card-text">
          <h1>{Math.round(data?.day?.avgtemp_c)}°C</h1>
          <span>{data?.day?.condition?.text}</span>
          <span> { data?.day?.daily_chance_of_rain >= 70 ? "Probabilidad de lluvia alta" : "Probabilidad de lluvia baja" } </span>
        </div>
        <figure>
          <img src={`http://cdn.weatherapi.com/weather/64x64/day/308.png`} alt="icon-weather"/>
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
        <div className={data?.day?.daily_chance_of_rain >= 70 ? "Card-ilustration" : "No-rain" }></div>
      </div>

    </div>
  );
};

export default TodayCard;
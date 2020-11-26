import React from 'react';

import './style.css'

const TodayCard = () => {

  // const mains = ["Temp min", "Temp max", "Clouds", "Wind speed", "Humidity", "Feels like", "Rain"]
  // const listItems = mains.map((main) =>{
  //   <li>
  //     <div>
  //       <p>Temp min</p>
  //       <p>21ªC</p>
  //     </div>
  //   </li>
  // })

  return (
    <div className="Card-container">

      <div className="Header">
        <h1 className="Header-day">TODAY</h1>
        <p className="Header-date">2020-11-24 21:00:00</p>
      </div>
      <hr className="Header-hr" />

      <div className="Card-main">
        <div className="Card-text">
          <h1>25ªC</h1>
          <span>Lluvia moderada</span>
          <span>Humidity: 66%</span>
        </div>
        <figure>
          <img src="" alt="icon-weather"/>
        </figure>
      </div>

      <div className="Card-main-two">
        <div className="Card-sidebar">
          <ul>
            <li>
              <div>
                <p>Temp min</p>
                <p>21ªC</p>
              </div>
            </li>
            <li>
              <div>
                <p>Temp max</p>
                <p>26ªC</p>
              </div>
            </li>
            <li>
              <div>
                <p>Clouds</p>
                <p>64%</p>
              </div>
            </li>
            <li>
              <div>
                <p>Wind speed</p>
                <p>0.76km/h</p>
              </div>
            </li>
            <li>
              <div>
                <p>Humidity</p>
                <p>66%</p>
              </div>
            </li>
            <li>
              <div>
                <p>Feels like</p>
                <p>23ªC</p>
              </div>
            </li>
            <li>
              <div>
                <p>Rain</p>
                <p>4.26%</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="Card-ilustration">
          <img src="" alt="" className="Ilustration"/>
        </div>
      </div>

    </div>
  );
};

export default TodayCard;
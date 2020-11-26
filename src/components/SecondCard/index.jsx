import React from 'react';

import './style.css'

const SecondCard = () => {
  return (
    <div className="SecondCard-container" >

      <div className="SecondCard-header">
        <h1 className="SecondCard-header-day">TOMORROW</h1>
        <p className="SecondCard-header-date">2020-11-25 21:00:00</p>
      </div>
        <hr className="SecondCard-header-hr" />

      <div className="display-flex">
        <div className="SecondCard-main">
          <div className="SecondCard-text">
            <h1>25ªC</h1>
            <span>Lluvia moderada</span>
          </div>
          <div className="SecondCard-sidebar">
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
              </ul>
        </div>
        </div>
        <div className="Ilustration-contain">
          <div className="SecondCard-ilustration">
            <img src="" alt="" className="Ilustration"/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SecondCard;
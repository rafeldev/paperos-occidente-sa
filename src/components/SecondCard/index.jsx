import React from 'react';
import styled from '@emotion/styled'

import './style.css'

import Item from '../Item/index'


const SecondCard = ({ secondaryHeigh, data }) => {

  const Div = styled.div`
    width: 632px;
    height: 330px;
    left: 967px;
    top: 215px;

    margin-top: ${props => props.secondaryHeigh || "215px" };
    margin-right: 321px;
    margin-left: 0px;
    margin-bottom: 15px;
    padding-bottom: 24px;

    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(26, 22, 32, 0.1);
    border-radius: 8px;
  `;

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
      title: "Humidity",
      description: `${data?.main?.humidity}%`,
    },
  ]



  return (
    <Div secondaryHeigh={secondaryHeigh} className="SecondCard-container" >

      <div className="SecondCard-header">
        <h1 className="SecondCard-header-day">TOMORROW</h1>
        <p className="SecondCard-header-date">{data?.dt_txt}</p>
      </div>
        <hr className="SecondCard-header-hr" />

      <div className="display-flex">
        <div className="SecondCard-main">
          <div className="SecondCard-text">
            <h1>{Math.round(data?.main?.temp)}°C</h1>
            <span>{data?.weather ? data?.weather[0].description : null}</span>
          </div>
          <div className="SecondCard-sidebar">
              <ul>
                {
                  items.map(item => (<Item data={data} key={item.id} item={item} />))
                }
              </ul>
        </div>
        </div>
        <div className={data?.main?.humidity >= 70 ? "Card-ilustration" : "No-rain" }>
        </div>
      </div>
      
    </Div>
  );
};

export default SecondCard;
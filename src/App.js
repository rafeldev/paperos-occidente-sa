import React, { useState, useEffect } from 'react';

import './App.css'

import Navbar  from './components/Navbar/index'
import TodayCard  from './components/TodayCard/index'
import SecondCard  from './components/SecondCard/index'
 
/* Older weather api */
// const api = {
//   key: "e11a71a61510280f06bc08016a46b9ef",
//   base: "http://api.openweathermap.org/data/2.5/",
//   lat: "6.197803",
//   lon: "-75.719862",
//   units: "metric",
//   cnt: 3,
//   lang: "sp"
// }

const api2 = {
  base: "http://api.weatherapi.com/v1/",
  key: "a491a12c2ada41d7b2f43934202611",
  q: "6.197803,-75.719862",
  days: 3,
  lang: "es"
}



function App() {
  // const [query, setQuery] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${api2.base}forecast.json?key=${api2.key}&q=${api2.q}&days=${api2.days}&lang=${api2.lang}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result)
    })
  }, [])

    
  
  return (
    <div>
      <Navbar data={data} />
      <div className="contain">
        <TodayCard data={ data?.forecast?.forecastday ? data?.forecast?.forecastday[0] : "error"  } /> 
        <div className="contain-column">
          <SecondCard otherDay="MAÑANA" data={ data?.forecast?.forecastday ? data?.forecast?.forecastday[1] : "error" } /> 
          <SecondCard secondaryHeigh="15px" otherDay="SIGUIENTE DIA" data={ data?.forecast?.forecastday ? data?.forecast?.forecastday[2] : "error"  } /> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
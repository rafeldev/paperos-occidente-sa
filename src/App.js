import React, { useState, useEffect } from 'react';

import './App.css'

import Navbar  from './components/Navbar/index'
import TodayCard  from './components/TodayCard/index'
import SecondCard  from './components/SecondCard/index'
 
const api = {
  key: "e11a71a61510280f06bc08016a46b9ef",
  base: "http://api.openweathermap.org/data/2.5/",
  lat: "6.197803",
  lon: "-75.719862",
  units: "metric",
  cnt: 3,
  lang: "sp"
}



function App() {
  // const [query, setQuery] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${api.base}forecast?lat=${api.lat}&lon=${api.lon}&units=${api.units}&cnt=${api.cnt}&lang=${api.lang}&appid=${api.key}`)
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
        <TodayCard data={ data.list ? data.list[0] : "error"  } /> 
        <div className="contain-column">
          <SecondCard data={ data?.list ? data?.list[1] : "error"  } /> 
          <SecondCard secondaryHeigh="15px" data={ data?.list ? data?.list[2] : "error"  } /> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
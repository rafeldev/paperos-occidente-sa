import React, { useState } from 'react';

import Navbar  from './components/Navbar/index'
import TodayCard  from './components/TodayCard/index'
import SecondCard  from './components/SecondCard/index'
 
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
    <div>
      <Navbar />
      <TodayCard /> 
      {/* <SecondCard /> */}
      
    </div>
  );
}

export default App;
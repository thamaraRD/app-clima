import React, { useState } from 'react';
import { WeatherForm } from './WeatherForm';

export const WeatherApp = () => {
  const [ weather, setWeather ] = useState(null);

  const loadCity = async ( city = 'london' ) =>{
    console.log(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
   try {
     const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
     const json = await request.json();
     console.log(json)
   } catch (error) {}
  }

  const handleChangeCity = (city) => {
    setWeather(null);
    loadCity(city);
  };

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
    </div>
    )
}

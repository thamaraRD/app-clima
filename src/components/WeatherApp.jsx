import React, { useEffect, useState } from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherMainInfo } from './WeatherMainInfo';



export const WeatherApp = () => {
  const [ weather, setWeather ] = useState(null);

  useEffect(() => {
    loadCity();
  }, []);
  
  const loadCity = async ( city = 'caracas' ) =>{
    console.log(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
  try {
    const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
    const json = await request.json();
    console.log(json)

    setWeather(json);

  } catch (error) {}
  }

  const handleChangeCity = (city) => {
    setWeather(null);
    loadCity(city);
  };

  return (
    <div className='weatherContainer'>
      <WeatherForm onChangeCity={handleChangeCity} />
        <WeatherMainInfo weather={weather} />
      </div>
    )
};

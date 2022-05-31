import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadCity();
  }, []);

  const loadCity = async (city = "caracas") => {
    console.log(
      `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    );
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);

      setTimeout(() => {
        setWeather(json);
      }, 1500);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadCity(city);
  };

  return (
    <div>
      <h1>Consulta el clima de tu ciudad favorita</h1>
      <div className="weatherContainer">
        <WeatherForm onChangeCity={handleChangeCity} />
        {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
      </div>
    </div>
  );
};

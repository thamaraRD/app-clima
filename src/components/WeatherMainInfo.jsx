import React from "react";

export const WeatherMainInfo = ({ weather }) => {
  return (
    <div>
      <h2>
        {weather?.location.name}, {weather?.location.country}
      </h2>
      <div>
        <div>
          <img
            src={`https:${weather?.current.condition.icon}`}
            width="128px"
            alt="icon-weather"
          />
        </div>
        <div>
          <h3>{weather?.current.condition.text}</h3>
          <h3>{weather?.current.temp_c}°</h3>
        </div>
      </div>
      <iframe 
      title="mapa"
      src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11764239.998932712!2d${weather?.location.lon}8!3d${weather?.location.lat}2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1653934454223!5m2!1ses-419!2scl`}
      width="100%"
      height="450"
      style={{ border:0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

import React, { useState } from "react";

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Ingresa la ciudad..."
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
};

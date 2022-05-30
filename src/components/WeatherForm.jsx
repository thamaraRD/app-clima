import React, { useState } from 'react'

export const WeatherForm = ({ onChangeCity }) => {
  const [ city, setCity ] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    if ( value !== '' ) {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id='search' onChange={handleChange} />
      <label htmlFor='search'>buscar</label>
    </form>
  )
}

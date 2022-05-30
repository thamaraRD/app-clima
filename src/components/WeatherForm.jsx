import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs'; 

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
      <div className='input-container'>
      <input type="text" id='search' className='search' placeholder='Ingresa la ciudad' onChange={handleChange} />
      <label htmlFor='search' className='search-icon'><BsSearch /></label>
      </div>
    </form>
  )
}

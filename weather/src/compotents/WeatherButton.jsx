import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, handleCityChange, selectedCity}) => {
  // console.log('받아온 도시는?', cities);
  return (
    <div className='button_box'>
      <Button variant = { `${selectedCity === '' ? 'primary' : 'outline-primary'}`}
        onClick={() => handleCityChange('current')} >
        Current Location
      </Button>
      {cities.map((city, index)=>(
        <Button 
          variant= {`${selectedCity === city ? 'light' : 'outline-light'}`}
          key={index} 
          onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton
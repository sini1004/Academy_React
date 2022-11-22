import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, handleCityChange}) => {
  // console.log('받아온 도시는?', cities);
  return (
    <div className='button_box'>
      <Button variant="outline-primary" onClick={() => handleCityChange('current')}>Current Location</Button>
      {cities.map((city, index)=>(
        <Button 
          variant="primary" 
          key={index} 
          onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton
import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
  console.log('받아온 도시는?', cities);
  return (
    <div className='button_box'>
      <Button variant="outline-primary">Current Location</Button>
      {cities.map((city, index)=>(
        <Button variant="primary">{city}</Button>
      ))}
      {/* <Button variant="primary">Seoul</Button>
      <Button variant="primary ">Jeju</Button>
      <Button variant="primary ">Spain</Button> */}
    </div>
  )
}

export default WeatherButton
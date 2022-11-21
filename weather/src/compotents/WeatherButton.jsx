import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='button_box'>
      <Button variant="outline-primary">Current Location</Button>
      <Button variant="primary">Seoul</Button>
      <Button variant="primary ">Jeju</Button>
      <Button variant="primary ">Spain</Button>
    </div>
  )
}

export default WeatherButton
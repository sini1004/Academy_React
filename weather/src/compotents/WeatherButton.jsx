import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='button_box'>
      <Button variant="primary">Current Location</Button>
      <Button variant="outline-primary">Seoul</Button>
      <Button variant="outline-primary">Jeju</Button>
      <Button variant="outline-primary">Spain</Button>
    </div>
  )
}

export default WeatherButton
import React from 'react'

const WeatherBox = ({weather}) => {
  console.log('weather');
  return (
    <div className='weather_box'>
      <div className='h5'>{weather} </div>
      <h2 className='h1'>30도 </h2>
      <h3 className='h1'>맑은하늘</h3>
    </div>
  )
}

export default WeatherBox
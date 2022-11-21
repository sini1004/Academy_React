import React from 'react'

// props 대신 Destructuring(구조분해)
const WeatherBox = ({weather}) => {
  return (
    <div className='weather_box'>
      <div className='h5'> {weather.name} </div>
      <h2 className='h1'> 온도 : {weather.main.temp}도 / 온도 : {weather.main.humidity}% </h2>
      <h3 className='h1'>{weather.description}</h3>
    </div>
  )
}

export default WeatherBox
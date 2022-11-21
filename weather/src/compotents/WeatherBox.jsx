import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className='weather_box'>
      <div className='h5'>{weather?.name} </div>
      <h2 className='h3'>{weather?.main.temp}도 / 습도 : {weather?.main.humidity}%</h2>
      <h3 className='h3'>{weather && weather.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
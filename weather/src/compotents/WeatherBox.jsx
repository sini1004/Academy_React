import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className='weather_box'>
      <div className='h3'>{weather?.name} </div>
      <h2 className='h4'>온도 : {weather?.main.temp}°C <br/> 습도 : {weather?.main.humidity}%</h2>
      <h3 className='h4'>{weather && weather.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
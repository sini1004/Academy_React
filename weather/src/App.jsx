import React, { useEffect } from 'react';
import './App.css';
import WeatherBox from './compotents/WeatherBox';
import WeatherButton from './compotents/WeatherButton';

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('내 위치 : ', lat, lon);
    })
  };

  const getWeatherByCurrentLoction = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?     lat=${lat}&lon=${lon}&appid=92792f29aa388e43e826fdb0ad0883c3`;
    let response = await fetch(url); //비동기적 url을 호출 해서 데이터를 가져올때까지 기다려줘
    let data = await response.json();
    //fetch함수로 불러왔을때는 그대로 사용할 수 없음 - json()
    console.log(response);
  }

  useEffect (()=>{
    getCurrentLocation();
    getWeatherByCurrentLoction();
  },[])


  return (
    <>
      <div className='container'>
        <WeatherBox />
        <WeatherButton />
      </div>
    </>
  );
}

export default App;

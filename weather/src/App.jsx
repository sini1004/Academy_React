import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './compotents/WeatherBox';
import WeatherButton from './compotents/WeatherButton';


function App() {
  //데이터가 있는지 없는지
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ['Seoul', 'Jeju','Spain'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      //console.log('내 위치 : ', lat, lon);
      getWeatherByCurrentLoction(lat, lon);
    });
  };

  const getWeatherByCurrentLoction = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=92792f29aa388e43e826fdb0ad0883c3&units=metric`;
    let response = await fetch(url); //비동기적 url을 호출 해서 데이터를 가져올때까지 기다려줘
    let data = await response.json();
    //fetch함수로 불러왔을때는 그대로 사용할 수 없음 - json()
    setWeather(data);
  };

  useEffect (()=>{
    getCurrentLocation();
  },[]);

  useEffect (()=>{
    console.log('선택한 city?', city);
  },[city]);

  return (
    <>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </>
  );
}

export default App;

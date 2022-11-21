import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './compotents/WeatherBox';
import WeatherButton from './compotents/WeatherButton';


function App() {
  //데이터가 있는지 없는지
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      //console.log('내 위치 : ', lat, lon);
    })
  };

  const getWeatherByCurrentLoction = async(lat, lon) => {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    //let response = await fetch(url); //비동기적 url을 호출 해서 데이터를 가져올때까지 기다려줘
    //let data = await response.json();
    //fetch함수로 불러왔을때는 그대로 사용할 수 없음 - json()
    setWeather();
  }

  useEffect (()=>{
    getCurrentLocation();
    getWeatherByCurrentLoction();
  },[]);

  console.log('weather는? ', weather)


  return (
    <>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton />
      </div>
    </>
  );
}

export default App;

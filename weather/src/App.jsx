import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './compotents/WeatherBox';
import WeatherButton from './compotents/WeatherButton';
import BeatLoader from "react-spinners/BeatLoader";


function App() {
  //리액트 스피너 : 로딩 상태
  const [loading, setLoading] = useState(false);

  //데이터가 있는지 없는지
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ['Seoul', 'Jeju City','Spain', 'New york'];

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

    setLoading(true); //fetch 완료 전 로딩 작동

    let response = await fetch(url); //비동기적 url을 호출 해서 데이터를 가져올때까지 기다려줘
    let data = await response.json();
    //fetch함수로 불러왔을때는 그대로 사용할 수 없음 - json()
    setWeather(data);
    setLoading(false);
  };

  //선택된 도시의 날씨를 가져오는 함수
  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=92792f29aa388e43e826fdb0ad0883c3&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  const handleCityChange = (city) => {
    if(city === 'current'){
      setCity('');
    } else {
      setCity(city);
    }
  }

  useEffect (()=>{
    if(city === ''){
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  },[city]);

  //WeatherButton 컴포넌트에서 city를 바꿔줄 때 함수 호출 
  // => 새로고침하면 에러! (useEffect 2개인것 문제)
  // useEffect (()=>{
  //   console.log('선택한 city?', city);
  //   getWeatherByCity();
  // },[city]);


  //selectedCity={city} : 선택된 버튼 모양을 바꿔주기 위해 추가
  return (
    <>
      { loading ? (
        <div className='container'>
            <BeatLoader 
              color="#0d6efd"
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
      ) : (
        <div className="container">
          <h1 className='title'>weather</h1>
          {/* porps로 값 전달 */}
          <WeatherBox weather={weather} />
          <WeatherButton 
            cities={cities} 
            setCity={setCity} 
            handleCityChange={handleCityChange} 
            selectedCity={city}
          />  
        </div>
      )}
    </>
  );
}

export default App;

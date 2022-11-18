/**
 * 현재 내 위치값 가져오기
 */
import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('내 위치 : ', lat, lon);
    })
  };

  useEffect (()=>{
    getCurrentLocation();
  },[])


  return (
    <>
      <h1>날씨 앱 만드는 중입니다.</h1> 
    </>
  );
}

export default App;

// - api를 불러오기 위한 세팅 : useEffect 사용

import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';

const Home = () => {
  const dispatch = useDispatch();
  // 화면이 켜지자마자 데이터 불러오기, Redux Middleware(비동기 방식)
  useEffect(()=> {
    dispatch(movieAction.getMovies());
  },[]);

  return (
    <div>Home-대문페이지입니다.</div>
  )
}

export default Home;
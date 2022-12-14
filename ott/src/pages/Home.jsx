// - api를 불러오기 위한 세팅 : useEffect 사용

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import { movieAction } from '../redux/action/movieAction';

const Home = () => {
  const dispatch = useDispatch();
  // 화면이 켜지자마자 데이터 불러오기, Redux Middleware(비동기 방식)

  // store에서 가져옴
  const {popularMovies, topRatedMovies, upcomingdMovies} = useSelector((state) => state.movie);
  console.log('확인해보기 : ', popularMovies);

  useEffect(()=> {
    dispatch(movieAction.getMovies());
  },[]);

  return (
    <div>
      <Banner />
      Home-대문페이지입니다.
    </div>
  )
}

export default Home;
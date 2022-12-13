// middleware
// https://developers.themoviedb.org/3
// https://developers.themoviedb.org/3/movies/get-popular-movies

import api from '../api';

// 받아온 키 값을 노출되지 않게 만든다 루트에 => .env 파일 생성하기
const APIkey = process.env.REACT_APP_APIKEY;

// middleware은 함수가 함수를 리턴
function getMovies(){
  return async(dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular?api_key=${APIkey}&language=en-US&page=1`);
    const topRatedMovieApi = await api.get(`/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`);
    const upcomingdMovieApi = await api.get(`/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`);


    // getMovies의 3개 데이터(popularMovieApi,topRatedMovieApi,upcomingdMovieApi)를 병력롤 동시에 불러오기.
    // Promise.all 방식으로
    // let data = await Promise.all([popularMovieApi, topRatedMovieApi, upcomingdMovieApi]);
    // console.log(data)

    // getMovies의 3개 데이터따로 받아오기.
    let [popularMovie, topRatedMovie, upcomingdMovie] = await Promise.all([popularMovieApi, topRatedMovieApi, upcomingdMovieApi]);
    console.log('popularMovie? : ', popularMovie);
    console.log('topRatedMovie? : ', topRatedMovie);
    console.log('upcomingdMovie? : ', upcomingdMovie);
  };
}

export const movieAction = { getMovies };


/**
 * 외부 API 호출 방법
 * 1. Fetch
 * 2. Ajax
 * 3. Axios (가장 많이 사용 : 보다 더 많은 기능 사용, 라이브러리)
 */

/**
 * 외부 API 호출 방법 : Axios 
 * return async(dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular?api_key=${APIkey}&language=en-US&page=1`);
    const topRatedMovieApi = await api.get(`/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`);
    const upcomingdMovieApi = await api.get(`/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`);
  };
 * 외부 API 호출 방법 : Fetch
 * // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
    // let response = await fetch(url);
    // let data = await response.json();

    // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
    // let response2 = await fetch(url2);
    // let data2 = await response.json();

    // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
    // let response3 = await fetch(url3);
    // let data3 = await response.json();
 */
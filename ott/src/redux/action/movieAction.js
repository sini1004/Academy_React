// middleware
// https://developers.themoviedb.org/3
// https://developers.themoviedb.org/3/movies/get-popular-movies

import api from '../api';

// 받아온 키 값을 노출되지 않게 만든다 루트에 => .env 파일 생성하기
const APIkey = '14291a223077021c0e41f3df8a43591e';

// middleware은 함수가 함수를 리턴
function getMovies(){
  return async(dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular?api_key=${APIkey}&language=en-US&page=1`);

    // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
    // let response = await fetch(url);
    // let data = await response.json();

    // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
    // let response2 = await fetch(url2);
    // let data2 = await response.json();

    // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
    // let response3 = await fetch(url3);
    // let data3 = await response.json();
  };
}

export const movieAction = { getMovies };


/**
 * 외부 API 호출 방법
 * 1. Fetch
 * 2. Ajax
 * 3. Axios (가장 많이 사용 : 보다 더 많은 기능 사용, 라이브러리)
 */
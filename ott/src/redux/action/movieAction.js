// middleware
// https://developers.themoviedb.org/3
// https://developers.themoviedb.org/3/movies/get-popular-movies

// middleware은 함수가 함수를 리턴
function getMovies(){
  return async(dispatch) => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
    let response = await fetch(url);
    let data = await response.json();

    let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
    let response2 = await fetch(url2);
    let data2 = await response.json();

    let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
    let response3 = await fetch(url3);
    let data3 = await response.json();
  }
}

/**
 * 외부 API 호출 방법
 * 1. Fetch
 * 2. Ajax
 * 3. Axios (가장 많이 사용 : 보다 더 많은 기능 사용)
 */
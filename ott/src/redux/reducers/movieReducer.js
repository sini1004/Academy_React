// Reducer
// 연결한 3개 API넘겨받고 store에 저장하기
// loading spinner 추가
// 장르추가

// 초기값 비워두기
let initialState = {
  popularMovies: {}, 
  topRatedMovies: {}, 
  upcomingdMovies: {},
  loading: true,
  genreList: []
};

// 상태가 필요함 (항상 2개 필요 : state,action)
function movieReducer(state=initialState, action){
  let {type, payload} = action;
  switch(type){
    case 'GET_MOVIE_REQUST' :
      return{...state, loading: true};
    case 'GET_MOVIE_SUCCESS' :
      return{ ...state, 
        popularMovies:payload.popularMovies, 
        topRatedMovies:payload.topRatedMovies, 
        upcomingdMovies:payload.upcomingdMovies,
        genreList:payload.genreList,
        loading : false
      };
    case 'GET_MOVIE_FAIL' :
      return {...state, loading: false};
    default :
      return{ ...state};
  }
}

export default movieReducer;

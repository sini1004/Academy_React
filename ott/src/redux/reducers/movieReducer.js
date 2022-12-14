// Reducer
// 연결한 3개 API넘겨받고 store에 저장하기


// 초기값 비워두기
let initialState = {
  popularMovies: {}, 
  topRatedMovies: {}, 
  upcomingdMovies: {}
};

// 상태가 필요함 (항상 2개 필요 : state,action)
function movieReducer(state=initialState, action){
  let {type, payload} = action;
  switch(type){
    case 'GET_MOVIE_SUCCESS' :
      return{ ...state, 
        popularMovies:payload.popularMovies, 
        topRatedMovies:payload.topRatedMovies, 
        upcomingdMovies:payload.upcomingdMovies
      }
    default :
      return{ ...state};
  }
}

export default movieReducer;

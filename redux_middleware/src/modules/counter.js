// 1. reducer
// 2. thunk 미들웨어 적용 : 특정 thunk함수가 디스패치 되면 1초후 작동

// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });

// thunk
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};


// 초기값 (객체가 아닌 숫자여도 됨.)
const initialState = 0;

export default function counter (state = initialState, action){
  switch(action.type){
    case INCREASE :
      return state + 1;
    case DECREASE :
      return state - 1;
    default :
      return state;
  }
}
// reducer

// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
const increase = () => ({ type : INCREASE });
const decrease = () => ({ type : DECREASE });

// 초기값 (객체가 아닌 숫자여도 됨.)
const initialState = 0;

export default function counter (state = initialState, action){
  switch(action.type){
    case INCREASE :
      return increase;
    case DECREASE :
      return decrease;
    default :
      return state
  }
}
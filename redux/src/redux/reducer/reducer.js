// reducer함수 만들어 줌

let initialState = {
  count : 0,
}

function reducer(state = initialState, action){ 
  // 2개의 매개변수가 필요
  // state - 어떤 상태인지 알려줘야(초기값 설정 필수)
  // action - 어떤 행동을 할지 행동지침
  // reducer는 store를 바꾸는 역할 (returen값으로 바꿈, 필수)
  console.log('dispatch로 액션 받아옴', action);
  if (action.type === 'INCINCREMENTRE') {
    return {...state, count: state.count + 1}
    // 다른 state가 있을 수 있으니, ...state를 그대로 유지하게하고 count만 바뀌게
  }
  return { ...state };
  // reducer의 return값
}

export default reducer;
// redux 적용, 기존 useState 제거
// payload 사용
import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Box from './components/Box';
import BoxSon from './components/BoxSon';

function App() {
  //const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count); 
  // useSelector : 매개변수는 함수, 그 함수는 상태를 전달받는 역할
  // state를 함수의 매개변수로 받아옴(store에 있는 모든 state를 전달)

  const dispatch = useDispatch(); //dispatch 세팅

  const increase = () => {
    dispatch({ type:'INCREMENT', payload:{num:5} }); //한번에 5씩 증가시킬래
    // 클릭 했을 때 액션(단순한 오브젝트)을 던져줌
    // 필수사항 : type(액션이름) 
    // 선택사항 : payload(옵션)가 있어야함(함수의 매개변수 역할, 내가 원하는 정보를 보내줄 수 있음.)
    //setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <Box />
      <BoxSon />
    </>
  );
}

export default App;

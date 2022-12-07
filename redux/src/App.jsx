import React from 'react';
import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:'INCREMENT'});
    // 클릭 했을 때 액션(단순한 오브젝트)을 던져줌
    // 필수사항 : type(액션이름) / 선택사항 : payload(옵션)가 있어야함
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
    </>
  );
}

export default App;

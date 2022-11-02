import React, { useState } from 'react';
import './App.css';
import TodoBoard from './conponents/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  //array를 이용해서 아이템을 모아줌

  const addItem =() => {
    console.log('addItem함수 발생!!! inputValue는?',inputValue)
    setTodoList([...todoList,inputValue]) 
    //기존의 아이템을 유지하고, 새로운 아이템(inputValue) 추가
  }

  return (
    <>
      <input type="text" className="input-style" onChange={(event) => setInputValue(event.target.value)}  value={inputValue}/>
      <button className="btn-style"  onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/> 
      {/* todoList값을 props를 이용해서 TodoBoard로 전달 */}
    </>
  );
}

export default App;

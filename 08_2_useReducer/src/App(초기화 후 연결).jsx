import React, { useReducer}  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'

const initialState = { //inputs, users 배열 초기화
  inputs: {username:'', email:''},
  users: [     
    { id:1, 
      username:'blueDragon', 
      email:'blueDragon@naver.com',
      active: true 
    },
    { id:2, 
      username:'sisisaa', 
      email:'sisisaa007@daum.net',
      active: false  
    },
    { id:3, 
      username:'d3456dddd', 
      email:'d3456@gmail.com',
      active: false  
    },
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); //reducer 정의
//const [초기상태(현재상태), 액션을 발생시키는 함수(전달해줄것)] = useReducer(내가 사용할 함수, 초기값)
//파라미터 (함수, 초기값)
  const {users} = state; //기본상태(state) 안에 users가 있다 => 비구조화 할당, users배열만 추출
  const {username, email} = state.inputs; //state안에 input 2개 

  return (
    <>
      <CreateUser username={username} email={email} />
      <UserList users={users} />  <br />
      <div>Active 상태의 사용자 수 : 0 </div>
    </>
  );
}

export default App;

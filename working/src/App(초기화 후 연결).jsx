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
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const {username, email} = state.inputs;

  return (
    <>
      <CreateUser username={username} email={email} />
      <UserList users={users} />  <br />
      <div>Active 상태의 사용자 수 : 0 </div>
    </>
  );
}

export default App;

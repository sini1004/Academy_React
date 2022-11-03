import React, { useReducer, useCallback}  from 'react';
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
    case 'CHANGE_INPUT':
      return {
        ...state, //원래값 그대로 가져옴
        inputs: { 
          ...state.inputs,
          [action.name] : action.value
        }
      };
    default:
      throw new Error('action 없음!');
      // return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const {username, email} = state.inputs;

  //onChange 함수
  const onChange = useCallback((e) => { //useCallback : 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용하는 함수
    const { name, value } = e.target;
    //dispatch : HTML 안에서 reducer함수를 동작시킬 수 있음.
    dispatch({
      type : 'CHANGE_INPUT', //보통 대문자로 해줌
      name,
      value
    })
  }, [inputs]) //변경되는 

  return (
    <>
      <CreateUser 
        username = {username} 
        email = {email} 
        onChange = {onChange} //onChange 함수 발생
      />
      <UserList users={users} />  <br />
      <div>Active 상태의 사용자 수 : 0 </div>
    </>
  );
}

export default App;

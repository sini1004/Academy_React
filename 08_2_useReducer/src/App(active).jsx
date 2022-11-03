import React, { useReducer, useCallback, useRef, useMemo}  from 'react';
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

//active된 itme 숫자를 세주는 함수
function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length;
}

//reducer함수 정의 : 상태를 업데이트 하는 함수
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
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user) //기존 state에 추가, user는 action을 통해 받아왔음
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
  const nextId = useRef(4); //useRef : 리렌더링 하지 않는다. 컴포넌트의 속성만 조회&수정

  //onChange 함수
  const onChange = useCallback((e) => { //useCallback : 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용하는 함수
    const { name, value } = e.target;
    //dispatch : HTML 안에서 reducer함수를 동작시킬 수 있음.
    dispatch({
      type : 'CHANGE_INPUT', //보통 대문자로 해줌
      name,
      value
    })
  }, []); //depth : 참조할 것 

  const onCreate = useCallback (() => {
    dispatch({
      type : 'CREATE_USER', //보통 대문자로 해줌
      user : {
        id: nextId.current, //하나씩 추가
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  //useMemo : 랜더링이 될때 users 배열이 바뀔때만 실행
  //active가 적용된 user의 수를 나타내는 변수 count
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username = {username} 
        email = {email} 
        onChange = {onChange} //onChange 함수 발생
        onCreate = {onCreate} //onCreate 함수 발생
      />
      <UserList users={users} />  <br />
      <div>Active 상태의 사용자 수 : {count} </div>
    </>
  );
}

export default App;

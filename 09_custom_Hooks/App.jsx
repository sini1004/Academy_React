// 커스텀 hooks - 반복되는 로직을 쉽게 재사용
// 이름은 앞에 use키워드로 시작, 그 안에 함수 
import React, { useReducer, useCallback, useRef, useMemo}  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'
import useInputs from './useInputs' //만들어 놓은 커스텀 hook useInputs을 불러옴

const initialState = { 
  //input객체
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
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user) 
      };
    case 'TOGGLE_USER':
      return {
        ...state, //현재 상태 가져옴
        users: state.users.map(user =>
          user.id === action.id ? {...user, active : !user.active} : user
        ) //현재 상태값에서 배열들만
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id) //결과값이 새로운 값을 만듬
      }
    default:
      throw new Error('action 없음!');
      // return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const nextId = useRef(4); 
  //useInputs 사용을 위한 세팅
  const [form, onChange, reset] = useInputs({
    username : '',
    email : ''
  });

  const {username, email} = form;


  const onCreate = useCallback (() => {
    dispatch({
      type : 'CREATE_USER', //보통 대문자로 해줌
      user : {
        id: nextId.current, //하나씩 추가
        username,
        email
      }
    });
    reset(); //setInput에서 만든 초기화 함수 사용
    nextId.current += 1;
  }, [username, email, reset]);

  //useMemo : 랜더링이 될때 users 배열이 바뀔때만 실행
  //active가 적용된 user의 수를 나타내는 변수 count
  const count = useMemo(() => countActiveUsers(users), [users]);

  const onToggle = useCallback ((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback ((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle = {onToggle} onRemove = {onRemove}/>  <br />
      <div>Active 상태의 사용자 수 : {count} </div>
    </>
  );
}

export default App;

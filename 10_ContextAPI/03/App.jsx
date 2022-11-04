//onToggle, onRemove 두 함수를 CreateUser에 주기 위해서는 UserList를 통해야됨
//-> 위 상황 해결책
//context를 통해서 직접 넣어주거나 dispatch만 따로 넣어줌.

import React, { useReducer, useCallback, useRef, useMemo, createContext}  from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser'
import useInputs from './useInputs'

const initialState = { 
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


function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length;
}


function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user) 
      };
    case 'TOGGLE_USER':
      return {
        ...state, 
        users: state.users.map(user =>
          user.id === action.id ? {...user, active : !user.active} : user
        ) 
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id) 
      }
    default:
      throw new Error('action 없음!');
  }
}

// UserDispatch 라는 이름으로 내보내줍니다. UserDispatch(일종의 컴포넌트가 됨)로 컨텍스트를 만들어 줌
export const UserDispatch = React.createContext(null); //null : 기본값 필요 없어서 사용

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const nextId = useRef(4); 
  const [form, onChange, reset] = useInputs({
    username : '',
    email : ''
  });

  const {username, email} = form;


  const onCreate = useCallback (() => {
    dispatch({
      type : 'CREATE_USER', 
      user : {
        id: nextId.current, 
        username,
        email
      }
    });
    reset(); 
    nextId.current += 1;
  }, [username, email, reset]);

  
  const count = useMemo(() => countActiveUsers(users), [users]);
  
  //onToggle, onRemove 삭제

  
  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users}/>  <br />
        <div>Active 상태의 사용자 수 : {count} </div>
      </UserDispatch.Provider>
      
    </>
  );
}

export default App;

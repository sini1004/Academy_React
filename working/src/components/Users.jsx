/**
 * useReducer로 요청 상태 관리
 * useReducer 를 사용하여 LOADING, SUCCESS, ERROR 액션에 따라 다르게 처리
 */
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

function reducer(state, action){
  switch (action.type){
    case 'LOADING' : 
    return {
      loading: true,
      data: null,
      error: null
    };
    case 'SUCCESS' : 
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR' : 
      return {
        loading: false,
        data: null,
        error: action.error
      };

    default :
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer,{
    loading: false,
    data: null,
    error: null
  });

  const fetchUsers = async() => {
    dispatch({type:'LOADING'});
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({type:'SUCCESS', data: response.data}); //요청 성공
    } catch (e) {
      dispatch({type:'ERROR', error:e});
    }
  };

  useEffect(() => {
    fetchUsers();
  },[]) 
  
  const {loading, error, data:users} = state; //비구조할당 : data를 users로 바꿔줌
  
  if(loading) return <div>로딩중...</div>;
  if(error) return <div>에러가 발생했습니다.</div>;
  if(!users) return null; 

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.address.street})
          </li>  
          ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  )
}

export default Users
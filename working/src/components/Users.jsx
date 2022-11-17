/**
 * REST API : https://meetup.toast.com/posts/92 를 이용
 * axios 라이브러리 - REST API 쉽게 사용하고, 프로미스 기반으로 처리하게 해줌
 * (yarn add axios)
 * 연습용 API제공 : https://jsonplaceholder.typicode.com/
 */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
  //유저스 API가 있는지 없는지
  const [users, setUsers] = useState(null);
  //현재 로딩중인지 아닌지
  const [loading, setLoading] = useState(false);
  //에러가 났는지 안났는지
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async() => {
      try {
        // 요청 시작 할 때 error 와 users를 초기화 해줌
        setUsers(null);
        setError(null);
        //로딩 시작 loading -> true
        setLoading(true); 

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data); //가져온 데이터를 users로 설정
      } catch (e) {
        console.log('error!!!!');
      }
      setLoading(false); //로딩이 끝났으니 false로 
    }
    fetchUsers();
  },[]) //처음에만 작동

  
  // 3가지 상태에 따라 다른 결과물 렌더링
  if(loading) return <div>로딩중...</div>;
  if(error) return <div>에러가 발생했습니다.</div>;
  if(!users) return null; //users 값이 아직 없을 때에는 null 을 보여주도록 처리

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>  
          ))}
      </ul>
    </div>
  )
}

export default Users
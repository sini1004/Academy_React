//Context API를 사용한 전역 값 관리
import React, {useContext} from 'react' //useContext 사용!
import { UserDispatch } from './App';

 //또다른 컴퍼넌트 추가
const Item = ({ user }) => {  
  const {username, email, id, active } = user; 
  const dispatch = useContext(UserDispatch); //컨텍스트 사용

  return (
    <div>
      <b 
        style={ {color: active ? 'green':'black', cursor:'pointer' }} 
        onClick={ ()=> {dispatch(
          {
            type: 'TOGGLE_USER',
            id
          }
        )} }
        >
        {username}
      </b>
      <span> ( {email} )</span>
      <button onClick={() => {dispatch( //컨텍스트로 만들어진 dispatch사용
        {
          type: 'REMOVE_USER',
          id
        }
      )}}>삭제</button>
    </div>
  )
}


const UserList = ({users}) => {  //props로 users(배열)받아옴

  return (
    <>
      {/* { users.map( (user) => <Item user={user} /> )}
      //key값이 없다고 경고 */}

      { users.map( (user) => 
        <Item 
          user={user} 
          key={user.id}
        /> )
        }      
    </> 
  )
}

export default UserList

//key값이 없다고 경고 -  배열을 렌더링 할때는 key이 있어야 효율적으로 렌더링 가능



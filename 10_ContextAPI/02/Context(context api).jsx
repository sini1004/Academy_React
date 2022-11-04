//Context API 를 사용한 전역 값 관리
//Context : 리액트 컴포넌트간에 어떠한 값을 공유할수 있게 해주는 기능

import React, {createContext, useContext} from 'react';

const MyContext = createContext('defaultValue');
//createContext로 만든 변수(MyContext)는 컴포넌트처럼 쓰임

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}님!</div>
}

function Parent() {
  return <Child/>
}

function GrandParent() {
  return <Parent/>
}

function Context() {
  return (
    <MyContext.Provider value='SINI'>
      <GrandParent text='SINI'/>
    </MyContext.Provider>
  )
}

/**
 * createContext 라는 함수 불러옴.
 * Context 객체 안에는 Provider라는 컴포넌트가 들어있다. 
 * 컨텍스트.Provider를 통해 value 값 설정
 */
export default Context
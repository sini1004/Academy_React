//Context API 를 사용한 전역 값 관리
//Context : 리액트 컴포넌트간에 어떠한 값을 공유할수 있게 해주는 기능

import React, {createContext, useContext} from 'react';

function Child({text}) {
  return <div>안녕하세요? {text}</div>
}

function Parent({text}) {
  return <Child text = {text} />
}

function GrandParent({text}) {
  return <Parent text = {text} />
}

function Context({text}) {
  return <GrandParent text = 'SINI~'/>
}

export default Context
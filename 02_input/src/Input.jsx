import React, { useState, useRef } from 'react'
/*
  특정 DOM을 직접 선택해야 할때 useRef hook사용
*/
const Input = () => {
  const [inputs, setInputs] = useState({
    id:'', nick:''
  })
  const focusInput = useRef();    //focusInput이라는 객체 생성
  const {id, nick} = inputs; 

  const onChange = (e) => { 
    const { name, value }  = e.target;
    const nextInputs = {
      ...inputs, [name]: value,
    }
    setInputs(nextInputs);
  }

  const onReset = () => {
    setInputs({
      id:'', nick:''
    })
    focusInput.current.focus()  
    //current는 DOM을 가리키게 되고(ref가 지정된 부분) focus함수 호출
  }

  return (
    <div>
      <input 
        name='id' 
        placeholder='아이디' 
        onChange={onChange} 
        value={id} 
        ref={focusInput}   //react에서 특정 dom부분을 참조할때 
      />
      <input 
        name='nick' 
        placeholder='닉네임' 
        onChange={onChange} 
        value={nick} 
        />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>입력값: </b>
        {id}({nick})
      </div>

    </div>
  )
}

export default Input
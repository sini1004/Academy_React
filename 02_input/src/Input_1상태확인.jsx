import React, { useState } from 'react'

const Input = () => {
  const [ text, setText ] = useState('');

  const onChange = (e) => {   //input창에 글자를 입력할때마다 발생하는 함수
    //console.log(e.target.value)
    setText(e.target.value)
  }

  const onReset = () => {
    setText('')
  }

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        입력값: {text}
      </div>

    </div>
  )
}

export default Input
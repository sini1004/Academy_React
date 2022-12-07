import React from 'react'
import {useSelector} from 'react-redux'

const BoxSon = () => {
  const count = useSelector((state) => state.count); 
  return (
    <div>
      <hr/>
      Box 안에 있는 BoxSon 입니다.<br/>
      BoxSon : {count}
    </div>
  )
}

export default BoxSon
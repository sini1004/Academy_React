// 여기서도 count값을 사용
// useSelector를 이용해서 직접 가져다 쓰면 됨

import React from 'react'
import {useSelector} from 'react-redux'

const Box = () => {
  const count = useSelector((state) => state.count); 

  return (
    <div>
      이것은 Box! {count}  
    </div>
  )
}

export default Box
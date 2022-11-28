import React from 'react'

const Videos = () => {
  return (
    <div>
      <h2>Home - Videos페이지입니다.</h2>
      <p>이 곳은 비디오 페이지입니다. 리액트 라우터 기초 연습</p>
      <p>세부페이지로 가봅시다</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='video id 입력' value={text} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Videos
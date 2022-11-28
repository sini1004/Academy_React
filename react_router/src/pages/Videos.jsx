import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
  const [text, setText] = useState(''); 
  const navigate = useNavigate(); //useNavigate 훅을 이용해서 navigate 받아옴

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`); //입력된 경로로 연결
  };

  return (
    <div>
      <h2>Home - Videos페이지입니다.</h2>
      <p>이 곳은 비디오 페이지입니다. 리액트 라우터 기초 연습</p>
      <br />
      <p>세부페이지로 가봅시다</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='video id 입력' 
          value={text} 
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Videos
import React from 'react';
import './App.css';
import { Routes, Route } from 'react'
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';

//Routes는 Route를 감싸주고, 스위치 해주는 역할

/**
 * 1. 전체상품페이지(대문페이지), 로그인, 상품 상세페이지
 *  1-1. 네비게이션바
 * 2. 전체상품페이지(대문페이지) : 전체상품을 쭉 나열
 * 3. 로그인버튼 - 클릭하면 로그인 페이지 나옴
 * 4. 상품디테일을 클릭 - 로그인이 안되어있을떄는 로그인페이지가 나옴
 * 5. 로그인이 되어 있을때는 상품디테일페이지를 볼 수 있음
 * 6. 로그아웃기능 - 로그아웃 상태에선 다시 디테일 페이지 볼 수 없음, 로그인페이지 나옴
 * 7. 로그인, 로그아웃 토글버튼
 */
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='login' element={<Login/>} />
        <Route path='product/:id' element={<ProductDetail/>} />
        <Route />
      </Routes> 
    </>
  );
}

export default App;

//$npm install react-icons --save : react-icon 설치
//$yarn add sass : sass 설치

import React from 'react'
import { FiLogIn } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import './Navbar.scss'

const Navbar = () => {
  const menuList = ['New','Men','Women','Kids','Sale','Polo','Collections','나의 라코스테','We are Lacoste'];
  return (
    <>
      <div className='login_btn'>
        <FiLogIn /> <span>로그인</span>
      </div>
      <h1>
        <img src="img/logo.png" alt="H&M" />
      </h1>
      <nav>
        <ul className='menu_list'>
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </nav>
      <div className='search'>
        <BiSearch />
        <input type="text" placeholder='제품검색'/>
      </div>
    </>
  )
}

export default Navbar
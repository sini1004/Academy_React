import React from 'react'
import { FiLogIn } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const menuList = ['woman','divided','man','kids','childern','sports','sale'];
  return (
    <>
      <div>
        <div>
          <FiLogIn /> <span>로그인</span>
        </div>
      </div>
      <h1>
        <img src="img/logo.png" alt="H&M" />
      </h1>
      <nav>
        <ul>
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </nav>
      <div>
        <BiSearch />
        <input type="text" placeholder='제품검색'/>
      </div>
    </>
  )
}

export default Navbar
//$npm install react-icons --save : react-icon 설치
//$yarn add sass : sass 설치
// 참고 사이트 : https://www.npmjs.com/package/json-server#getting-started
//db.json 파일을 프로젝트 폴더에 넣어준다.
//npm install -g json-server : json server 설치
//$ json-server --watch db.json --port 5000 : 작동 (로컬서버를 할 경우)

/**
 * 로그인버튼 클릭 시 로그인 페이지로 이동
 * 
 * nav는 authenticate, setAuthenticate 전달받아서 로그인, 로그아웃 표시되게 설정
 */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import './Navbar.scss'

const Navbar = () => {
  const menuList = ['New','Men','Women','Kids','Sale','Polo','Collections','나의 라코스테','We are Lacoste'];

  const navigate = useNavigate();

  const search = (event) => {
    if(event.key === 'Enter') { //Enter 키 눌렀을 때 반응
      let keyword = event.target.value; //event 안에 value가 있음
      console.log('키워드', keyword);
      navigate(`/?q=${keyword}`);
    }
  }

  const gotoLogin = () => {
    navigate('/login');
  }

  return (
    <div>
      <div className='login_btnWrap'>
        <div className='login_btn' onClick={gotoLogin}>
          <FiLogIn /> <span>로그인</span>
        </div>
      </div>
      <h1>
        <Link to='/'> 
          <div className='img_wrap'>
            <img src="../img/logo.png" alt="LACOSTE" />
          </div>
        </Link>
      </h1>
      <nav>
        <ul className='menu_list'>
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
      <div className='search'>
        <BiSearch />
        <input 
          type="text" 
          placeholder='제품검색' 
          onKeyPress={(event) => search(event)}
        />
      </div>
    </div>
  )
}

export default Navbar
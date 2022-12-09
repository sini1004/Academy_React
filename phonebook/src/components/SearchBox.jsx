import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './SearchBox.module.css'

const SerchBox = () => {
  const [keyword, setKeyword] = useState(); // 키워드값(입력값)을 인식하게

  let dispatch = useDispatch();
  
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type:'SEARCH_BY_NAME', payload:{keyword} })
  }

  return (
    <form action="" className={style.form} onSubmit={searchByName}>
      <Row>
        <Col xs md='9'>
          <Form.Control 
            type="text" 
            placeholder="이름을 입력해주세요." 
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col xs md='3'>
          <Button variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default SerchBox
import React from 'react'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // const getName = (e) => { 모든 이벤트 핸들러는 이벤트라는 매개변수를 넘김
  //   setName(e.target.value);
  // }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="이름을 입력해주세요." 
            onChange={(e)=>setName(e.target.value)}
            // onChange={getName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="전화번호를 입력해주세요." 
            onChange={(e)=>setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          추가하기
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
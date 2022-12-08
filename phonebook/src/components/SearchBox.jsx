import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

const SerchBox = () => {
  return (
    <form action="">
      <Row>
        <Col xs md='9'>
          <Form.Control type="text" placeholder="이름을 입력해주세요." />
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
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import style from './ContactItem.module.css'

const ContactItem = () => {
  return (
    <div className={style.box}>
      <Row>
        <Col md='2'>
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="" />
        </Col>
        <Col md='10' className={style.text}>
          <h5>아무말</h5>
          <p>전화번호</p>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
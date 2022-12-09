import React from 'react'
import { Row, Col } from 'react-bootstrap';
import style from './ContactItem.module.css'

const ContactItem = ({item}) => {
  return (
    <div className={style.box}>
      <Row>
        <Col md='2'>
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="" />
        </Col>
        <Col md='10' className={style.text}>
          <h5>{item.name}</h5>
          <p>{item.phoneNumber}</p>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
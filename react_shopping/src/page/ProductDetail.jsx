import React from 'react'
import {Container, Row, Col, Dropdown, Button} from 'react-bootstrap';

const ProductDetail = ({item}) => {
  return (
    <Container>
      <Row>
        <Col>
          <img src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw6b3da9fc/AF214E-52N_02S_20.jpg?imwidth=915&impolicy=product" alt="" />
        </Col>
        <Col>
          <div className="detail_titleWrap">
            <div className="detail_title">
              제품명
            </div>
            <span className="like">하트모양</span>
            <div className="detail_price">299,000원</div>
            <div className="new">신제품</div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Size
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <Button variant="light">추가</Button>{' '}
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
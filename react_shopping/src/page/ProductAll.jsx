//부트스트랩
//npm install react-bootstrap bootstrap

import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

const ProductAll = () => {
  const [productsList, setProductsList] = useState([]);

  const getProducts = async() => {
    let url = 'http://localhost:5000/products';
    let response = await fetch(url); //브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
    let data = await response.json();

    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productsList.map((menu)=>(
            <Col lg={3} sm={6} >
              <ProductCard item = {menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
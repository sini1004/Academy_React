import React from 'react'

const ProductAll = () => {
  const getProducts = async() => {
    let url = 'http://localhost:5000/products';
    let response = await fetch(url); //브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
    let data = await response.json();

    console.log(data);
  }

  return (
    <div>ProductAll</div>
  )
}

export default ProductAll
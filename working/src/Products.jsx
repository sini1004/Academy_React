//무한루프에 빠진 fetch를 한번만 불러옴
//useEffect() hooks은 react component를 원할때만 실행하게 한다.
import React from "react";
import { useEffect } from 'react';
import { useState } from "react";

function Products() {
	const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch ('data/products.json')
    .then(res => res.json()) //json 함수 호출
    .then(data => {
      console.log('데이터를 네트워크에서 받아왔음!');
      setProducts(data);
     }); //data를 응답 받은 후의 로직 
     //계속 패치가 일어남 
      return ()=>{
        //컴포넌트가 언마운트 될 때
        console.log('clean')
      }
  }, []) //deps를 비워 놓으면 아무런 디펜던시가 전달되지 않음.

	return (
		<>
      <ul>
        {products.map((product) => (
          <li><b>{product.name}</b> : {product.price}</li>
        ))}
      </ul>
			<button
				style={{ padding: "10px;", backgroundColor: "yellow" }}
				onClick={() => setCount((prev) => prev + 1)}
			>
				{count}
			</button>
		</>
	);
}

export default Products;

/**
 * fetch ('api 주소')
 * .then(res => res.json())
 * .then(res => { //data를 응답 받은 후의 로직 })
 */

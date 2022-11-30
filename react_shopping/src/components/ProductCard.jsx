import React from 'react'
import './ProductCard.scss'

const ProductCard = ({item}) => {
  return (
    <div className='ProductCard'>
      <div className='img_container'>
        <img src={item?.img} alt="item01" />
        <div className='item_box'>
          <div className='event'>MD추천</div>
          <div className='new'>BEST</div>
        </div>
      </div>

      <div className='title'>{item.title}</div>
      <div className='price'>{item.price}원</div>
    </div>
  )
}

export default ProductCard
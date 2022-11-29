import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
      <img src={item?.img} alt="item01" />
      <div>
        MD추천
      </div>
      <div>
        NEW
      </div>
      <div>
        {item.title}
      </div>
      <div>
        {item.price}원
      </div>
    </div>
  )
}

export default ProductCard
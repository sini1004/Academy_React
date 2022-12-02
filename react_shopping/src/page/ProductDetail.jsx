import React from 'react'

const ProductDetail = ({item}) => {
  return (
    <div>
      <img src={item?.img} alt="item01" />
    </div>
  )
}

export default ProductDetail
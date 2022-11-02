import React from 'react'

const todoItem = (props) => {
  return (
    <div className='item'>
      {props.item}
    </div>
  )
}

export default todoItem
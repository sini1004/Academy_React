import React from 'react'
import TodoItem from './TodoItem';

const TodoBoard = (props) => {
  console.log("app.jsx에서 전달받은 props값은?",props.todoList)
  return (
    <>
      <h1 className='h1'>Todo List</h1>
      { props.todoList.map((item) => <TodoItem item={item} />) }
    </>
  )
}

export default TodoBoard
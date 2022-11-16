//todos의 상태를 저장해서 다시 열었을때도 그대로

import React, { useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { useEffect } from 'react';

function readTodosFromLocalStorage(){
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
}

const TodoList = ({ filter }) => {
	//미리 입력해둔 todos가 아니라 이미 저장된 값을 가져옴.
	const [todos, setTodos] = useState(readTodosFromLocalStorage());

	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};

	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};

	const handleDelete = (deleted) =>
		setTodos(todos.filter((t) => t.id !== deleted.id));

	const filtered = getFilteredItems(todos, filter);

	//todos가 업데이트할 때 적용
	useEffect(()=>{
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])
	//JSON.stringify() : 자바스크립트의 값을 JSON 문자열로 변환

	return (
		<section className={styles.container}>
			<TodoAdd onAdd={handleAdd} />
			<ul className={styles.list}>
				{filtered.map((item) => (
					<Todo
						key={item.id}
						todo={item}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>
		</section>
	);
};

// TodoList 컴포넌트 바깥 부분에 필터링 하는 함수를 정의
function getFilteredItems(todos, filter) {
	if (filter === "all") {
		return todos;
	}
	return todos.filter((todo) => todo.status === filter);
}

export default TodoList;

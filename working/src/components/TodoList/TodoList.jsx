import React, { useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
	const [todos, setTodos] = useState([
		{
			id: "1",
			text: "청소하기",
			status: "active",
		},
		{
			id: "2",
			text: "필라테스 가기",
			status: "active",
		},
		{
			id: "3",
			text: "세탁조 청소",
			status: "active", //나중에 진행중/완료 구분
		},
	]);

	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};

	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};

	const handleDelete = (deleted) =>
		setTodos(todos.filter((t) => t.id !== deleted.id));

	const filtered = getFilteredItems(todos, filter);

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

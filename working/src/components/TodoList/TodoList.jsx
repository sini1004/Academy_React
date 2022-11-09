import React, { useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";

const TodoList = () => {
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

	return (
		<section>
			<TodoAdd onAdd={handleAdd} />
			<ul>
				{todos.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</section>
	);
};

export default TodoList;

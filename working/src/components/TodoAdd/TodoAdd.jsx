import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoAdd = ({ onAdd }) => {
	const [text, setText] = useState("");

	const handleChange = (e) => setText(e.target.value);

	const handleSubmit = (e) => {
		//form고유의 submit기능이 작동되면 발생하는 함수
		e.preventDefault();
		if (text.trim().length === 0) {
			return;
		}
		onAdd({ id: uuidv4(), text, status: "active" });
		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="할 일 추가하기"
				value={text}
				onChange={handleChange} //변경될때마다 handleChange호출
			/>
			<button>add</button>
		</form>
	);
};

export default TodoAdd;

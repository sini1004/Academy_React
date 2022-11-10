import React from "react";
import { FiTrash } from "react-icons/fi";

const Todo = ({ todo, onUpdate, onDelete }) => {
	const { text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? "completed" : "active";
		onUpdate({ ...todo, status });
	};

	const handleDelete = () => onDelete(todo);

	return (
		<li>
			<input
				type="checkbox"
				id="checkbox"
				checked={status == "completed"}
				onChange={handleChange}
			/>
			<label htmlFor="checkbox">{text}</label>
			<span>
				<button onClick={handleDelete}>
					<FiTrash />
				</button>
			</span>
		</li>
	);
};

export default Todo;

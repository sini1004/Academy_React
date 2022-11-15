import React from "react";
import { FiTrash } from "react-icons/fi";
import styles from "./Todo.module.css";

const Todo = ({ todo, onUpdate, onDelete }) => {
	const { id, text, status } = todo;
	const handleChange = (e) => {
		const status = e.target.checked ? "completed" : "active";
		onUpdate({ ...todo, status });
	};

	const handleDelete = () => onDelete(todo);

	return (
		<li className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				id={id}
				checked={status == "completed"}
				onChange={handleChange}
			/>
			<label className={styles.text} htmlFor={id}>
				{text}
			</label>
			<span className={styles.icon}>
				<button className={styles.button} onClick={handleDelete}>
					<FiTrash />
				</button>
			</span>
		</li>
	);
};

export default Todo;

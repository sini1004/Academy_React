import React from "react";
import { FiTrash } from "react-icons/fi";

const Todo = ({ todo }) => {
	return (
		<li>
			<input type="checkbox" />
			<label htmlFor="">{todo.text}</label>
			<span>
				<button>
					<FiTrash />
				</button>
			</span>
		</li>
	);
};

export default Todo;

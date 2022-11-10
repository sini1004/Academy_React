import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

//어떤 필터가 있는지 컴포넌트 밖에서 정의
const filters = ["All", "Active", "Completed"];

function App() {
	const [filter, setFilter] = useState(filters[0]);
	return (
		<>
			<h1>Todo</h1>
			<Header filters={filters} filter={filter} onFilterChange={setFilter} />
			<TodoList filter={filter} />
		</>
	);
}

export default App;

/**
 * tailwindcss : https://tailwindcss.com/
 * yarn add -D tailwindcss
 * yarn tailwindcss init
 */

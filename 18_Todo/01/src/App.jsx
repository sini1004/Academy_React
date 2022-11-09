import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
	return (
		<>
			<h1>Todo</h1>
			<TodoList />
		</>
	);
}

export default App;

/**
 * tailwindcss : https://tailwindcss.com/
 * yarn add -D tailwindcss
 * yarn tailwindcss init
 */

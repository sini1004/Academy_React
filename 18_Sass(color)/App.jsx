import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
	return (
		<div className="App">
			<Button size="large">파란버튼</Button>
			<Button>파란버튼</Button>
			<Button size="small">파란버튼</Button>
			{/* children prop : 컴포넌트를 html처럼 사용 */}
		</div>
	);
}

export default App;

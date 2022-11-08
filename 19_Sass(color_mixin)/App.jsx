import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
	return (
		<div className="App">
			<div className="Btnwrap">
				<Button size="large" color="orange">
					오렌지버튼
				</Button>
				<Button color="orange">오렌지버튼</Button>
				<Button size="small" color="orange">
					오렌지버튼
				</Button>
				{/* children prop : 컴포넌트를 html처럼 사용 */}
			</div>
			<div className="Btnwrap">
				<Button size="large" color="pink">
					핑크버튼
				</Button>
				<Button color="pink">핑크버튼</Button>
				<Button size="small" color="pink">
					핑크버튼
				</Button>
			</div>
			<div className="Btnwrap">
				<Button size="large" color="teal">
					틸버튼
				</Button>
				<Button color="teal">틸버튼</Button>
				<Button size="small" color="teal">
					틸버튼
				</Button>
			</div>
			<div className="Btnwrap">
				<Button size="large">기본버튼</Button>
				<Button>기본버튼</Button>
				<Button size="small">기본버튼</Button>
			</div>
		</div>
	);
}

export default App;

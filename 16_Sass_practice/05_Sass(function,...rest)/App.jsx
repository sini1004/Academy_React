import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
	return (
		<div className="App">
			<div className="Btnwrap">
				<Button size="large" color="orange" outline>
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
				<Button size="small" color="pink" outline>
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
				<Button outline>기본버튼</Button>
				<Button size="small">기본버튼</Button>
			</div>
			<div className="Btnwrap">
				<Button size="large" color="pink" fullWidth>
					기본버튼
				</Button>
				<Button size="large" color="teal" outline fullWidth>
					기본버튼
				</Button>
				<Button
					size="large"
					color="orange"
					fullWidth
					onClick={() => {
						console.log("클릭!");
					}}
					onMouseMove={() => {
						console.log("마우스가 움직여요!");
					}}
				>
					기본버튼
				</Button>
			</div>
		</div>
	);
}

export default App;

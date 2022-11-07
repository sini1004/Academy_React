import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";

function App() {
	return (
		<>
			<Header />
			<Main>
				<Slider />
				{/* <Image attr="section nexon container" /> */}
			</Main>
			<Footer />
		</>
	);
}

export default App;

// https://github.com/webstoryboy/study-react1/tree/main/src/components

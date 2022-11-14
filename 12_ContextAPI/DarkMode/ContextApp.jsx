import React, { useContext } from "react";
import "./ContextApp.css";
import { DarkModeContext, DarkModeProvider } from "./DarkModeContext";

export default function ContextApp() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

function Header() {
	return <header className="header">HEADER</header>;
}

function Main() {
	return (
		<main className="main">
			----MAIN----
			<Profile />
		</main>
	);
}

function Profile() {
	return (
		<div>
			-PROFILE
			<User />
		</div>
	);
}

function User() {
	return (
		<div>
			--UESR <Products />
		</div>
	);
}

function Products() {
	return (
		<DarkModeProvider>
			-products <ProductDetail />
		</DarkModeProvider>
	);
}

function ProductDetail() {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext); //객체로 받아옴
	return (
		<div>
			--ProductDetail
			<p>
				DarkMode :
				{darkMode ? (
					<span style={{ backgroundColor: "black", color: "white" }}>
						darkMode
					</span>
				) : (
					"lightMode"
				)}
			</p>
			<button onClick={() => toggleDarkMode()}>Toggle</button>
		</div>
	);
}

function Footer() {
	return <div className="footer">FOOTER</div>;
}

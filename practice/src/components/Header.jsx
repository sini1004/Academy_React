import React from "react";

const Header = (props) => {
	return (
		<header>
			<div className="header_inner">
				<div className="header_logo">
					<a href="">
						web <em>site</em>
					</a>
				</div>
				{/* header end */}
				<nav className="header_menu">
					<ul>
						<li>
							<a href="">MENU1</a>
						</li>
						<li>
							<a href="">MENU2</a>
						</li>
						<li>
							<a href="">MENU3</a>
						</li>
						<li>
							<a href="">MENU4</a>
						</li>
						<li>
							<a href="">MENU5</a>
						</li>
					</ul>
				</nav>
				{/* nav end */}
				<div className="header_member">
					<a href="">로그인</a>
				</div>
				<div className="header_ham">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;

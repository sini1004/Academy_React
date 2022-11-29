import React from "react";

const Header = (props) => {
	const menu = ['menu1','menu2','menu3','menu4'];
	const menuList = menu.map((i) => (<li>{i}</li>));
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
						{menuList}
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

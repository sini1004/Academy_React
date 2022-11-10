import React from "react";

const Header = ({ filters, filter, onFilterChange }) => {
	return (
		<header>
			<ul>
				{filters.map((value, index) => (
					<li key={index}>
						<button onClick={() => onFilterChange(value)}>{value}</button>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;

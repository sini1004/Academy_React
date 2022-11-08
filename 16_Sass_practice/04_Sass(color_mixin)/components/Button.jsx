import React from "react";
import "./Button.scss";
import classNames from "classnames"; //설치한 classNames 모듈 불러옴

const Button = ({ children, size, color }) => {
	return (
		<button className={classNames("Button", size, color)}>{children}</button>
	);
	// return <button className={["Button", size]}>{children}</button>;
};

Button.defaultProps = {
	size: "medium",
	color: "indigo",
};

export default Button;

/**
 * className={["Button", size].join(" ")}
 * className={`Button ${size}`}
 */

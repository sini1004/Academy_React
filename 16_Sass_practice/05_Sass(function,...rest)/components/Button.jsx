import React from "react";
import "./Button.scss";
import classNames from "classnames"; //설치한 classNames 모듈 불러옴

const Button = ({
	children,
	size,
	color,
	outline,
	fullWidth,
	// onClick,
	// onMouseMove,
	...rest //받아올것이 많으면 rest사용
}) => {
	return (
		<button
			className={classNames("Button", size, color, { outline, fullWidth })}
			// onClick={onClick}
			// onMouseMove={onMouseMove}
			{...rest}
		>
			{children}
		</button>
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

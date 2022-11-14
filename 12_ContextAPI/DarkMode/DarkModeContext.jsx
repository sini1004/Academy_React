import React, { useState, creactContext } from "react";

export const DarkModeContext = creactContext();
//데이터를 콘텍스트에 담고 있음 (컴포넌트처럼 쓰임)

//데이터를 가지고 보여주고 있는 우산 역할(부모 우산 컴포넌트)
export function DarkModeProvider({ children }) {
	const [drakMode, setDarkMode] = useState(false);
	//다크모드인지 아닌지 기억하는 상태/초기값은 다크모드가 아닌 상태
	const toggleDarkMode = () => {
		setDarkMode((mode) => !mode);
	};

	return (
		<DarkModeContext.Provider value={{ drakMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

//컨텍스트(DarkModeContext)에는 내장 프로퍼티 Provider가 있음.

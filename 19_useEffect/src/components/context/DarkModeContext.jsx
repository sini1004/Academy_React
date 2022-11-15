import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext(); //아래 훅으로 바꿈 - export 필요없음

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode((prev) => !prev);
	return (
		<>
			<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
				{children}
			</DarkModeContext.Provider>
		</>
	);
}

//Hooks
export const useDarkMode = () => useContext(DarkModeContext);

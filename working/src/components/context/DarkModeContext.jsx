import { useEffect } from 'react';
import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext(); //아래 훅으로 바꿈 - export 필요없음

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = (isDark) => {
		setDarkMode(!isDark);
		updateDarkMode(!isDark);
	};

	//https://tailwindcss.com/docs/dark-mode  상태유지 부분 복사
	//제일 처음 마운트(로딩)될 때  최종 상태가 다크모드인지 아닌지 판단하고 그대로 초기값 설정

	useEffect(()=>{
		const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		setDarkMode(isDark);
		updateDarkMode(isDark);
	},[]); //처음 로딩될 때만 작동함
	

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


//다크모드가 트루였을 때 제일 상위 엘리먼트에 dark 클라스를 넣어준다.
function updateDarkMode(darkMode){
	if(darkMode){
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}

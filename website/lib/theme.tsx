import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("system");
	const [dark, setDark] = useState(false);

	useEffect(() => {
		let defaultTheme = window.matchMedia("(prefers-color-scheme: light)")
			.matches
			? "light"
			: "dark";
		setTheme(localStorage.themePrettyU || "system");
		setDark(localStorage.themePrettyU === "dark" || defaultTheme === "dark");
	}, []);

	useEffect(() => {
		if (theme !== "system") {
			localStorage.themePrettyU = theme;
			setDark(theme === "dark");
		} else {
			localStorage.removeItem("themePrettyU");
			setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, dark, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

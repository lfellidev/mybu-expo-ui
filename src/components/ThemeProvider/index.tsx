import React, { createContext, useContext } from "react";
import type { ThemeProviderTypes } from "./types";
import { defaultTheme } from "./defaultTheme";



const ThemeContext = createContext(defaultTheme);


const ThemeProvider: React.FC<ThemeProviderTypes> = ({
	theme = {},
	children,
}) => {
	const mergedTheme = { ...defaultTheme, ...theme };
	return (
		<ThemeContext.Provider value={mergedTheme}>
			{children}
		</ThemeContext.Provider>
	);
};


const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };

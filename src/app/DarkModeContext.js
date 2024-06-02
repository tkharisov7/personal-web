"use client";

import React, { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const html = document.querySelector('html');

		const handleChange = (e) => {
			setDarkMode(e.matches);
			if (e.matches) {
				html.classList.add('dark');
			} else {
				html.classList.remove('dark');
			}
		};

		handleChange(mediaQuery);
		mediaQuery.addListener(handleChange);

		return () => {
			mediaQuery.removeListener(handleChange);
		};
	}, []);

	const toggleDarkMode = () => {
		const html = document.querySelector('html');
		if (darkMode) {
			html.classList.remove('dark');
		} else {
			html.classList.add('dark');
		}
		setDarkMode(!darkMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeContext;

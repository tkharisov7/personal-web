"use client";

import React, { useContext } from 'react';
import DarkModeContext from '../DarkModeContext';

export default function DarkModeToggle() {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	return (
		<button
			onClick={toggleDarkMode}
			className="fixed top-4 right-4 p-1 text-white bg-black rounded-full"
			style={{ height: "2rem", width: "2rem", borderRadius: "50%" }}
		>
			{darkMode ? "🌞" : "🌚"}
		</button>
	);
}

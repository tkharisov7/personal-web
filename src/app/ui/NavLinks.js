"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import DarkModeToggle from "./DarkModeToggle";
import { useContext } from "react";	
import DarkModeContext from "../DarkModeContext";

const links = [
	{ name: "Main", href: "/" },
	{ name: "CV", href: "/cv" },
	{ name: "Blog", href: "/blog" },
	];

export default function NavLinks() {
	const pathname = usePathname();
	const { darkMode } = useContext(DarkModeContext);
	return (
		<nav className={clsx(
			"fixed top-0 left-0 right-0 shadow-md flex justify-between items-center h-16 px-4",
			darkMode ? 'bg-gray-900' : 'bg-gray-100'
		)}>
		<div className="flex-grow flex items-center w-full ">
			{links.map((link) => {
				return (
				<Link 
				key={link.name} 
				href={link.href} 
				className={clsx(
					"text-lg px-4 nav-link",
					{
						"font-bold": pathname.includes(link.href) && link.href !== "/" || pathname === link.href,
					}
				)}
				>
					<p>{link.name}</p>
				</Link>
				);
				})}
			</div>	
			<DarkModeToggle />
		</nav>
	);
}

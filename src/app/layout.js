import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "./ui/NavLinks";
import { DarkModeProvider } from "./DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Timur Kharisov personal website",
	description:
		"Personal website created from scratch using Next.js, Tailwind CSS, and React for development. Hosted on Vercel.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DarkModeProvider>
					<NavLinks />
					{children}
				</DarkModeProvider>
			</body>
		</html>
	);
}

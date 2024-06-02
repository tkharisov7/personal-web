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
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<DarkModeProvider>
					<NavLinks />
					{children}
					<footer className="footer">
						<p>© 2024 Timur Kharisov. Website code is available at <a href="github.com/tkharisov7/personal-website" className="text-blue-500">GitHub</a>.</p>
						<p>This site was created using Next.js, Tailwind CSS, and React, and is hosted on Vercel.</p>
					</footer>
				</DarkModeProvider>
			</body>
		</html>
	);
}

"use client";

import Image from "next/image";
import React from "react";

function BioText() {
	 return (
		<div className="text-center lg:text-left px-4 lg:px-0">
			<h1 className="text-4xl font-bold">Timur Kharisov</h1>
			<p className="text-lg max-w-2xl mx-auto lg:mx-0">
				My name is <strong>Timur Kharisov</strong> and I am a frontend developer.
			</p>
		</div>
	);
}

function ProfileImage() {
	return (
		<div className="relative flex items-center justify-center w-48 h-48 overflow-hidden rounded-full lg:w-64 lg:h-64 mx-auto lg:mx-0 mb-4 lg:mb-0">
			<Image
				src="/profile.jpeg"
				alt="Profile Image"
				width={256}
				height={256}
				className="rounded-full"
			/>
		</div>
	);
}

function ContactsList() {
	const contacts = [
		{ logo: "email", text: "tkharisov7 at gmail dot com (personal)\nkharisov dot tsh at phystech dot edu (university)" },
		{ logo: "github", text: <a href="https://github.com/tkharisov7">@tkharisov7</a> },
		{ logo: "linkedin", text: <a href="https://www.linkedin.com/in/tkharisov7">@tkharisov7</a> },
		{ logo: "twitter", text: <a href="https://twitter.com/normisdeath">@normisdeath</a> },
		{ logo: "telegram", text: <a href="https://t.me/tkharisov7">@tkharisov7</a> },
	];

	return (
		<div className="flex flex-col gap-4 mt-8 lg:mt-4">
			{contacts.map((contact, index) => (
				<div key={index} className="flex items-center gap-4">
					<Image
						src={`/contacts/${contact.logo}.png`}
						alt={`${contact.logo} logo`}
						width={24}
						height={24}
						style={{ filter: "invert(var(--icon-color-invert))" }}
					/>
					<p className="m-0">{contact.text}</p>
				</div>
			))}
		</div>
	);
}

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-start items-center justify-start p-24">
			<div className="z-10 max-w-5xl w-full flex flex-col items-center lg:flex-row lg:gap-16 lg:space-x-8">
				<ProfileImage />
				<BioText />
			</div>
			<div className="z-10 max-w-5xl w-full flex flex-col items-center mt-12">
				<ContactsList />
			</div>
		</main>
	);
}

"use client"
import React, { useContext }  from "react";
import CollapsibleList from './CollapsibleList';
import cvData from './cvData';

export default function CV() {
		return (
			<main className="flex min-h-screen flex-col items-start items-center justify-start p-24">
				<CollapsibleList title="Education" items={cvData.education} />
				<CollapsibleList title="Experience" items={cvData.experience} />
				<CollapsibleList title="Projects" items={cvData.projects} />
				<CollapsibleList title="Awards" items={cvData.awards} />
			</main>
		);
	}
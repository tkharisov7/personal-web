"use client";

import React, { useState } from 'react';

const CollapsibleList = ({ title, items }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleList = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="w-full my-2">
			<button className="w-full cursor-pointer p-4 text-2xl font-bold text-left flex items-center" onClick={toggleList}>
				<span className={`mr-2 transform transition-transform ${isOpen ? 'rotate-60' : 'rotate-0'}`}>{isOpen ? '▼' : '►'}</span>
				{title}
			</button>
			{isOpen && (
				<div className="p-4">
					{items.map((item, index) => (
						<div key={index} className="my-4 text-left">
							<h3 className="text-xl font-bold mb-1">{item.title || item.institution || item.company}</h3>
							<p>{item.degree || item.role || item.description}</p>
							<p>{item.startDate} - {item.endDate || item.year}</p>
							{item.details && <p>{item.details}</p>}
							{item.link && <a href={item.link} className="text-blue-500">Learn more</a>}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CollapsibleList;

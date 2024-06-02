"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';

export default function Blog() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
				const res = await fetch('/api/posts');
				if (res.ok) {
					const data = await res.json();
					setPosts(data);
				} else {
					console.error('Failed to fetch posts:', res.statusText);
				}
		}
		fetchPosts();
	}, []);


	return (
		<main className="flex min-h-screen flex-col items-start items-center justify-start p-24">
		<ul className="w-full">
				{posts.map((post) => (
					<li key={post.filename} className="mb-4">
						<Link 
						href={`/blog/${post.filename}`}
						className="text-2xl font-bold text-left block mt-8 transition-transform transform hover:scale-105"
						>
						<p>{post.title}</p>
						</Link>
					</li>
				))}
		</ul>
		</main>
	);
}

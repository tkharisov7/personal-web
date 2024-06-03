"use client";

import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect, useContext } from 'react';
import './markdown.css';
import Link from 'next/link';

export default function BlogPost() {
	const { slug } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		if (slug) {
			async function fetchContent() {
				const res = await fetch(`/api/getPost?filename=${slug}`);
				if (res.ok) {
					const data = await res.json();
					setPost(data.content);
				} else {
					console.error('Failed to fetch post:', res.statusText);
				}
			}
			fetchContent();
		}
	}, [slug]);

	return (
		<main className="flex flex-col items-start justify-start min-h-screen p-8">
			<Link href="/blog"
			className="text-xl font-bold hover:underline mr-4">
					<button className="text-xl font-bold hover:underline mr-4 mt-4">
						&larr; Back
					</button>
				</Link>
			<article className="markdown w-full text-left mt-8">
				{post ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{post}</ReactMarkdown> : <p>Loading...</p>}
			</article>
		</main>
	);
}

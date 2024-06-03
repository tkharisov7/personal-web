import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
	const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
	console.log('Posts Directory:', postsDirectory);
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, 'utf8');

		const { data, content } = matter(fileContents);

		const match = content.match(/^#\s+(.+)/m);
		const title = match ? match[1] : 'Untitled'; 

		return {
			filename: filename.replace('.md', ''),
			title: data.title || title,
		};
	});

	res.status(200).json(posts);
}

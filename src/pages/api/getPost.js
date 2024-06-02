import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
	const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
	const { filename } = req.query; 

	if (!filename) {
		return res.status(400).json({ error: 'Filename is required' });
	}

	const filePath = path.join(postsDirectory, `${filename}.md`);
	  
	if (!fs.existsSync(filePath)) {
		return res.status(404).json({ error: 'Post not found' });
	}

	const fileContents = fs.readFileSync(filePath, 'utf8');
	  
	const { data, content } = matter(fileContents);

	res.status(200).json({ data, content });
}

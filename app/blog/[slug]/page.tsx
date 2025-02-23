import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';


const MarkdownImage = (props: any) => {
  let { src, alt, ...rest } = props;
  if (src && !src.startsWith('/') && !src.startsWith('http')) {
    src = '/' + src;
  }
  return <img src={src} alt={alt} {...rest} />;
};

const MarkdownVideo = (props: any) => {
  let { src, ...rest } = props;
  if (src && !src.startsWith('/') && !src.startsWith('http')) {
    src = '/' + src;
  }
  return <video src={src} controls {...rest} />;
};

export async function generateStaticParams() {
  const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');
  const filenames = await fs.readdir(blogsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export const metadata = {
  title: 'Blog Post',
  description: 'A dynamic blog post page rendered from Markdown.',
};

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
 
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return (
      <article className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(data.date).toLocaleDateString()}
        </p>
        <ReactMarkdown
          components={{
            img: MarkdownImage,
            video: MarkdownVideo,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    );
  } catch (error) {
    notFound();
  }
}

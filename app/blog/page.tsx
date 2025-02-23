import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import BlogCard from '@/components/blogcard'; 

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  description?: string;
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');
  const filenames = await fs.readdir(blogsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(blogsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || 'Untitled',
        date: data.date || '',
        description: data.description || '',
        summary: data.summary || '',
        tags: data.tags || [],
      };
    })
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <section id="blog" className="mb-16">
      <div className="text-center mb-10">
        <span className="inline-block rounded-full px-4 py-1 text-sm font-medium bg-primary text-primary-foreground">
          My Blog
        </span>
        <h2 className="text-vprimary text-4xl md:text-5xl font-bold mt-4">
          Latest Articles
        </h2>
        <p className="text-muted-foreground mt-2">
          Read my latest thoughts, tutorials, and case studies.
        </p>
      </div>

      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-6">
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

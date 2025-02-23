import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { BlogPost } from "@/types";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function PostPage(
  props: { 
    params: { slug: string }; 
    searchParams: URLSearchParams 
  }
): Promise<JSX.Element> {
  const { slug } = props.params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: BlogPost = {
    title: data.title || "No Title",
    date: data.date || "No Date",
    summary: data.summary || "",
    slug,
  };

  return (
    <article className="max-w-3xl mx-auto my-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-muted-foreground">{post.date}</p>
      <div className="mt-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

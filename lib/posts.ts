// lib/posts.ts
import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { BlogPost } from "@/types";

export async function getPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: BlogPost[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(/\.md$/, ""),
    } as BlogPost;
  });

  return posts;
}

"use client";

import React, { createContext } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Card } from "@heroui/react";
import { Chip } from "@heroui/react";

import { BlogPost } from "@/types";
export const BlogContext = createContext<BlogPost[]>([]);

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <BlogContext.Provider value={posts}>
      <section className="mb-16" id="blog">
        <div className="text-center mb-10">
          <Chip color="primary" variant="flat">
            <span className="inline-flex items-center gap-2 p-1">My Blog</span>
          </Chip>
          <h2 className="text-vprimary text-4xl md:text-5xl font-bold mt-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground mt-2">
            Read my latest thoughts, tutorials, and case studies.
          </p>
        </div>
        <div className="grid gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="p-4">
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="mt-2">{post.date}</p>
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center mt-4">
                  Read More{" "}
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </BlogContext.Provider>
  );
}

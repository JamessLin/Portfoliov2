"use client"
import Link from 'next/link';
import { Card, Snippet } from '@heroui/react';
import { FaArrowRight } from 'react-icons/fa6';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  description?: string;
  image?: string;  
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card key={post.title} className="overflow-hidden group flex flex-col border border-transparent rounded-xl hover:border-gray-300 transition-all duration-200 ease-in-out">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-video relative overflow-hidden">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
            />
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/blog/${post.slug}`} className="block">
            <h3 className="text-xl font-semibold text-vprimary">{post.title}</h3>
          </Link>
          <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <p className="text-muted-foreground mb-4">{post.summary}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag) => (
            <Snippet
              key={tag}
              hideCopyButton
              hideSymbol
              className="text-xs text-vprimary bg-secondary bg-opacity-10 px-2 py-1 rounded-md"
              color="default"
            >
              {tag}
            </Snippet>
          ))}
        </div>

        <div className="mt-auto flex gap-1">
          <Link
            href={`/blog/${post.slug}`}
            className="bg-vprimary text-secondary flex items-center px-2 py-1 text-xs rounded-md transition-colors hover:bg-primary-700"
          >
            <FaArrowRight className="mr-1" /> Read More
          </Link>
        </div>
      </div>
    </Card>
  );
}

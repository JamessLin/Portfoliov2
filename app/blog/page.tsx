// "use client"

// import React from "react";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import { Card , Snippet} from "@heroui/react";

// const blogPosts = [
//   {
//     title: "",
//     date: "",
//     summary:
//       "",
//     image: "",
//     tags: ["", "", ""],
//     link: "",
//   },
//   {
//     title: "",
//     date: "",
//     summary:
//       "",
//     image: "",
//     tags: ["", "", ""],
//     link: "",
//   },

// ];

// export default function BlogPage() {
//   return (
//     <section id="blog" className="mb-16">
//       <div className="text-center mb-10">
//         <span className="inline-block rounded-full px-4 py-1 text-sm font-medium bg-primary text-primary-foreground">
//           My Blog
//         </span>
//         <h2 className="text-vprimary text-4xl md:text-5xl font-bold mt-4">
//           Latest Articles
//         </h2>
//         <p className="text-muted-foreground mt-2">
//           Read my latest thoughts, tutorials, and case studies.
//         </p>
//       </div>

//       {/* <div className="grid md:grid-cols-2 gap-6">
//         {blogPosts.map((post) => (
//           <Card key={post.title} className="overflow-hidden group flex flex-col">
//             <Link href={post.link} className="block">
//               <div className="aspect-video relative overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//             </Link>

//             <div className="p-6 flex flex-col flex-grow">
//               <div className="flex justify-between items-start mb-2">
//                 <Link href={post.link} className="block">
//                   <h3 className="text-xl font-semibold">{post.title}</h3>
//                 </Link>
//                 <span className="text-sm text-muted-foreground">{post.date}</span>
//               </div>
//               <p className="text-muted-foreground mb-4">{post.summary}</p>
//               <div className="flex flex-wrap gap-2">
//                 {post.tags.map((tag) => (
//                   <Snippet
//                     key={tag}
//                     hideSymbol
//                     hideCopyButton
//                     color="default"
//                     className="text-xs text-primary bg-secondary"
//                   >
//                     {tag}
//                   </Snippet>
//                 ))}
//               </div>

//               <div className="mt-auto mb-2">
//                 <Link
//                   href={post.link}
//                   className="bg-black text-white flex items-center px-2 py-1 text-xs rounded-md hover:bg-gray-800 transition-colors"
//                 >
//                   Read More <FaArrowRight className="ml-1" />
//                 </Link>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div> */}
//     </section>
//   );
// }

import BlogList from "./Bloglist";

import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogList posts={posts} />;
}

import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import Link from "next/link";
import React from "react";

export default async function Blog() {
  const generatePost = getAllPosts();
  const latestPosts = generatePost.slice(0, 3);

  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-6">
        <Title subtitle={`${generatePost.length} posts published`}>
          Latest Blogs
        </Title>
        <Link
          href={"/blog"}
          className="text-xs text-zinc-500 hover:text-white transition-all duration-300 flex items-center gap-2 group hover:gap-3"
        >
          view all
          <span className="transform group-hover:translate-x-1 transition-all duration-300">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {latestPosts.map((post, index) => (
          <div key={post.slug} className="transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/10">
            <PostCard 
              post={post} 
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {generatePost.length > 3 && (
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm text-zinc-500 hover:text-white transition-all duration-300 px-6 py-2 rounded-full hover:bg-zinc-800/30"
          >
            See all {generatePost.length} posts
          </Link>
        </div>
      )}
    </section>
  );
}

import { formatDate } from "@/libs/Blog/formatDate";
import {
  components,
  getAllPosts,
  getPostBySlug,
  mdxOptions,
} from "@/libs/Blog/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Comment from "./content/Comment";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  if (!params || !(await params).slug) {
    notFound();
  }
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <section className="max-w-2xl mx-auto px-4">
      <header className="mb-16">
        {/* Breadcrumb navigation */}
        <nav className="mb-8">
          <ul className="flex items-center space-x-2 text-sm text-zinc-400">
            <li>
              <Link href={"/"} className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={"/blog"} className="hover:text-emerald-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
          </ul>
        </nav>

        {/* Post title */}
        <h1 className="text-4xl font-bold tracking-tight mb-8">{post.title}</h1>

        {/* Post metadata */}
        <div className="flex items-center justify-between">
          <Link
            className="text-sm px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 hover:bg-emerald-900/30 hover:text-emerald-400 transition-colors"
            href={`/blog/tags/${post.tags}`}
          >
            #{post.tags}
          </Link>
          <div className="text-sm text-zinc-400 space-x-2">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </header>

      {/* Article content */}
      <article className="prose prose-invert prose-zinc max-w-none
        prose-headings:text-zinc-100
        prose-p:text-zinc-300
        prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300
        prose-strong:text-zinc-200
        prose-code:text-emerald-300 prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
        prose-img:rounded-lg
        prose-hr:border-zinc-800
        prose-blockquote:border-l-emerald-500 prose-blockquote:text-zinc-400
        prose-li:text-zinc-300
      ">
        <MDXRemote
          source={(await post).content}
          options={mdxOptions}
          components={components}
        />
      </article>

      {/* Article footer */}
      <footer className="mt-16 mb-12 text-center">
        <p className="text-sm text-zinc-400">
          Thanks for reading
          <span className="block text-zinc-300 mt-1">{post.title}</span>
        </p>
      </footer>

      <hr className="border-zinc-800 mb-12" />
      <Comment />
    </section>
  );
}

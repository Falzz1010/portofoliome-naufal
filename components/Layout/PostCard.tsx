import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/libs/Blog/formatDate";
import { Clock, Calendar, ArrowRight } from "react-feather";

interface PostCardProps {
  post: Post;
  variant?: "default" | "compact";
  priority?: boolean;
}

export default function PostCard({ 
  post, 
  variant = "default",
  priority = false 
}: PostCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block p-4 hover:bg-[#18181b] rounded-lg transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{post.emoji}</span>
            <div>
              <h3 className="font-medium group-hover:text-[#0e705e] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-400">{formatDate(post.date)}</p>
            </div>
          </div>
          <ArrowRight 
            size={16} 
            className="text-zinc-400 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`block border border-[#252529] bg-[#141417] rounded-xl hover:scale-[1.01] transition-all duration-200 ${
        priority ? "ring-1 ring-[#0e705e]/30" : ""
      }`}
    >
      <div className="p-5">
        <div className="flex gap-3">
          <div className={`h-14 w-14 border border-[#252529] ${
            priority ? "bg-[#0e705e]/10" : "bg-[#1a1a1e]"
          } rounded-xl flex items-center justify-center text-2xl`}>
            {post.emoji}
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-bold group-hover:text-[#0e705e] transition-colors">
                {post.title}
              </h2>
              {priority && (
                <span className="shrink-0 text-xs bg-[#0e705e]/20 text-[#0e705e] px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-400">
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
              <span className="text-sm bg-[#18181b] border border-[#252529] rounded px-2 py-0.5">
                # {post.tags}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

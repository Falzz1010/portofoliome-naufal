"use client";

import React from 'react';
import { createClient } from "@supabase/supabase-js";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/Skeleton";
import { ScrollArea } from "@/components/ScrollArea";
import useSWR from "swr";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Comment {
  id: string;
  content: string;
  author_name: string;
  created_at: string;
}

export default function Comment() {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [newComment, setNewComment] = React.useState("");
  const [authorName, setAuthorName] = React.useState("");
  const { slug } = useParams();

  const { isLoading, mutate } = useSWR(
    ["comments", slug],
    async () => {
      try {
        const { data, error } = await supabase
          .from("comments")
          .select("*")
          .eq("page_slug", slug)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Supabase error:", error);
          return []; // Return empty array instead of throwing
        }

        return data || [];
      } catch (err) {
        console.error("Failed to fetch comments:", err);
        return []; // Return empty array on any error
      }
    },
    {
      revalidateOnMount: true,
      onSuccess: (data) => setComments(data),
      onError: (err) => {
        console.error("SWR error:", err);
        setComments([]);
      }
    }
  );

  async function handleSubmitComment(e: React.FormEvent) {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from("comments")
        .insert([
          {
            content: newComment,
            author_name: authorName,
            page_slug: slug,
          },
        ]);

      if (error) {
        console.error("Failed to submit comment:", error);
        // You might want to show an error message to the user here
        return;
      }

      setNewComment("");
      setAuthorName("");
      await mutate();
    } catch (err) {
      console.error("Error submitting comment:", err);
      // You might want to show an error message to the user here
    }
  }

  return (
    <section className="mt-12 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-zinc-100 mb-8">Discussion</h3>
      
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="rounded-lg border border-[#30363d] bg-[#0d1117] overflow-hidden">
          <div className="p-4">
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Name"
              className="w-full mb-3 px-3 py-2 rounded-md bg-[#161b22] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all text-zinc-100 placeholder-zinc-500 text-sm"
              required
              minLength={2}
              maxLength={50}
            />
            
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Leave a comment"
              className="w-full px-3 py-2 rounded-md bg-[#161b22] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all text-zinc-100 placeholder-zinc-500 min-h-[100px] text-sm resize-y"
              required
              minLength={3}
              maxLength={1000}
            />
          </div>

          <div className="px-4 py-3 bg-[#161b22] border-t border-[#30363d] flex justify-end">
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
            >
              Comment
            </button>
          </div>
        </div>
      </form>

      <ScrollArea className="h-[600px]">
        <div className="space-y-4 pr-4">
          {isLoading ? (
            // Skeleton loading
            [...Array(3)].map((_, i) => (
              <div key={i} className="p-4 rounded-lg bg-[#1a1a1d] border border-[#2a2a2d]">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-4 w-24 rounded" />
                  <Skeleton className="h-4 w-32 rounded" />
                </div>
                <Skeleton className="h-4 w-full rounded mb-2" />
                <Skeleton className="h-4 w-2/3 rounded" />
              </div>
            ))
          ) : comments.length === 0 ? (
            <div className="text-center py-12 border border-[#30363d] rounded-lg">
              <p className="text-zinc-400 text-sm">No comments yet</p>
              <p className="text-zinc-500 text-xs mt-1">Be the first to start the discussion</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="group rounded-lg border border-[#30363d] bg-[#0d1117] overflow-hidden"
              >
                <div className="px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#30363d] flex items-center justify-center">
                      <span className="text-xs text-zinc-300">
                        {comment.author_name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="font-medium text-sm text-zinc-200">{comment.author_name}</div>
                    <span className="text-xs text-zinc-500">•</span>
                    <time className="text-xs text-zinc-500">
                      {comment.created_at}
                    </time>
                  </div>
                </div>
                <div className="p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {comment.content}
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { format } from "date-fns";
import Title from "@/components/Layout/Title";
import { Skeleton } from "@/components/Skeleton";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface GuestbookEntry {
  id: string;
  content: string;
  author_name: string;
  created_at: string;
}

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setIsLoading(true);
    try {
      const { data, error: supabaseError } = await supabase
        .from("comments")
        .select("*")
        .eq("page_slug", "guestbook")
        .order("created_at", { ascending: false });

      if (supabaseError) {
        setError(supabaseError.message);
        return;
      }
      
      if (data) setEntries(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      const { error: supabaseError } = await supabase
        .from("comments")
        .insert([
          {
            content: newEntry,
            author_name: authorName,
            page_slug: "guestbook",
          },
        ]);

      if (supabaseError) {
        setError(supabaseError.message);
        return;
      }

      setNewEntry("");
      fetchEntries();
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      <Title>Guestbook</Title>
      
      <div className="mt-8">
        <div className="mb-8">
          <p className="text-zinc-400 text-sm">
            Leave a message for future visitors. Share your thoughts, or just say hi! ✨
          </p>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="border border-[#2a2a2d] rounded-lg overflow-hidden">
              <div className="p-2 bg-[#1a1a1d]">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3 py-1.5 rounded bg-[#141417] border border-[#2a2a2d] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-100 placeholder-zinc-500 text-sm"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>
              
              <textarea
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Write your message..."
                className="w-full px-4 py-3 bg-[#141417] border-t border-[#2a2a2d] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-100 placeholder-zinc-500 min-h-[100px] resize-y text-sm"
                required
                minLength={3}
                maxLength={1000}
              />

              <div className="p-2 bg-[#1a1a1d] border-t border-[#2a2a2d] flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Signing...
                    </span>
                  ) : (
                    "Sign Guestbook"
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </form>
        </div>

        <div className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-hide hover:scrollbar-default">
          {isLoading ? (
            // Skeleton loading
            [...Array(3)].map((_, i) => (
              <div key={i} className="p-4 rounded-lg bg-[#141417] border border-[#2a2a2d]">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-4 w-24 rounded" />
                  <Skeleton className="h-4 w-32 rounded" />
                </div>
                <Skeleton className="h-4 w-full rounded mb-2" />
                <Skeleton className="h-4 w-2/3 rounded" />
              </div>
            ))
          ) : entries.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-zinc-400 text-sm">No messages yet.</p>
              <p className="text-zinc-500 text-sm mt-1">Be the first to sign the guestbook!</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="group border border-[#2a2a2d] rounded-lg overflow-hidden"
              >
                <div className="bg-[#1a1a1d] px-4 py-2 flex items-center justify-between border-b border-[#2a2a2d]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#2a2a2d] flex items-center justify-center text-xs text-zinc-300">
                      {entry.author_name.charAt(0).toUpperCase()}
                    </div>
                    <div className="font-medium text-zinc-200 text-sm">{entry.author_name}</div>
                    <span className="text-zinc-500 text-sm">signed the guestbook</span>
                  </div>
                  <time className="text-xs text-zinc-500 tabular-nums">
                    {format(new Date(entry.created_at), "MMM d, yyyy")}
                  </time>
                </div>
                <div className="p-4 bg-[#141417] text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {entry.content}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

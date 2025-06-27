"use client";
import React, { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
};

export default function GithubRepositories({ username, repoCount = 4 }: { username: string; repoCount?: number }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${repoCount}`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, [username, repoCount]);

  if (loading) return <div className="text-zinc-400">Loading repositories...</div>;
  if (!repos || repos.length === 0) return <div className="text-zinc-400">No repositories found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="flex flex-col justify-between bg-[#18181b] border border-[#252529] rounded-xl p-4 shadow-sm hover:shadow-lg hover:border-[#0e705e] transition-all duration-300 min-h-[120px] max-h-[140px] overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-1">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#0e705e" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
            <span className="font-bold text-base text-[#0e705e] truncate" title={repo.name}>{repo.name}</span>
          </div>
          <div className="text-zinc-300 text-xs mb-2 line-clamp-2 min-h-[32px] max-h-[32px] overflow-hidden" title={repo.description || "No description"}>
            {repo.description || "No description"}
          </div>
          <div className="flex justify-between items-end mt-auto">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-[#0e705e] text-white hover:bg-[#064035] transition-colors duration-200 shadow-sm"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3z"/><path fill="#fff" d="M5 5v14h14v-7h-2v5H7V7h5V5z"/></svg>
              Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
} 
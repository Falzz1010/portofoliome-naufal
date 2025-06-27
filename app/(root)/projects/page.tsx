import Title from "@/components/Layout/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  const project = [
    {
      id: 1,
      label: "Chat Anon",
      image: "Thumbnail.png",
      summary: "Chat Anonim adalah platform chat anonim yang memungkinkan pengguna untuk berkomunikasi secara bebas tanpa perlu mengungkapkan identitas mereka",
      tags: ["ReactJS","Tailwindcss"],
      link: "",
      status: "Completed",
      demoLink: "",
    },
    {
      id: 2,
      label: "Chat Anon",
      image: "Thumbnail.png",
      summary: "Chat Anonim adalah platform chat anonim yang memungkinkan pengguna untuk berkomunikasi secara bebas tanpa perlu mengungkapkan identitas mereka",
      tags: ["NextJS"],
      link: "",
      status: "In Progress",
      demoLink: "",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 md:px-0">
      {/* Header Section */}
      <div className="mb-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500/30 to-emerald-900/30 mb-4 animate-fade-in">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path fill="#0e705e" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
        </div>
        <Title>All Projects</Title>
        <p className="text-zinc-400 mt-2 text-base max-w-2xl mx-auto animate-fade-in-up">
          Berikut adalah daftar lengkap project yang pernah saya kerjakan, baik yang sudah selesai maupun yang masih dalam proses pengembangan.
        </p>
      </div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {project.map((p, idx) => (
          <div
            key={p.id}
            className="group relative bg-gradient-to-br from-zinc-900/60 to-zinc-950/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800/40 hover:border-emerald-600/60 transition-transform duration-300 ease-out hover:shadow-2xl hover:shadow-emerald-900/30 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {/* Status Badge */}
            <div className={`absolute top-6 right-6 px-4 py-2 rounded-lg text-xs font-semibold shadow-lg z-10 border-2 transition-transform duration-200
              ${p.status === "Completed" 
                ? "bg-emerald-950/90 text-emerald-300 border-emerald-500 shadow-emerald-900/30" 
                : "bg-amber-950/90 text-amber-300 border-amber-500 shadow-amber-900/30"
              }
              group-hover:scale-105`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full animate-pulse
                  ${p.status === "Completed" 
                    ? "bg-emerald-400" 
                    : "bg-amber-400"
                  }`} 
                />
                {p.status}
              </div>
            </div>
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-xl group/image">
              <Image
                src={`/assets/project/${p.image}`}
                alt={p.label}
                width={1000}
                height={100}
                className="border border-zinc-800/30 rounded-xl transition-all duration-300 ease-out group-hover/image:scale-[1.03] group-hover/image:brightness-110 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
            </div>
            {/* Project Info */}
            <div className="relative p-6 space-y-4">
              <h1 className="font-bold text-xl bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                {p.label}
              </h1>
              <p className="text-zinc-400 text-sm leading-relaxed tracking-wide min-h-[48px]">
                {p.summary}
              </p>
              <ul className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs bg-zinc-900/70 text-zinc-400 border border-zinc-700/30 rounded-full px-3 py-1 font-medium backdrop-blur-sm transition-all duration-300 hover:border-emerald-600/30 hover:text-emerald-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 pt-4">
                {p.demoLink ? (
                  <Link
                    href={p.demoLink}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-white transition-all duration-300 group"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#0e705e" d="M8 5v14l11-7z"/></svg>
                    Demo
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm text-zinc-500 cursor-not-allowed select-none">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#A0AEC0" d="M8 5v14l11-7z"/></svg>
                    Demo
                  </span>
                )}
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
                {p.link ? (
                  <Link
                    href={p.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-white transition-all duration-300 group"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#0e705e" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
                    Source
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm text-zinc-500 cursor-not-allowed select-none">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#A0AEC0" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
                    Source
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
import Title from "@/components/Layout/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
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
    <section>
      <div className="flex justify-between items-center mb-8">
        <Title>Projects</Title>
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all duration-300"
        >
          view all
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {project.map((p) => (
          <div
            key={p.id}
            className="group relative bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 
              backdrop-blur-md rounded-2xl overflow-hidden
              border border-zinc-800/30 hover:border-emerald-600/30
              transition-transform duration-300 ease-out
              hover:shadow-2xl hover:shadow-emerald-900/20
              hover:-translate-y-1"
          >
            <div className="relative p-6 space-y-5">
              <div className={`absolute top-6 right-6 px-4 py-2 rounded-lg text-sm font-semibold
                shadow-lg z-10 border-2 transition-transform duration-200
                ${p.status === "Completed" 
                  ? "bg-emerald-950 text-emerald-300 border-emerald-500 shadow-emerald-900/30" 
                  : "bg-amber-950 text-amber-300 border-amber-500 shadow-amber-900/30"
                }
                hover:scale-105`}
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

              <div className="relative overflow-hidden rounded-xl group/image">
                <Image
                  src={`/assets/project/${p.image}`}
                  alt={p.label}
                  width={1000}
                  height={100}
                  className="border border-zinc-800/30 rounded-xl 
                    transition-all duration-300 ease-out
                    group-hover/image:scale-[1.02] group-hover/image:brightness-110
                    group-hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
              </div>

              <div className="relative space-y-3">
                <h1 className="font-bold text-xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  {p.label}
                </h1>
                <p className="text-zinc-400 text-sm leading-relaxed tracking-wide">
                  {p.summary}
                </p>
              </div>

              <div className="relative pt-5 flex justify-between items-center border-t border-zinc-800/30">
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs bg-zinc-900/70 text-zinc-400
                        border border-zinc-700/30 rounded-full 
                        px-3 py-1 font-medium backdrop-blur-sm
                        transition-all duration-300
                        hover:border-emerald-600/30 hover:text-emerald-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-4">
                  <Link
                    href={p.demoLink}
                    target="_blank"
                    className="relative text-sm text-zinc-400 hover:text-emerald-400 
                      transition-all duration-300 group/link"
                  >
                    Demo
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 
                      transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                  <Link
                    href={p.link}
                    target="_blank"
                    className="relative text-sm text-zinc-400 hover:text-emerald-400 
                      transition-all duration-300 group/link"
                  >
                    Source
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 
                      transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

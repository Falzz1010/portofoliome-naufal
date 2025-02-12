import Title from "@/components/Layout/Title";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <Title className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          About
        </Title>
        <Link
          href={"/resume"}
          className="px-4 py-2 rounded-full border border-zinc-700 text-sm text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300 ease-in-out"
        >
          View Resume →
        </Link>
      </div>
      <div className="space-y-12">
        <p className="text-zinc-400 leading-loose text-lg">
          Naufal Rizky {" "}
          <span className="text-white font-medium bg-gradient-to-r from-zinc-800 to-transparent px-2 py-1 rounded">
          Kediri, East Java, Indonesia ✅
          </span>. 
          A web developer and UI/UX Design 🧑‍💻. Exposed to the creative arts and sciences, always exploring how to combine aesthetics and functionality in every project.
           Striving to create intuitive, engaging, and innovative digital experiences, with a meaningful design touch. 🚀🎨.{" "}
          <span className="text-white font-medium bg-gradient-to-r from-zinc-800 to-transparent px-2 py-1 rounded">
          Front End & UI/UX Design who loves to create digital innovations. 🚀🎨
          </span>
        </p>
        <ul className="space-y-8">
          {[
            "In my spare time, I focus on free app and web app development as a way to keep learning and improving my skills.",
            "I'm always enthusiastic to work with others and contribute to various projects. If you have any ideas or need help, don't hesitate to contact me!",
            "If you find something interesting in my work or want to establish a collaboration, I am very open to creating something amazing with you!"
          ].map((text, index) => (
            <li key={index} className="group flex items-start gap-6 p-4 rounded-lg hover:bg-zinc-800/50 transition-all duration-300">
              <span className="text-zinc-500 mt-1 group-hover:text-zinc-300 transition-colors duration-300">
                →
              </span>
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

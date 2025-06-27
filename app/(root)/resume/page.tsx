import Title from "@/components/Layout/Title";
import Link from "next/link";
import { Download } from "react-feather";
import React from "react";
import Image from "next/image";
import { Linkedin, GitHub, Mail } from "react-feather";

export default function ResumePage() {
  const skills = {
    "Frontend Development": [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    "Backend Development": ["Node.js", "Express", "MongoDB"],
    "Development Tools": ["Git", "VS Code", "Figma"],
  };

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Building responsive and user-friendly web applications using modern technologies.",
      badge: "Remote"
    },
    // Tambahkan pengalaman lain di sini jika perlu
  ];

  const programmingIcons = ['⚛️', '{}', '()', '&&', '=>', '||', '<>', '*/'];

  // Reduce the number of floating icons for mobile
  const iconCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 20;

  const skillIcons: Record<string, string> = {
    "React.js": "⚛️",
    "Next.js": "⏭️",
    "TypeScript": "🟦",
    "Tailwind CSS": "🌬️",
    "Node.js": "🟩",
    "Express": "🚂",
    "MongoDB": "🍃",
    "Git": "🔧",
    "VS Code": "📝",
    "Figma": "🎨",
  };

  return (
    <div className="space-y-16 animate-fadeIn">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--background)' }} />
        {/* Optimize floating icons for mobile */}
        <div className="absolute inset-0 opacity-[0.07] md:animate-floatingIcons">
          {Array.from({ length: iconCount }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                color: 'var(--foreground)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float1 ${15 + Math.random() * 15}s linear infinite`,
                animationDelay: `${-Math.random() * 15}s`,
              }}
            >
              {programmingIcons[Math.floor(Math.random() * programmingIcons.length)]}
            </div>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <section className="md:animate-slideUp">
        <Title className="group flex items-center gap-4">
          <Image
            src="/assets/profil.jpg"
            alt="Profile Picture"
            width={48}
            height={48}
            className="rounded-full border border-emerald-500 shadow-md"
          />
          <span className="inline-block group-hover:animate-rotateIn">Resume</span>
        </Title>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mt-2">
          <p className="text-zinc-400 max-w-xl leading-relaxed hover:animate-tiltBounce">
            Frontend developer passionate about crafting delightful digital experiences. Focused on responsive, accessible, and high-performance web applications.
          </p>
          <Link
            href="/assets/resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-[#18181b]/50 backdrop-blur-sm border border-[#252529] rounded-lg hover:bg-[#202024] transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent group-hover:animate-shimmer bg-[length:200%_100%]" />
            <div className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent bottom-0 opacity-0 group-hover:opacity-100 transition-opacity group-hover:animate-expandWidth" />
            <div className="absolute inset-y-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Download size={16} className="group-hover:animate-bounce relative" />
            <span className="text-sm relative">Download CV</span>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="md:animate-slideUp [animation-delay:200ms]">
        <h2 className="text-xl font-bold mb-6 text-white/90 group">
          <span className="inline-block group-hover:animate-rotateIn">Experience</span>
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border border-[#252529] bg-[#141417]/50 backdrop-blur-sm p-6 rounded-xl hover:border-emerald-500/20 transition-colors duration-300 md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-emerald-500/10 overflow-hidden"
            >
              {/* Simplified gradient effects for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent hidden md:group-hover:animate-shimmer md:block bg-[length:200%_100%]" />
              <div className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="group-hover:animate-scaleIn flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-emerald-600/20 text-emerald-400 rounded-full font-semibold">{exp.badge}</span>
                  <h3 className="font-bold text-white/90">{exp.role}</h3>
                </div>
                <span className="text-sm text-zinc-500 group-hover:animate-glow">{exp.period}</span>
              </div>
              <p className="text-zinc-400 text-sm font-medium mt-1">{exp.company}</p>
              <p className="mt-2 text-zinc-300 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors relative">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="md:animate-slideUp [animation-delay:400ms]">
        <h2 className="text-xl font-bold mb-6 text-white/90 group">
          <span className="inline-block group-hover:animate-rotateIn">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-400 hover:animate-tiltBounce">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="group relative px-3 py-1.5 bg-[#18181b]/50 backdrop-blur-sm border border-[#252529] rounded-lg text-sm text-zinc-300 hover:border-emerald-500/20 transition-colors duration-300 md:hover:-translate-y-0.5 md:hover:shadow-lg md:hover:shadow-emerald-500/10 overflow-hidden flex items-center gap-2"
                  >
                    {/* Icon skill */}
                    <span className="text-lg">{skillIcons[skill] || "💻"}</span>
                    <span className="relative">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="md:animate-slideUp [animation-delay:600ms]">
        <h2 className="text-xl font-bold mb-6 text-white/90">Get In Touch</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex gap-4 items-center">
          <Link href="mailto:your.email@example.com" className="hover:text-emerald-400 transition-colors" aria-label="Email">
            <Mail size={24} />
          </Link>
          <Link href="https://github.com/yourusername" target="_blank" className="hover:text-emerald-400 transition-colors" aria-label="GitHub">
            <GitHub size={24} />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
} 

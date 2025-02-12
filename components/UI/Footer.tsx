"use client";

import Link from "next/link";
import { Instagram, GitHub, Twitter, Mail } from "react-feather";

export default function Footer() {
  const socialLinks = [
    {
      icon: <GitHub size={16} />,
      href: "https://github.com/Falzz1010",
      label: "GitHub",
    },
    {
      icon: <Instagram size={16} />,
      href: "https://www.instagram.com/rizkyfalzz/?__pwa=1",
      label: "Instagram",
    },
    {
      icon: <Twitter size={16} />,
      href: "/app/not-found.tsx",
      label: "Twitter",
    },
    {
      icon: <Mail size={16} />,
      href: "/app/not-found.tsx",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-t-zinc-800/40 py-8 sm:py-12">
      <div className="px-4 sm:px-6 sm:mx-auto max-w-4xl space-y-8 sm:space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-zinc-400 hover:text-emerald-400 transition-all duration-300">
              © {new Date().getFullYear()} Naufal Rizky
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-zinc-200 mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Blog", "Guestbook"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-zinc-200 mb-3 sm:mb-4">Connect</h3>
            <div className="flex justify-center sm:justify-start gap-5">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center text-sm text-zinc-400">
          <p>
            Made with{" "}
            <span className="text-emerald-400 animate-pulse">💚</span> using{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 border-b border-dotted border-zinc-700 hover:border-emerald-400"
            >
              Next.js
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

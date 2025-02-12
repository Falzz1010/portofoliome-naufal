"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/libs/cn";
import { HomeIcon, BookOpenIcon, DocumentTextIcon, AcademicCapIcon, ChatBubbleBottomCenterTextIcon, PhotoIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const Links = [
    {
      label: "home",
      path: "/",
      icon: HomeIcon
    },
    {
      label: "blog",
      path: "/blog",
      icon: BookOpenIcon
    },
    {
      label: "resume",
      path: "/resume",
      icon: DocumentTextIcon
    },
    {
      label: "certificates",
      path: "/certificates",
      icon: AcademicCapIcon
    },
    {
      label: "gallery",
      path: "/gallery",
      icon: PhotoIcon
    },
    {
      label: "guestbook",
      path: "/guestbook",
      icon: ChatBubbleBottomCenterTextIcon
    },
  ];

  return (
    <nav className={cn(
      "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 mb-4 transition-transform duration-300",
      isVisible ? "translate-y-0" : "translate-y-28"
    )}>
      <div className="bg-[#202024]/80 backdrop-blur-md px-6 py-3 rounded-full border border-[#303034] shadow-lg">
        <ul className="flex items-center gap-6">
          {Links.map((nav, idx) => {
            const Icon = nav.icon;
            return (
              <li key={idx}>
                <Link href={nav.path}>
                  <Icon className={cn(
                    "w-5 h-5 transition-all duration-300 transform hover:scale-125",
                    pathname === nav.path
                      ? "text-emerald-400 animate-bounce"
                      : "text-gray-400 hover:text-emerald-400"
                  )} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

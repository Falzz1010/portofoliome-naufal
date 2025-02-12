'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    // Calculate scroll progress percentage
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    setScrollProgress(scrolled);
    setIsVisible(winScroll > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-48 md:bottom-24 right-6 z-50 group">
          <div className="relative">
            {/* Progress Circle */}
            <svg 
              className="transform -rotate-90 w-8 h-8"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#1e1e1e"
                strokeWidth="8"
                className="opacity-20"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#0e705e"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * scrollProgress) / 100}
                className="transition-all duration-300"
              />
            </svg>
            
            {/* Button */}
            <button
              onClick={scrollToTop}
              className="absolute inset-0 flex items-center justify-center
                text-white transition-all duration-300
                hover:scale-110 group-hover:text-white/90"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}


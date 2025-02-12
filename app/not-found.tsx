'use client';

import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto mb-8">
          <Image 
            src="/404-not-found/img.png" 
            alt="404 Illustration" 
            fill
            priority
            className="object-contain animate-bounce-slow"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-white">404</h1>
        <h2 className="text-2xl md:text-3xl mb-4 text-white animate-slide-up">Page Not Found</h2>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-loader-1"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-loader-2"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-loader-3"></div>
        </div>
        <p className="text-base md:text-lg mb-6 text-white animate-slide-up">
          Mohon maaf ketua Naufal Rizky sedang memperbaiki portfolionya.
        </p>
        <Link 
          href="/" 
          className="inline-block px-4 py-2 md:px-6 md:py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 animate-pulse hover:animate-none"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

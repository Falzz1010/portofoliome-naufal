'use client';

import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/Layout/Title'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { FaceFrownIcon } from '@heroicons/react/24/solid'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="bg-[#18181b] border border-[#252529] p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full flex flex-col items-center animate-fade-in-up">
        <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] mb-6">
          <Image 
            src="/404-not-found/img.png" 
            alt="404 Illustration" 
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Title align="center" className="mb-0">404 - Page Not Found</Title>
          <FaceFrownIcon className="w-8 h-8 text-emerald-400 animate-bounce" />
        </div>
        <p className="text-zinc-400 text-center mb-8 text-base md:text-lg">
          Mohon maaf, Ketua Naufal Rizky sedang memperbaiki portfolionya.<br />Silakan kembali ke halaman utama.
        </p>
        <div className="flex flex-col gap-3 w-full animate-fade-in-up">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-7 md:py-4 text-white bg-[#0e705e] hover:bg-[#064035] rounded-xl shadow-lg transition-all duration-300 font-semibold text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <div className="flex gap-2 justify-center">
            <Link href="/blog" className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-emerald-700 hover:text-white transition-all duration-300 text-sm font-medium">Lihat Blog</Link>
            <Link href="/projects" className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-emerald-700 hover:text-white transition-all duration-300 text-sm font-medium">Lihat Project</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center w-full animate-fade-in-up">
        <p className="text-zinc-400 text-sm mb-2">Atau coba kunjungi halaman populer berikut:</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="underline text-emerald-400 hover:text-emerald-300 transition">Home</Link>
          <Link href="/blog" className="underline text-emerald-400 hover:text-emerald-300 transition">Blog</Link>
          <Link href="/projects" className="underline text-emerald-400 hover:text-emerald-300 transition">Projects</Link>
          <Link href="/guestbook" className="underline text-emerald-400 hover:text-emerald-300 transition">Guestbook</Link>
        </div>
      </div>
    </div>
  )
}

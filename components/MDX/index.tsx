import Image from 'next/image'
import Link from 'next/link'

interface MDXProps {
  children: React.ReactNode;
  // Add other specific props based on your needs
}

export const MDXComponents = {
  // Custom heading components
  h1: (props: MDXProps) => (
    <h1 className="text-3xl font-bold mb-6 text-white/90" {...props} />
  ),
  h2: (props: MDXProps) => (
    <h2 className="text-2xl font-bold mb-4 mt-8 text-white/90" {...props} />
  ),
  h3: (props: MDXProps) => (
    <h3 className="text-xl font-bold mb-3 mt-6 text-white/90" {...props} />
  ),
  
  // Paragraph with better spacing and text color
  p: (props: MDXProps) => (
    <p className="mb-4 leading-relaxed text-zinc-300" {...props} />
  ),
  
  // Custom link with hover effect
  a: (props: MDXProps) => (
    <Link 
      {...props} 
      className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
    />
  ),
  
  // Better looking blockquotes
  blockquote: (props: MDXProps) => (
    <blockquote className="border-l-4 border-emerald-500 pl-4 my-4 italic text-zinc-400" {...props} />
  ),
  
  // Custom image component using Next.js Image
  img: (props: MDXProps) => (
    <div className="my-6">
      <Image
        {...props}
        alt={props.alt || 'Blog image'}
        className="rounded-lg"
        width={800}
        height={400}
        quality={100}
      />
      {props.alt && (
        <p className="text-sm text-center mt-2 text-zinc-400">{props.alt}</p>
      )}
    </div>
  ),
  
  // Better looking code blocks
  pre: (props: MDXProps) => (
    <pre className="bg-zinc-900 p-4 rounded-lg overflow-x-auto my-4 border border-zinc-800" {...props} />
  ),
  code: (props: MDXProps) => (
    <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  
  // List styling
  ul: (props: MDXProps) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-zinc-300" {...props} />
  ),
  ol: (props: MDXProps) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-zinc-300" {...props} />
  ),
  
  // Table styling
  table: (props: MDXProps) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: MDXProps) => (
    <th className="border border-zinc-800 px-4 py-2 bg-zinc-900 font-bold" {...props} />
  ),
  td: (props: MDXProps) => (
    <td className="border border-zinc-800 px-4 py-2" {...props} />
  ),
}

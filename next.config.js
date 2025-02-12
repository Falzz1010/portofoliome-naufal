/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats-phi-opal.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'www.codewars.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      }
    ],
    domains: ['github-readme-stats.vercel.app', 'www.codewars.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  experimental: {
    disableOptimizedLoading: true,
    workerThreads: false,
    cpus: 1
  },
  poweredByHeader: false,
}

module.exports = nextConfig 
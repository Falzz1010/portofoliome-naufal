module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        tiltBounce: {
          '0%, 100%': { transform: 'rotate(-2deg) translateY(0)' },
          '50%': { transform: 'rotate(2deg) translateY(-5px)' },
        },
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        'loader-1': {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
        'loader-2': {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
        'loader-3': {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        scaleIn: 'scaleIn 0.2s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        tiltBounce: 'tiltBounce 2s ease-in-out infinite',
        expandWidth: 'expandWidth 0.3s ease-out',
        rotateIn: 'rotateIn 0.5s ease-out',
        'loader-1': 'loader-1 1.4s infinite ease-in-out both',
        'loader-2': 'loader-2 1.4s infinite ease-in-out both -0.16s',
        'loader-3': 'loader-3 1.4s infinite ease-in-out both -0.32s',
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 
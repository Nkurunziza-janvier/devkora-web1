/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#060914',
          900: '#0a0f1f',
          800: '#0f1629',
          700: '#161e36',
          600: '#1e2845',
          500: '#2a3556',
          400: '#3b4869',
        },
        accent: {
          50: '#ecfdfb',
          100: '#cffaf3',
          200: '#9ff5e8',
          300: '#5becd6',
          400: '#22d3c0',
          500: '#0bb8a6',
          600: '#059488',
          700: '#05756d',
          800: '#075d57',
          900: '#084d49',
        },
        cyan2: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-ring': 'pulseRing 3s ease-in-out infinite',
        gradient: 'gradientShift 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseRing: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.1', transform: 'scale(1.15)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

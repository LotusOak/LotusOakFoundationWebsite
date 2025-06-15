import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        // Contemplative color palette
        primary: '#2a2a2a',      // Deep charcoal
        secondary: '#666666',     // Medium gray
        muted: '#999999',         // Light gray
        background: '#fefefe',    // Pure white
        soft: '#f9f9f9',         // Soft background
        accent: '#3a5f4a',       // Deep sage (oak)
        'accent-light': '#e8f0ea', // Light sage
        lotus: '#a88e88',        // Lotus pink-gray
        'lotus-light': '#f4f0ef', // Light lotus
        border: '#e5e5e5',       // Subtle borders
      },
      spacing: {
        'section': '8rem',       // 128px
        'chapter': '6rem',       // 96px
        'prose': '4rem',         // 64px
      },
      maxWidth: {
        'content': '640px',      // Narrow reading width
        'wide': '800px',         // Slightly wider
        'container': '1000px',   // Maximum width
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '640px',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
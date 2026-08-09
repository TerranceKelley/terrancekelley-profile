/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00f0ff',
          blue: '#0088ff',
          purple: '#b366ff',
          dim: '#00a0b0',
        },
        void: {
          950: '#0a0a0f',
          900: '#0d0d14',
          800: '#12121a',
          700: '#1a1a24',
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.2)',
        'neon-cyan-sm': '0 0 10px rgba(0, 240, 255, 0.5)',
        'neon-blue': '0 0 20px rgba(0, 136, 255, 0.4)',
        'glow-inner': 'inset 0 0 20px rgba(0, 240, 255, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'grid-fade': 'gridFade 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}



import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // This disables system-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // if using /app router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

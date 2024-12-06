/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#00C6B8' },
        midnight: { DEFAULT: '#0A3D62' },
        pink: { DEFAULT: '#F99ECD' },
      },
    },
  },
  plugins: [],
};

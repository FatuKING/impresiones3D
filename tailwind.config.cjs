/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './main.js'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1a1a',
          text: '#ffffff',
          accent: '#FF4F00',
          navbar: '#000000',
        },
        light: {
          primary: '#ffffff',
          text: '#1a1a1a',
          accent: '#FF4F00',
          navbar: '#5B21B6',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

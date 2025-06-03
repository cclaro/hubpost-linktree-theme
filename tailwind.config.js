/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,json}",
    "./src/**/*.module/*.{html,js,json}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        secondary: '#666',
        background: '#f5f5f5',
        'link-hover': '#e0e0e0',
      },
      borderRadius: {
        DEFAULT: '12px',
      },
      transitionDuration: {
        DEFAULT: '0.3s',
      },
    },
  },
  plugins: [],
} 
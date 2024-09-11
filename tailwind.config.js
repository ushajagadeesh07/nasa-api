// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as needed
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#f5f5f5', // Lightest brown
          200: '#e0e0e0', // Light brown
          300: '#c2b28c', // Medium brown
          400: '#a89f91', // Darker brown
          500: '#8c6d4b', // Default brown
          600: '#6a4f2d', // Dark brown
          700: '#4e3a1a', // Darkest brown
        },
      },
    },
  },
  plugins: [],
}

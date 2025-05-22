/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // This tells Tailwind to scan all .html and .ts files in your src folder
    // If you have components/templates outside src, add those paths too.
    // Example: "./projects/my-lib/src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      // You can customize your theme here (colors, fonts, spacing, etc.)
      // For example, as suggested before for a programming hint:
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // A clean, modern sans-serif
        mono: ['"Fira Code"', 'monospace'], // A popular programming font
      },
      colors: {
        'primary': '#3B82F6',    // Example primary color (blue)
        'secondary': '#10B981',  // Example secondary color (green)
        'dark-bg': '#1F2937',    // Example dark background
        'light-text': '#F3F4F6',
      },
    },
  },
  plugins: [
    // You can add Tailwind CSS plugins here if you need them
    // For example: require('@tailwindcss/forms'),
  ],
};
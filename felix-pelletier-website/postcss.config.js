// postcss.config.js (in project root)
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Correct: Use the dedicated PostCSS plugin for Tailwind v4+
    require('autoprefixer'),
  ],
};
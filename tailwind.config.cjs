/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/js/**/*.js'],
    theme: {
      extend: {
        colors: {
          brand: {
            light: '#f0484e',
            DEFAULT: '#d71920',
            dark: '#a3131a',
          },
          ink: {
            950: '#0b0c0e',
            900: '#111316',
            800: '#171a1e',
            700: '#1f2328',
            600: '#2b3037',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          display: ['"Barlow Condensed"', 'Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

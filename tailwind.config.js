/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

module.exports = config;

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

module.exports = config;

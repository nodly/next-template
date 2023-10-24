const config = {
  ...require('@nodly/prettier-config'),
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
};

module.exports = config;

import path from 'path';

/**
 * @param {Array.<string>} filenames
 */
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((file) => path.relative(process.cwd(), file))
    .join(' --file ')}`;

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{css,scss,json,md,yml,yaml}': ['prettier --write'],
};

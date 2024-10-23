import type { Config } from 'jest';

import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/**
 * @type {import('jest').Config}
 */
const config: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};

export default createJestConfig(config);

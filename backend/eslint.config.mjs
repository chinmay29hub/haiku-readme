import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  //   ignores (for backend)
  {
    ignores: [
      'node_modules/',
      'coverage/',
      'dist/',
      '*.config.js',
      'tests/fixtures/**',
    ],
  },

  // Core JS rules
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },

  // Node.js environment
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node, // Node.js globals (require, module, __dirname, etc.)
        ...globals.es2021, // ES2021 globals (Promise, etc.)
      },
      sourceType: 'module', // For ES modules
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    rules: {
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-console': 'off', // Allow console.log (common in Node)
      'no-underscore-dangle': 'off', // Allow _prefix in variables
    },
  },

  // Prettier (MUST BE LAST)
  prettierConfig,
]);

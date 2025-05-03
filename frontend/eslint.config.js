import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    ignores: [
      '**/dist/**', // Ignore build folder
      '**/node_modules/**', // Ignore node_modules (default, but explicit is good)
      // '**/.next/**', // Ignore Next.js build folder
      '**/coverage/**', // Ignore test coverage reports
      '**/*.config.js', // Ignore config files
      'public/**', // Ignore Vite/React public assets
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // Browser globals and JSX support
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // React specific rules
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.js'] },
      ],
      'react/prop-types': 'off',
    },
  },

  // React Hooks rules
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },

  // Prettier (MUST BE LAST)
  prettierConfig,
]);

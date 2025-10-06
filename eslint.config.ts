import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', '.astro/content.d.ts'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
]);

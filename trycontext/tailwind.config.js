import daisyui from 'daisyui';
import dataTheme from './src/data/dataTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: dataTheme,
  },
};

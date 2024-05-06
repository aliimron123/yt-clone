import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      screens: {
        phone: '320px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        large: '1366px',
      },
    },
  },

  plugins: [],
};
export default config;

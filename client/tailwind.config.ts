import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        text: {
          primary: '#808080',
          secondary: '#ffffff',
        },
        primary: {
          base: '#2196F3',
          light: '#90CBF9',
          dark: '#0A2D49',
        },
        secondary: {
          base: '#50BB9B',
          light: '#B2FDE6',
          dark: '#429A7F',
        },
        grayscale: {
          base: '#FEFEFE',
          shade1: '#F5F5F5',
          shade2: '#E2E2E2',
          shade3: '#595D62',
          shade4: '#1A1A1A',
        },
        border: {
          primary: '#ffffff15',
        },
      },
      fontSize: {
        small: '16px',
        normal: '20px',
        medium: '24px',
        large: '32px',
      },
    },
  },

  plugins: [],
};
export default config;

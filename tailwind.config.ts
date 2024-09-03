import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        0: '#fff',
        50: '#f5f5f5',
        100: '#e0e0e0',
        200: '#c0c0c0',
        250:'#AAA',
        300: '#AAAAAA',
        350: '#303030',
        400: '#808080',
        500: '#606060',
        600: '#404040',
        700: '#212121',
        800: '#121212',
        850: '#0f0f0f',
        900: '#000000',
        950: '#212121', 
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      black: "#191A19",
      blue: "#557AFF",
      "blue-light": "#EFF3FF",
      grey: "#D9D9D9",
      "grey-light": "#fafafa",
      green: "#68F590",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Georgia","sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Oswald"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

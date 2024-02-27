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
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl" : "1.563rem",
      "3xl": "1.953rem",
      "4xl" : "2.44rem",
      "5xl" : "3.052",
      "6xl" : "3.5rem",
    },
    minWidth: {
      0: "0",
      100: "100px",
    },
    extend: {
      width: {
        "1/3-g": "30%",
      },
      minHeigh: {
        50: "55px",
      },
      boxShadow: {
        footer: "0px -7px 3px rgbs(175, 175, 175, 0.25)",
      },
      backgroundImage: {
        header: "liner-gradient(98.85deg, #557AFF 7.8%, rgba(239, 252, 255, 0))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "8xl" : "96rem",
        "9xl" : "128rem",
      },
      borderRadius: {
        "4xl" : "2rem",
      },
      flexBasis: {
        "4/5" : "66%",
      },
    },
    screens: {
      sm: "640px",
      md: "760px",
      lg: "102px",
      xl: "1280",
      "2xl" : "1536",
    },
  },
  plugins: [],
};
export default config;

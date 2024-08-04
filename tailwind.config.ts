import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dashboard-bg": "#F0F2FF",
        midnight: {
          "50": "#eff6fe",
          "100": "#e2edfd",
          "200": "#cbddfa",
          "300": "#abc6f6",
          "400": "#8aa6ef",
          "500": "#6d87e7",
          "600": "#5163da",
          "700": "#4352bf",
          "800": "#38459b",
          "900": "#343f7b",
          "950": "#171b36",
        },
        picton: {
          "50": "#eff9ff",
          "100": "#def1ff",
          "200": "#b6e6ff",
          "300": "#75d3ff",
          "400": "#2cbeff",
          "500": "#00abff",
          "600": "#0084d4",
          "700": "#0069ab",
          "800": "#00588d",
          "900": "#064a74",
          "950": "#042f4d",
        },
      },
    },
  },
  plugins: [],
};
export default config;

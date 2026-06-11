import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F2742",
          blue: "#173B5F",
          orange: "#F97316",
          line: "#06C755",
          paper: "#F7FAFC",
        },
      },
      boxShadow: {
        soft: "0 16px 45px rgba(15, 39, 66, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

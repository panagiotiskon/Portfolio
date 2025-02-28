import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black:{
          DEFAULT: "#000",
          100: "#000319",
        },
        lightBlue: "#00c6c0",
      }
    },
    fontFamily: {
      'jetbrains': ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [],
} satisfies Config;

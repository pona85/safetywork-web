import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f6fd",
          100: "#e1eefb",
          200: "#c3dbf5",
          300: "#9ec2ec",
          400: "#79a8e1",
          500: "#6EA4D7",
          600: "#4f82b3",
          700: "#3f6a92",
          800: "#335674",
          900: "#29465d",
        },
        ink: {
          900: "#0A1B2B",
          700: "#273B4A",
          500: "#506273",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
} satisfies Config
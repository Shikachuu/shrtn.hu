import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text": "hsl(270, 33%, 1%)",
        "background": "hsl(0, 0%, 100%)",
        "primary": "hsl(3, 38%, 72%)",
        "secondary": "hsl(97, 38%, 88%)",
        "accent": "hsl(183, 37%, 48%)",
        "d-text": "hsl(0, 0%, 100%)",
        "d-background": "hsl(270, 33%, 1%)",
        "d-primary": "hsl(3, 38%, 72%)",
        "d-secondary": "hsl(96, 37%, 8%)",
        "d-accent": "hsl(183, 38%, 78%)",
      },
    },
  },
  plugins: [],
}
export default config

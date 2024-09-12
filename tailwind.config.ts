import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-public-sans)"],
      },
      colors: {
        beige: {
          "100": "hsl(30, 36%, 96%)",
          "500": "hsl(23, 6%, 57%)",
        },
        grey: {
          "100": "hsl(0, 0%, 95%)",
          "300": "hsl(0, 0%, 70%)",
          "500": "hsl(0, 0%, 41%)",
          "900": "hsl(252, 7%, 13%)",
        },
        green: "hsl(177, 52%, 32%)",
        yellow: "hsl(28, 73%, 81%)",
        cyan: "hsl(190, 52%, 68%)",
        navy: "hsl(248, 8%, 41%)",
        red: "hsl(7, 58%, 50%)",
        purple: {
          light: "hsl(288, 29%, 62%)",
          dark: "hsl(259, 30%, 56%)",
        },
        turquoise: "hsl(180, 16%, 42%)",
        brown: "hsl(21, 30%, 44%)",
        magenta: "hsl(332, 30%, 44%)",
        blue: "hsl(205, 48%, 47%)",
        "navy-grey": "hsl(214, 11%, 63%)",
        "army-green": "hsl(83, 20%, 47%)",
        gold: "hsl(47, 50%, 59%)",
        orange: "hsl(18, 47%, 52%)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      spacing: {
        "50": "4px",
        "100": "8px",
        "150": "12px",
        "200": "16px",
        "250": "20px",
        "300": "24px",
        "400": "32px",
        "500": "40px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

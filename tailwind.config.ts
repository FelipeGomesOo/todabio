import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["var(--font-manrope)"],
          mono: ["var(--font-pt-mono)"],
        },
      },
      colors: {
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
          lightGreen: "#BBFF00",
          darkGreen: "#5FB456",
          cyan: "#00F3EB",
          blue: "#3355FF",
          purple: "#DA21FF",
          pink: "#FF00AA",
          red: "#FF0000",
          orange: "#FF7300",
          yellow: "#FFE800",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontSize: {
      xs: "0.875rem", // 14px
      sm: "1rem", // 16px
      base: "1.25rem", // 20px
      lg: "1.5rem", // 24px
      xl: "1.875rem", // 30px
      "2xl": "2.25rem", // 36px
      "3xl": "3rem", // 48px
      "4xl": "3.75rem", // 60px
      "5xl": "4.5rem", // 72px
      "6xl": "6rem", // 96px
      "7xl": "8rem", // 128px
      "8xl": "9.125rem", // 146px
      "9xl": "11rem", // 176px
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

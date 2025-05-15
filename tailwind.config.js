/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FAFAFA",
          dark: "#0F172A",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E293B",
        },
        primary: {
          light: "#1A1A1A",
          dark: "#F8FAFC",
        },
        secondary: {
          light: "#555555",
          dark: "#94A3B8",
        },
        accent: {
          light: "#D97706",
          dark: "#FBBF24",
          hover: {
            light: "#B45309",
            dark: "#F59E0B",
          },
        },
        border: {
          light: "#E5E7EB",
          dark: "#334155",
        },
        highlight: {
          light: "#FEF3C7",
          dark: "#FDE68A",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "rgb(var(--tw-prose-body))",
            a: {
              color: "rgb(var(--tw-prose-links))",
              "&:hover": {
                color: "rgb(var(--tw-prose-links-hover))",
              },
            },
          },
        },
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography")],
};

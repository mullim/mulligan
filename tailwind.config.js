/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dracula-background": "#282a36",
        "dracula-foreground": "#f8f8f2",
        "dracula-current-line": "#44475A",
        "dracula-comment": "#6272A4",
        "dracula-cyan": "#8BE9FD",
        "dracula-green": "#50FA7B",
        "dracula-orange": "#FFB86C",
        "dracula-pink": "#FF79C6",
        "dracula-purple": "#BD93F9",
        "dracula-red": "#FF5555",
        "dracula-yellow": "#F1FA8C",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};

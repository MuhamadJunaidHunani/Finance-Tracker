/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryC: 'var(--primary-color)',
        secondaryC: 'var(--secondary-color)',
        accentC: 'var(--accent-color)',
        backgroundC: 'var(--background-color)',
        textC: 'var(--text-color)',
      },
    },
  },
  plugins: [],
};

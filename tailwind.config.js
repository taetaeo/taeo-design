/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      backgroundColor: {
        "primary-700": "#4299e1",
      },
      fontSize: {
        xs: "8px",
        sm: "12px",
        md: "14px",
        lg: "18px",
        xxl: "24px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
};

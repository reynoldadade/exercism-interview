module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsla(220, 69%, 97%, 1)",
        "light-default": "hsla(249, 72%, 15%, 1)",
        "light-secondary": "hsla(248, 24%, 43%, 1)",
        "dark-default": "rgba(240, 243, 249, 1)",
        "input-border": "#2E57E8",
      },
      spacing: {
        2.25: "2.25rem",
        c97: "6.063rem",
        c31: "1.938rem",
      },
      fontSize: {
        small: "14px",
        medium: "15px",
      },
    },
    plugins: [],
  },
};

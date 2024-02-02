/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'xss': '10px',
      },
      height: {
        '120': '140vh',
        '100': '110vh',
        '70': '70vh',
        '81': '80vh',
        '50': '50%',

      },
      width: {
        '90': '90%',
        '85': '85%',
        '70': '70%',
        '80': '80%',
        '95': '95%',
        '50': '50%',
        '100': '80vh',
      },
      letterSpacing: {
        'lg': '3px',
      },
      
    },
  },
  plugins: [],
};

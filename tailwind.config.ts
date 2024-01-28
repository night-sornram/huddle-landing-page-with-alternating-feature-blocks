import type { Config } from "tailwindcss";

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = 
{
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(322, 100%, 66%)",
      "200" : "hsl(193, 100%, 96%)",
      "300" : "hsl(192, 100%, 9%)",
      "400" : "hsl(208, 11%, 55%)"
    }
  }
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "desktop" : "url('/images/bg-hero-desktop.svg')"
      },
      colors : colors,
      fontFamily : {
        "poppins" : 'Poppins',
        'opensan' : 'Open Sans'
      }
    },
  },
  plugins: [],
};
export default config;

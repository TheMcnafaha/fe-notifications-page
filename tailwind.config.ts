import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        "very-ligth-grayish-blue": " hsl(210, 60%, 98%)",
        "ligth-grayish-blue": "hsl(211, 68%, 94%)",
        "ligth-grayish-alt-blue": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
        "custom-red": "hsl(1, 90%, 64%)",
        "custom-blue": "hsl(219, 85%, 26%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

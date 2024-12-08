import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      verySmall: { max: "380px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lemonada: ["var(--font-lemonada)"],
        montserratSubrayada: ["var(--font-montserratSubrayada)"],
        permanentMarker: ["var(--font-permanentMarker)"],
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

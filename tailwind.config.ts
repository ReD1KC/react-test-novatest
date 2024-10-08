import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                lg: { max: "1440px" },
                md: { max: "768px" },
                sm: { max: "360px" },
            },
            fontFamily: {
                futura: ["Futura PT Book", "sans-serif"],
            },
            spacing: {
                4.5: "1.125rem",
                18: "4.5rem",
                30: "7.5rem",
                46: "11.438",
                26: "6.5rem",
                25: "6.25rem",
                10.5: "2.625rem",
                100: "26.5rem",
            },
        },
    },
    plugins: [],
};
export default config;

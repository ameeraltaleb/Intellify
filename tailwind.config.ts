import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                "fb": "0 2px 12px rgba(0, 0, 0, 0.04)",
                "reading-bar": "0 0 15px rgba(24, 119, 242, 0.8)",
            }
        },
    },
    plugins: [],
};
export default config;

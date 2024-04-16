import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
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
        },
    },
    plugins: [
        plugin(function ({
            addVariant,
            e,
            postcss,
        }: {
            addVariant: any;
            e: any;
            postcss: any;
        }) {
            addVariant(
                "firefox",
                ({
                    container,
                    separator,
                }: {
                    container: any;
                    separator: any;
                }) => {
                    const isFirefoxRule = postcss.atRule({
                        name: "-moz-document",
                        params: "url-prefix()",
                    });
                    isFirefoxRule.append(container.nodes);
                    container.append(isFirefoxRule);
                    isFirefoxRule.walkRules((rule: any) => {
                        rule.selector = `.${e(
                            `firefox${separator}${rule.selector.slice(1)}`
                        )}`;
                    });
                }
            );
        }),
        require("@tailwindcss/forms"),
    ],
};
export default config;

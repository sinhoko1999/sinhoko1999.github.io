import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        smblack: "3px 3px 6px black",
        mdblack: "6px 6px 12px black",
        lgblack: "10px 10px 20px black",
      },
      keyframes: {
        fadein1: {
          "0%": { opacity: "0", translate: "0px 50px" },
          "40%": { opacity: "0", translate: "0px 50px" },
          "100%": { opacity: "1", translate: "0px 0px" },
        },
        fadein2: {
          "0%": { opacity: "0", translate: "0px 20px" },
          "60%": { opacity: "0", translate: "0px 20px" },
          "100%": { opacity: "1", translate: "0px 0px" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any
      theme: any
    }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      )
    }),
  ],
}
export default config

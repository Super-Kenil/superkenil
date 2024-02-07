import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /(bg|text)-(purple|sky|yellow|teal|blue|green|orange|red|neutral)-300/,
    },
    {
      pattern: /(bg|text)-orange-400/,
    },
  ],
  plugins: [],
}
export default config

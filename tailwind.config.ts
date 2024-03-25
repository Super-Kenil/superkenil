import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text)-(purple|sky|yellow|teal|blue|green|orange|red|neutral)-300/,
      variants: ['selection']
    },
    {
      pattern: /(bg|text)-orange-400/,
      variants: ['selection']
    },
  ],
  plugins: [],
}
export default config

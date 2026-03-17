import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(8 43% 5%)',
        foreground: 'hsl(35 44% 94%)',
        card: 'hsl(8 28% 10%)',
        border: 'hsl(11 33% 22%)',
        muted: 'hsl(9 24% 16%)',
        primary: 'hsl(17 92% 57%)',
      },
    },
  },
  plugins: [],
} satisfies Config

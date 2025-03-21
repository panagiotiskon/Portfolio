import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319',
        },
        lightBlue: '#00c6c0',
        beige: '#fff7d6',
        grey: '#95b1ae',
        lightPurple: '#25153f',
        darkRed: '#1d0000',
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

// @ts-ignore
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

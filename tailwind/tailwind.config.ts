import type { Config } from 'tailwindcss'
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  // corePlugins: {
  //   preflight: false,
  // },
} satisfies Config




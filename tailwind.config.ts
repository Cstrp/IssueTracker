import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
		'./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {}
  },
  plugins: []
}
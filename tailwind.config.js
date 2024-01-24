/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#282C34',
				foreground: '#ABB2BF',

				red: '#E06C75',
				brightRed: '#EF596F',

				green: '#98C379',
				brightGreen: '#89CA78',

				yellow: '#E5C07B',
				brightYellow: '#E5C07B',

				blue: '#61AFEF',
				brightBlue: '#61AFEF',

				purple: '#C678DD',
				brightPurple: '#D55FDE',

				cyan: '#56B6C2',
				brightCyan: '#2BBAC5',

				smoke: '#E8E6E3',
				error: '#F44747',
				dark: '#5C6370'
			},
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)']
			}
		}
	},
	plugins: []
};

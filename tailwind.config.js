/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#282C34',
				foreground: '#ABB2BF',
				red: '#E06C75',
				green: '#98C379',
				yellow: '#E5C07B',
				blue: '#61AFEF',
				purple: '#C678DD',
				cyan: '#56B6C2',
				smoke: '#E8E6E3'
			},
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)']
			}
		}
	},
	plugins: []
};

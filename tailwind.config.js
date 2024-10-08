// tailwind.config.js

module.exports = {
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				SFProText: ['SFProText', 'sans-serif'],
				SFProTextMedium: ['SFProText-Medium', 'sans-serif'],
				SFProTextBold: ['SFProText-Bold', 'sans-serif'],
				BebasNeue: ['BebasNeue', 'sans-serif'],
			},
			colors: {
				default: '#FF6464',
				dark: '#545974',
				gray: '#BABABA',
				white: '#FFFFFF',
				input: '#F1F1F1',
			},
		},
	},
	plugins: [],
}

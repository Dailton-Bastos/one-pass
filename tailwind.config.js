// tailwind.config.js

module.exports = {
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				SfProText: ['SfPro', 'sans-serif'],
				SfProTextMedium: ['SfPro-Medium', 'sans-serif'],
				SfProTextBold: ['SfPro-Bold', 'sans-serif'],
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

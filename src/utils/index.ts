import { lowercaseChars, uppercaseChars, numbers, symbols } from '@/constants'

import type { GeneratePasswordParams } from '@/types'

export const checkPasswordStrength = (password: string) => {
	const requirements = [
		{ regex: /.{8,}/ },
		{ regex: /[0-9]/ },
		{ regex: /[a-z]/ },
		{ regex: /[A-Z]/ },
		{ regex: /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/ },
	]

	return requirements.map((req) => ({
		met: req.regex.test(password),
	}))
}

export const getPasswordStrengthColor = (score: number) => {
	// if (score === 0) return 'bg-border'
	// if (score <= 1) return 'bg-red-500'
	// if (score <= 2) return 'bg-orange-500'
	if (score <= 3) return 'bg-orange-500'

	return 'bg-default'
}

export const generatePassword = (params: GeneratePasswordParams) => {
	const {
		length,
		includeLowercase,
		includeUppercase,
		includeNumbers,
		includeSymbols,
	} = params

	const lowercase = includeLowercase ? lowercaseChars : ''
	const uppercase = includeUppercase ? uppercaseChars : ''
	const allNumbers = includeNumbers ? numbers : ''
	const allSymbols = includeSymbols ? symbols : ''

	const characters = lowercase + uppercase + allNumbers + allSymbols

	return Array.from(window.crypto.getRandomValues(new Uint32Array(length)))
		.map((char) => characters[char % characters.length])
		.join('')
}

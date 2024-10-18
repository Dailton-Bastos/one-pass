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

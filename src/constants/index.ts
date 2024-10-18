import Logo from '@/assets/images/Logo.svg'
import Onboarding1 from '@/assets/images/Onboarding1.svg'
import Onboarding2 from '@/assets/images/Onboarding2.svg'
import Onboarding3 from '@/assets/images/Onboarding3.svg'
import companyLogo from '@/assets/images/password-card.png'

export const icons = {
	Logo,
}

export const images = {
	Onboarding1,
	Onboarding2,
	Onboarding3,
	companyLogo,
}

export const onboarding = [
	{
		id: 1,
		title: 'Generate secure passwords',
		description:
			'Stop using unsecure passwords for your online accounts, level up with OnePass. Get the most secure and difficult-to-crack passwords.',
		Onboarding: images.Onboarding1,
	},
	{
		id: 2,
		title: 'All your passwords are here.',
		description:
			'Store and manage all of your passwords from one place. Don’t remember hundreds of passwords, just remember one.',
		Onboarding: images.Onboarding2,
	},
	{
		id: 3,
		title: "Dont't type, autofill your credentials.",
		description:
			'Don’t compromise your passwords by typing them in public, let OnePass autofill those and keep your credentials secure.',
		Onboarding: images.Onboarding3,
	},
]

export const passwordsList = [
	{
		logo: images.companyLogo,
		title: 'Facebook',
	},
	{
		logo: images.companyLogo,
		title: 'Amazon',
	},
	{
		logo: images.companyLogo,
		title: 'Apple',
	},
	{
		logo: images.companyLogo,
		title: 'Netflix',
	},
	{
		logo: images.companyLogo,
		title: 'Instagram',
	},
	{
		logo: images.companyLogo,
		title: 'Google',
	},
]

export const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
export const uppercaseChars = lowercaseChars.toUpperCase()
export const numbers = '0123456789'
export const symbols = '!@#$%&*_+-=?~'

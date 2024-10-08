import Logo from '@/assets/images/Logo.svg'
import Onboarding1 from '@/assets/images/Onboarding1.svg'
import Onboarding2 from '@/assets/images/Onboarding2.svg'
import Onboarding3 from '@/assets/images/Onboarding3.svg'

export const icons = {
	Logo,
}

export const images = {
	Onboarding1,
	Onboarding2,
	Onboarding3,
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

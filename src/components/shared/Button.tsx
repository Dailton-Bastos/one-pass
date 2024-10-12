import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { twMerge } from 'tailwind-merge'

import type { ButtonProps } from '@/types'

type Props = ButtonProps

export const Button = (props: Props) => {
	const {
		title,
		className,
		variant = 'primary',
		isLoading = false,
		activityIndicatorColor = '#fff',
		...rest
	} = props

	const getBgVariantStyle = () => {
		switch (variant) {
			case 'primary':
				return 'bg-default'

			case 'outline':
				return 'bg-white'

			default:
				return 'border'
		}
	}

	const getTextVariantStyle = () => {
		switch (variant) {
			case 'primary':
				return 'text-white'

			case 'outline':
				return 'text-default'

			default:
				return 'text-black'
		}
	}

	return (
		<TouchableOpacity
			className={twMerge(
				'flex flex-row items-center justify-center h-10 rounded-lg border-2 border-default',
				getBgVariantStyle(),
				className,
			)}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator
					size="small"
					color={activityIndicatorColor}
					className="mr-2"
				/>
			) : (
				<Text
					className={twMerge(
						'text-base uppercase font-BebasNeue',
						getTextVariantStyle(),
					)}
				>
					{title}
				</Text>
			)}
		</TouchableOpacity>
	)
}

import type { BackButtonProps } from '@/types'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { LeftArrow } from '../icons/LeftArrow'

export const BackButton = ({ backLink }: BackButtonProps) => {
	return (
		<TouchableOpacity
			className="flex items-center justify-center w-6 h-6"
			onPress={() => router.push(backLink)}
		>
			<LeftArrow />
		</TouchableOpacity>
	)
}

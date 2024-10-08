import { icons } from '@/constants'
import { View } from 'react-native'

export const Logo = () => {
	const { Logo } = icons

	return (
		<View className="flex items-center justify-center w-10 h-10">
			<Logo width={40} height={40} />
		</View>
	)
}

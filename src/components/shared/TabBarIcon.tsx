import { View } from 'react-native'

type Props = {
	focused: boolean
	children: React.ReactNode
}

export const TabBarIcon = ({ focused = false, children }: Props) => {
	return (
		<View className="flex items-center justify-center w-7 h-7">
			{children}

			{focused && <View className="w-1.5 h-0.5 rounded-sm bg-dark mt-0.5" />}
		</View>
	)
}

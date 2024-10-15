import { Text, View } from 'react-native'

export const PasswordInfo = () => {
	return (
		<View className="flex flex-row gap-x-5">
			<View className="flex items-start justify-center bg-input p-2.5 rounded-lg flex-1">
				<Text className="text-default font-BebasNeue text-6xl">5</Text>

				<Text className="text-dark font-SFProText text-sm">
					Password{'\n'}Stored
				</Text>
			</View>

			<View className="flex items-start justify-center bg-input p-2.5 rounded-lg flex-1">
				<Text className="text-default font-BebasNeue text-6xl">0</Text>

				<Text className="text-dark font-SFProText text-sm">
					Password{'\n'}Compromised
				</Text>
			</View>
		</View>
	)
}

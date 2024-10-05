import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
	return (
		<SafeAreaView className="flex-1 items-center justify-center">
			<Text className="font-SfProTextBold font-bold text-dark">REGISTER</Text>
			<Text className="font-SfProText text-gray">
				Let's get you setup with a new account!
			</Text>
		</SafeAreaView>
	)
}

export default Welcome

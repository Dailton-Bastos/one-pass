import { Button } from '@/components/shared/Button'
import { InputField } from '@/components/shared/InputField'
import { Logo } from '@/components/shared/Logo'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ForgotPassword = () => {
	return (
		<SafeAreaView className="w-full h-full px-5 bg-white">
			<Logo />

			<View className="w-full py-5">
				<Text className="text-dark uppercase font-BebasNeue text-6xl">
					Forgot{'\n'}Password
				</Text>
			</View>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
				<View className="w-full py-12">
					<InputField label="Email" placeholder="johndoe@email.com" />

					<Button title="Submit" variant="primary" />
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}

export default ForgotPassword

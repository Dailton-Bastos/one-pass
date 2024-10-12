import { Button } from '@/components/shared/Button'
import { InputField } from '@/components/shared/InputField'
import { InputPassword } from '@/components/shared/InputPassword'
import { Logo } from '@/components/shared/Logo'
import { Link } from 'expo-router'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
	return (
		<SafeAreaView className="w-full h-full px-5 bg-white">
			<Logo />

			<View className="w-full py-5">
				<Text className="text-dark uppercase font-BebasNeue text-6xl">
					Register
				</Text>

				<Text className="text-sm text-gray font-SFProText">
					Let's get you setup with a new account!
				</Text>
			</View>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
				<View className="w-full py-12">
					<InputField label="Name" placeholder="John Doe" />

					<InputField label="Email" placeholder="johndoe@email.com" />

					<InputPassword label="Password" placeholder="Password" />

					<Button title="Register" variant="primary" />

					<View className="w-full flex items-center justify-center pt-12">
						<Text className="text-dark font-SFProText text-sm">
							Already have an account?
						</Text>

						<Link
							href="/(auth)/welcome"
							className="font-BebasNeue text-default"
						>
							Login
						</Link>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}

export default SignUp

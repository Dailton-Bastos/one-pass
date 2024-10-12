import { Button } from '@/components/shared/Button'
import { InputField } from '@/components/shared/InputField'
import { InputPassword } from '@/components/shared/InputPassword'
import { Logo } from '@/components/shared/Logo'
import { Link } from 'expo-router'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
	return (
		<SafeAreaView className="w-full h-full px-5 bg-white">
			<Logo />

			<View className="w-full py-5">
				<Text className="text-dark uppercase font-BebasNeue text-6xl">
					Login
				</Text>

				<Text className="text-sm text-gray font-SFProText">
					Let's get you setup with a new account!
				</Text>
			</View>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
				<View className="w-full py-12">
					<InputField label="Email" placeholder="johndoe@email.com" />

					<InputPassword label="Password" placeholder="Password" />

					<View className="w-full flex items-center justify-center pb-7">
						<Link
							href="/(auth)/forgot-password"
							className="font-SFProText text-default"
						>
							Forgot Password
						</Link>
					</View>

					<Button title="Login" variant="primary" />

					<View className="w-full flex items-center justify-center pt-12">
						<Text className="text-dark font-SFProText text-sm">
							Don't have an account yet?
						</Text>

						<Link
							href="/(auth)/sign-up"
							className="font-BebasNeue text-default"
						>
							Register
						</Link>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}

export default SignIn

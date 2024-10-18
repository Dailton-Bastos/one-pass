import { BackButton } from '@/components/shared/BackButton'
import { Button } from '@/components/shared/Button'
import { InputField } from '@/components/shared/InputField'
import { PasswordStrength } from '@/components/shared/PasswordStrength'
import Slider from '@react-native-community/slider'
import React from 'react'
import { Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { SafeAreaView } from 'react-native-safe-area-context'

const GeneratePassword = () => {
	const [password, setPassword] = React.useState('')

	const [passwordOptions, setPasswordOptions] = React.useState({
		minimumValue: 1,
		maximumValue: 12,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true,
		length: 12,
	})

	return (
		<SafeAreaView className="w-full h-full px-5 pt-4 bg-white">
			<BackButton backLink="/addNewPassword" />

			<View className="w-full py-10">
				<Text className="text-dark uppercase font-BebasNeue text-6xl">
					Generate New
				</Text>
			</View>

			<View className="w-full">
				<InputField defaultValue={password} readOnly />

				<PasswordStrength type="dashed" showLabel value={password} />

				<View className="w-full py-6 space-y-2">
					<BouncyCheckbox
						text="Include Uppercase Letters"
						size={20}
						fillColor="#545974"
						textStyle={{
							fontFamily: 'SFProText',
							color: '#545974',
							textDecorationLine: 'none',
						}}
						isChecked={passwordOptions.uppercase}
						onPress={() =>
							setPasswordOptions((prev) => ({
								...prev,
								uppercase: !prev.uppercase,
							}))
						}
					/>

					<BouncyCheckbox
						text="Include Lowercase Letters"
						size={20}
						fillColor="#545974"
						textStyle={{
							fontFamily: 'SFProText',
							color: '#545974',
							textDecorationLine: 'none',
						}}
						isChecked={passwordOptions.lowercase}
						onPress={() =>
							setPasswordOptions((prev) => ({
								...prev,
								lowercase: !prev.lowercase,
							}))
						}
					/>

					<BouncyCheckbox
						text="Include Numbers"
						size={20}
						fillColor="#545974"
						textStyle={{
							fontFamily: 'SFProText',
							color: '#545974',
							textDecorationLine: 'none',
						}}
						isChecked={passwordOptions.numbers}
						onPress={() =>
							setPasswordOptions((prev) => ({
								...prev,
								numbers: !prev.numbers,
							}))
						}
					/>

					<BouncyCheckbox
						text="Include Symbols"
						size={20}
						fillColor="#545974"
						textStyle={{
							fontFamily: 'SFProText',
							color: '#545974',
							textDecorationLine: 'none',
						}}
						isChecked={passwordOptions.symbols}
						onPress={() =>
							setPasswordOptions((prev) => ({
								...prev,
								symbols: !prev.symbols,
							}))
						}
					/>
				</View>

				<View className="w-full">
					<View className="flex flex-row items-center justify-between">
						<Text className="text-dark font-SFProText mb-2">
							Character Length
						</Text>

						<Text className="font-bold font-BebasNeue text-dark">
							{passwordOptions.length}
						</Text>
					</View>

					<Slider
						className="w-full"
						minimumValue={passwordOptions.minimumValue}
						maximumValue={passwordOptions.maximumValue}
						minimumTrackTintColor="#545974"
						maximumTrackTintColor="#F1F1F1"
						thumbTintColor="#545974"
						value={passwordOptions.length}
						onValueChange={(value: number) =>
							setPasswordOptions((prev) => ({
								...prev,
								length: Math.ceil(value),
							}))
						}
					/>
				</View>
			</View>

			<View className="w-full flex flex-row gap-x-4 py-8">
				<Button
					title="Generate"
					variant="outline"
					className="flex-1"
					onPress={() => setPassword('12345678')}
				/>
				<Button title="Copy" variant="primary" className="flex-1" />
			</View>
		</SafeAreaView>
	)
}

export default GeneratePassword

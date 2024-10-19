import { BackButton } from '@/components/shared/BackButton'
import { Button } from '@/components/shared/Button'
import { InputField } from '@/components/shared/InputField'
import { PasswordStrength } from '@/components/shared/PasswordStrength'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { generatePassword } from '@/utils'
import Slider from '@react-native-community/slider'
import React from 'react'
import { Alert, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { SafeAreaView } from 'react-native-safe-area-context'

const GeneratePassword = () => {
	const [password, setPassword] = React.useState('')

	const [error, setError] = React.useState<boolean | null>(null)

	const [passwordOptions, setPasswordOptions] = React.useState({
		minimumValue: 1,
		maximumValue: 12,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true,
		length: 12,
	})

	const { result, copyToClipboard } = useCopyToClipboard()

	const copyButtonTitle = result?.state === 'success' ? 'Copied' : 'Copy'

	const randomGeneratePassword = React.useCallback(() => {
		const { length, uppercase, lowercase, numbers, symbols } = passwordOptions

		const hasOneOrMoreCharacterSet = Object.values({
			uppercase,
			lowercase,
			numbers,
			symbols,
		}).some((char) => char)

		if (!hasOneOrMoreCharacterSet) {
			setError(true)
			setPassword('')

			return
		}

		const password = generatePassword({
			length,
			includeUppercase: uppercase,
			includeLowercase: lowercase,
			includeNumbers: numbers,
			includeSymbols: symbols,
		})

		setPassword(password)
		setError(null)
	}, [passwordOptions])

	React.useEffect(() => {
		if (result?.state === 'error') {
			Alert.alert(result.message)
		}
	}, [result])

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

			{error && (
				<Text className="text-center text-default text-sm font-SFProText mt-4">
					Must pass one or more character sets
				</Text>
			)}

			<View className="w-full flex flex-row gap-x-4 py-8">
				<Button
					title="Generate"
					variant="outline"
					className="flex-1"
					onPress={randomGeneratePassword}
				/>
				<Button
					title={copyButtonTitle}
					variant="primary"
					className="flex-1"
					disabled={!password}
					activeOpacity={0.8}
					onPress={() => copyToClipboard(password)}
				/>
			</View>
		</SafeAreaView>
	)
}

export default GeneratePassword

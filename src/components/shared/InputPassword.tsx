import type { InputProps } from '@/types'
import React, { forwardRef } from 'react'
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { twMerge } from 'tailwind-merge'
import { EyeClose } from '../icons/EyeClose'
import { EyeOpen } from '../icons/EyeOpen'

export const InputPassword = forwardRef<TextInput, InputProps>((props, ref) => {
	const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(true)

	const { label, error, errorMessage, ...rest } = props

	const behavior = Platform.OS === 'ios' ? 'padding' : 'height'

	const onPress = () => setIsSecureTextEntry((prev) => !prev)

	return (
		<KeyboardAvoidingView behavior={behavior}>
			<View className="w-full pb-5">
				{label && (
					<Text className="font-BebasNeue text-dark text-xs">{label}</Text>
				)}

				<View
					className={twMerge(
						'flex flex-row justify-start items-center border-2 rounded-lg mt-0.5 relative',
						error ? 'border-default' : 'border-input',
					)}
				>
					<TextInput
						className="placeholder:text-gray font-SFProText text-dark rounded-lg flex-1 text-left p-2"
						secureTextEntry={isSecureTextEntry}
						ref={ref}
						{...rest}
					/>

					<TouchableOpacity
						className="flex items-center justify-center w-6 h-6 mr-2"
						onPress={onPress}
					>
						{isSecureTextEntry ? <EyeOpen /> : <EyeClose />}
					</TouchableOpacity>
				</View>

				{errorMessage && (
					<Text className="text-sm text-default font-SFProText mt-2">
						{errorMessage}
					</Text>
				)}
			</View>
		</KeyboardAvoidingView>
	)
})

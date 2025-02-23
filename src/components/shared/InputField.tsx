import type { InputProps } from '@/types'
import { forwardRef } from 'react'
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	View,
} from 'react-native'
import { twMerge } from 'tailwind-merge'

export const InputField = forwardRef<TextInput, InputProps>((props, ref) => {
	const { label, error, errorMessage, ...rest } = props

	const behavior = Platform.OS === 'ios' ? 'padding' : 'height'

	return (
		<KeyboardAvoidingView behavior={behavior}>
			<View className="w-full pb-5">
				{label && (
					<Text className="font-BebasNeue text-dark text-xs">{label}</Text>
				)}

				<View
					className={twMerge(
						'flex flex-row justify-start items-center border-2 rounded-lg mt-0.5',
						error ? 'border-default' : 'border-input',
					)}
				>
					<TextInput
						className="placeholder:text-gray font-SFProText text-dark rounded-lg flex-1 text-left p-2"
						ref={ref}
						{...rest}
					/>
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

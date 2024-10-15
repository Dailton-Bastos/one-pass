import type { SearchProps } from '@/types'
import React, { forwardRef } from 'react'
import {
	ActivityIndicator,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { twMerge } from 'tailwind-merge'
import { DeleteIcon } from '../icons/Delete'
import { SearchIcon } from '../icons/Search'

export const Search = forwardRef<TextInput, SearchProps>((props, ref) => {
	const [focus, setOnFocus] = React.useState(false)

	const { isLoading = false, ...rest } = props

	const behavior = Platform.OS === 'ios' ? 'padding' : 'height'

	const finishSearch = React.useCallback(() => {
		Keyboard.dismiss()

		setOnFocus(false)
	}, [])

	return (
		<KeyboardAvoidingView behavior={behavior}>
			<View
				className={twMerge(
					'flex flex-row justify-start items-center border-2 rounded-lg relative',
					focus ? 'border-default' : 'border-input',
				)}
			>
				<View className="flex items-center justify-center w-[18px] h-[18px] ml-2">
					{isLoading ? (
						<ActivityIndicator size="small" color="#BABABA" />
					) : (
						<SearchIcon />
					)}
				</View>

				<TextInput
					className="placeholder:text-gray font-SFProText text-dark rounded-lg flex-1 text-left p-2"
					selectionColor="#545974"
					onFocus={() => setOnFocus(true)}
					onBlur={() => setOnFocus(false)}
					ref={ref}
					{...rest}
				/>

				{focus && (
					<TouchableOpacity
						className="flex items-center justify-center w-6 h-6 mr-2"
						onPress={finishSearch}
					>
						<DeleteIcon />
					</TouchableOpacity>
				)}
			</View>
		</KeyboardAvoidingView>
	)
})

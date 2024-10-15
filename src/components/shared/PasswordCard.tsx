import type { PasswordCardProps } from '@/types'
import {
	Alert,
	Image,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { CopyToClipboard } from './CopyToClipboard'

export const PasswordCard = (props: PasswordCardProps) => {
	const {
		passwordCard: { logo, title },
	} = props

	return (
		<View className="w-full relative border-2 rounded-lg border-input mb-5">
			<TouchableWithoutFeedback onPress={() => Alert.alert('Clicked')}>
				<View className="w-full flex flex-row items-center justify-start p-2.5">
					<Image
						source={logo}
						alt={title}
						className="w-[50px] h-[50px] object-contain"
					/>

					<Text className="text-dark font-SFProTextMedium font-semibold text-lg ml-5">
						{title}
					</Text>
				</View>
			</TouchableWithoutFeedback>

			<View className="absolute right-4 top-6">
				<CopyToClipboard handleClickCopy={() => Alert.alert('Copied')} />
			</View>
		</View>
	)
}

import type { CopyToClipboardProps } from '@/types'
import { TouchableOpacity, View } from 'react-native'
import { Copy } from '../icons/Copy'

export const CopyToClipboard = (props: CopyToClipboardProps) => {
	const { handleClickCopy } = props

	return (
		<TouchableOpacity onPress={handleClickCopy}>
			<View className="flex items-center justify-center w-6 h-6">
				<Copy />
			</View>
		</TouchableOpacity>
	)
}

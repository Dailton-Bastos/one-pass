import AddIcon from '@/assets/icons/add.svg'

import { View } from 'react-native'

export const TabBarAddPasswordIcon = () => {
	return (
		<View className="flex items-center justify-center w-[60px] h-[60px] bg-default rounded-full shadow-lg shadow-default/50 absolute bottom-[-10px]">
			<AddIcon />
		</View>
	)
}

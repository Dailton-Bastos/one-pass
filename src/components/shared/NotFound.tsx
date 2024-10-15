import NotFoundImage from '@/assets/images/search.svg'
import type { NotFoundProps } from '@/types'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export const NotFound = (props: NotFoundProps) => {
	const { showLinkHome = false, title, description } = props

	return (
		<View className="flex items-center justify-center">
			<NotFoundImage />

			<View className="flex items-center justify-center pt-12">
				<Text className="uppercase text-dark font-BebasNeue text-center text-lg pb-1.5">
					{title}
				</Text>

				<Text className="text-gray text-center font-SFProText text-sm py-1.5">
					{description}
				</Text>

				{showLinkHome && (
					<Link
						href="/(auth)/welcome"
						className="underline text-default font-bold font-SFProTextBold py-1.5"
					>
						<Text>Go to home</Text>
					</Link>
				)}
			</View>
		</View>
	)
}

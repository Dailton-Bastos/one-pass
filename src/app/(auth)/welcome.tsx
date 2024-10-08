import { Button } from '@/components/shared/Button'
import { Logo } from '@/components/shared/Logo'
import { onboarding } from '@/constants'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'

const Welcome = () => {
	const renderPagination = (index: number, total: number) => {
		const itemsArray = Array.from({ length: total }, (_, index) => index + 1)

		const currentIndex = index + 1

		const previousItems = itemsArray.slice(0, index)

		const nextItems = itemsArray.slice(currentIndex)

		return (
			<View className="flex flex-row items-center justify-start gap-x-2.5 w-full">
				{previousItems.map((item) => (
					<Text key={item} className="font-BebasNeue text-gray text-sm">
						{item}
					</Text>
				))}

				<Text className="font-BebasNeue text-default text-xl">
					{currentIndex}
				</Text>

				{nextItems.map((item) => (
					<Text key={item} className="font-BebasNeue text-gray text-sm">
						{item}
					</Text>
				))}
			</View>
		)
	}

	return (
		<SafeAreaView className="flex items-center justify-between w-full h-full bg-white px-5 py-10">
			<View className="flex flex-row items-center justify-between w-full">
				<Logo />
			</View>

			<View className="flex items-center h-full w-full flex-1 pt-32 pb-12">
				<Swiper loop renderPagination={renderPagination}>
					{onboarding.map(({ description, id, Onboarding }) => (
						<View key={id} className="w-full flex-1">
							<Onboarding />

							<View className="w-full py-10">
								<Text className="text-gray font-SfProText text-md">
									{description}
								</Text>
							</View>
						</View>
					))}
				</Swiper>
			</View>

			<View className="w-full flex flex-row gap-x-4">
				<Button title="Register" variant="outline" className="flex-1" />
				<Button title="Login" variant="primary" className="flex-1" />
			</View>
		</SafeAreaView>
	)
}

export default Welcome

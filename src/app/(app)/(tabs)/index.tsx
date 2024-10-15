import { PasswordInfo } from '@/components/home/PasswordInfo'
import { Search } from '@/components/home/Search'
import { Logo } from '@/components/shared/Logo'
import { NotFound } from '@/components/shared/NotFound'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView className="flex flex-1 bg-white px-5">
				<Logo />

				<View className="pt-5 w-full">
					<PasswordInfo />
				</View>

				<View className="py-5 w-full">
					<Search placeholder="Search Websites..." />
				</View>

				<View className="w-full pt-12">
					<NotFound
						title="No Results"
						description="We couldn’t find anything. Try searching for something else."
					/>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default Home

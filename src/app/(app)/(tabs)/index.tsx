import { PasswordInfo } from '@/components/home/PasswordInfo'
import { Logo } from '@/components/shared/Logo'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
	return (
		<SafeAreaView className="flex flex-1 bg-white px-5">
			<Logo />

			<View className="pt-5">
				<PasswordInfo />
			</View>
		</SafeAreaView>
	)
}

export default Home

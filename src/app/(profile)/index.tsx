import { useSession } from '@/hooks/useSession'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
	const { session, signOut } = useSession()

	return (
		<SafeAreaView>
			<Text>Profile - {session?.user?.email}</Text>

			<TouchableWithoutFeedback onPress={signOut}>
				<Text>Logout</Text>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}

export default Profile

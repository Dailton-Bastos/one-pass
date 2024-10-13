import { useSession } from '@/hooks/useSession'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
	const { session } = useSession()

	return (
		<SafeAreaView>
			<Text>Profile - {session?.user?.email}</Text>
		</SafeAreaView>
	)
}

export default Profile

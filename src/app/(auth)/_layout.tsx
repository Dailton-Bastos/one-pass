import { useSession } from '@/hooks/useSession'
import { Redirect, Stack } from 'expo-router'

const Layout = () => {
	const { session } = useSession()

	if (session?.user) {
		return <Redirect href="/(app)/(tabs)" />
	}

	return (
		<Stack>
			<Stack.Screen name="welcome" options={{ headerShown: false }} />
			<Stack.Screen name="sign-up" options={{ headerShown: false }} />
			<Stack.Screen name="sign-in" options={{ headerShown: false }} />
			<Stack.Screen name="forgot-password" options={{ headerShown: false }} />
		</Stack>
	)
}

export default Layout

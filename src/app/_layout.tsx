import { SessionProvider } from '@/context/auth/SessionProvider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

import 'react-native-reanimated'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SFProText: require('../assets/fonts/SFProText-Regular.otf'),
		'SFProText-Medium': require('../assets/fonts/SFProText-Medium.otf'),
		'SFProText-Bold': require('../assets/fonts/SFProText-Bold.otf'),
		BebasNeue: require('../assets/fonts/BebasNeue-Regular.otf'),
	})

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) {
		return null
	}

	return (
		<SessionProvider>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(app)" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</SessionProvider>
	)
}

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SfProText: require('../assets/fonts/SF-Pro-Text-Regular.otf'),
		SfProTextMedium: require('../assets/fonts/SF-Pro-Text-Medium.otf'),
		SfProTextBold: require('../assets/fonts/SF-Pro-Text-Bold.otf'),
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
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="+not-found" />
		</Stack>
	)
}

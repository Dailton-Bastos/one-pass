import { supabase } from '@/lib/supabase'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { AppState } from 'react-native'
import 'react-native-reanimated'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
	if (state === 'active') return supabase.auth.startAutoRefresh()

	return supabase.auth.stopAutoRefresh()
})

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
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			<Stack.Screen name="+not-found" />
		</Stack>
	)
}

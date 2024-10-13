import { supabase } from '@/lib/supabase'
import React from 'react'
import { AppState } from 'react-native'
import { AuthContext } from './AuthContext'

import type { Session } from '@supabase/supabase-js'
import type { PropsWithChildren } from 'react'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
	if (state === 'active') return supabase.auth.startAutoRefresh()

	return supabase.auth.stopAutoRefresh()
})

export const SessionProvider = ({ children }: PropsWithChildren) => {
	const [session, setSession] = React.useState<Session | null>(null)
	const [isLoading, setIsLoading] = React.useState(false)

	React.useEffect(() => {
		setIsLoading(true)

		supabase.auth
			.getSession()
			.then(({ data: { session } }) => {
				setSession(session)

				setIsLoading(false)
			})
			.catch(() => setIsLoading(false))

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	}, [])

	const values = React.useMemo(
		() => ({
			session,
			isLoading,
		}),
		[session, isLoading],
	)

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

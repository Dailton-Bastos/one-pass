import React from 'react'

import { AuthContext } from '@/context/auth/AuthContext'

export const useSession = () => {
	const context = React.useContext(AuthContext)

	if (process.env.NODE_ENV !== 'production') {
		if (!context) {
			throw new Error('useSession must be wrapped in a <SessionProvider />')
		}
	}

	return context
}

import React from 'react'

import type { AuthContextData } from '@/types'

export const AuthContext = React.createContext<AuthContextData>({
	session: null,
	isLoading: false,
})

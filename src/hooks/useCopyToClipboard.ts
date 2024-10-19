import type { CopyToClipboardResult } from '@/types'
import React from 'react'
import * as Clipboard from 'expo-clipboard'

export const useCopyToClipboard = () => {
	const [result, setResult] = React.useState<CopyToClipboardResult>(null)

	const copyToClipboard = React.useCallback(async (value: string) => {
		try {
			await Clipboard.setStringAsync(value)

			setResult({ state: 'success' })

			return true
		} catch {
			setResult({ state: 'error', message: 'Something went wrong!' })

			return false
		} finally {
			setTimeout(() => setResult(null), 2000)
		}
	}, [])

	const fetchCopiedText = React.useCallback(async () => {
		try {
			const value = await Clipboard.getStringAsync()

			setResult({ state: 'success' })

			return value
		} catch {
			setResult({ state: 'error', message: 'Something went wrong!' })

			return false
		} finally {
			setTimeout(() => setResult(null), 2000)
		}
	}, [])

	return { copyToClipboard, fetchCopiedText, result }
}

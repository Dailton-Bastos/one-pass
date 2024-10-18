import type { PasswordStrengthProps } from '@/types'
import { checkPasswordStrength } from '@/utils'
import React from 'react'
import { Text, View } from 'react-native'
import { twJoin } from 'tailwind-merge'

export const PasswordStrength = ({
	showLabel,
	value,
	type = 'solid',
}: PasswordStrengthProps) => {
	const strength = checkPasswordStrength(value)

	const strengthScore = React.useMemo(() => {
		return strength.filter((req) => req.met).length
	}, [strength])

	return (
		<View className="flex flex-row items-center justify-start">
			{showLabel && (
				<Text className="text-gray font-SFProText text-sm mr-2">
					Password strength
				</Text>
			)}
			<View
				className={twJoin(
					'h-1 w-full rounded-full',
					type === 'dashed'
						? 'flex flex-row items-center gap-x-1'
						: 'overflow-hidden bg-input relative',
				)}
				role="progressbar"
				aria-valuenow={strengthScore}
				aria-valuemin={0}
				aria-valuemax={5}
				aria-label="Password strength"
			>
				{type === 'solid' ? (
					<View
						className={twJoin(
							'h-full transition-all duration-500 ease-out absolute',
							strengthScore === 0
								? 'bg-input w-0'
								: strengthScore <= 2
									? 'bg-default w-1/4'
									: strengthScore <= 4
										? 'bg-orange-400 w-2/4'
										: 'bg-emerald-500 w-full',
						)}
					/>
				) : (
					<>
						<View
							className={twJoin(
								'w-10 h-full',
								strengthScore === 0
									? 'bg-input'
									: strengthScore <= 2
										? 'bg-default'
										: strengthScore <= 4
											? 'bg-orange-400'
											: 'bg-emerald-500',
							)}
						/>
						<View
							className={twJoin(
								'w-10 h-full',
								strengthScore <= 2
									? 'bg-input'
									: strengthScore <= 4
										? 'bg-orange-400'
										: 'bg-emerald-500',
							)}
						/>

						<View
							className={twJoin(
								'w-10 h-full',
								strengthScore <= 4 ? 'bg-input' : 'bg-emerald-500',
							)}
						/>
					</>
				)}
			</View>
		</View>
	)
}

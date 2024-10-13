import { Button } from '@/components/shared/Button'
import { InputField } from '@/components/shared/InputField'
import { InputPassword } from '@/components/shared/InputPassword'
import { Logo } from '@/components/shared/Logo'
import { supabase } from '@/lib/supabase'
import { schema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, router } from 'expo-router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
	Alert,
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type * as z from 'zod'

const SignUp = () => {
	const [isPending, startTransition] = React.useTransition()

	const { handleSubmit, control, formState } = useForm<
		z.infer<typeof schema.signUp>
	>({
		resolver: zodResolver(schema.signUp),
		reValidateMode: 'onChange',
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			name: '',
			password: '',
		},
	})

	const { errors } = formState

	const onSubmit = React.useCallback(
		(fields: z.infer<typeof schema.signUp>) => {
			startTransition(() => {
				supabase.auth
					.signUp({
						email: fields.email,
						password: fields.password,
					})
					.then(({ error, data }) => {
						// TODO check user email verification

						if (error) Alert.alert(error?.message)

						if (data?.session) return router.replace('/(profile)')
					})
			})
		},
		[],
	)

	return (
		<SafeAreaView className="w-full h-full px-5 bg-white">
			<Logo />

			<View className="w-full py-5">
				<Text className="text-dark uppercase font-BebasNeue text-6xl">
					Register
				</Text>

				<Text className="text-sm text-gray font-SFProText">
					Let's get you setup with a new account!
				</Text>
			</View>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
				<View className="w-full py-12">
					<Controller
						control={control}
						name="name"
						render={({ field: { onChange, value } }) => (
							<InputField
								label="Name"
								placeholder="John Doe"
								readOnly={isPending}
								error={!!errors?.name}
								errorMessage={errors?.name?.message}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>

					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, value } }) => (
							<InputField
								label="Email"
								placeholder="johndoe@email.com"
								readOnly={isPending}
								error={!!errors?.email}
								errorMessage={errors?.email?.message}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>

					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, value } }) => (
							<InputPassword
								label="Password"
								placeholder="Password"
								readOnly={isPending}
								error={!!errors?.password}
								errorMessage={errors?.password?.message}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>

					<Button
						title="Register"
						variant="primary"
						activeOpacity={0.9}
						disabled={isPending}
						isLoading={isPending}
						onPress={handleSubmit(onSubmit)}
					/>

					<View className="w-full flex items-center justify-center pt-12">
						<Text className="text-dark font-SFProText text-sm">
							Already have an account?
						</Text>

						<Link
							href="/(auth)/sign-in"
							className="font-BebasNeue text-default"
						>
							Login
						</Link>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}

export default SignUp

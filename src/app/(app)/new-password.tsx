import { BackButton } from '@/components/shared/BackButton'
import { Button } from '@/components/shared/Button'
import { InputField } from '@/components/shared/InputField'
import { InputPassword } from '@/components/shared/InputPassword'
import { schema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
	Keyboard,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type * as z from 'zod'

const NewPassword = () => {
	const { handleSubmit, control, formState } = useForm<
		z.infer<typeof schema.addPassword>
	>({
		resolver: zodResolver(schema.addPassword),
		reValidateMode: 'onChange',
		mode: 'onSubmit',
		defaultValues: {
			username: '',
			password: '',
			name: '',
			url: '',
			email: '',
		},
	})

	const { errors } = formState

	const onSubmit = React.useCallback(
		(fields: z.infer<typeof schema.addPassword>) => {
			return fields
		},
		[],
	)

	return (
		<SafeAreaView className="w-full h-full px-5 pt-4 bg-white">
			<BackButton backLink="/(app)/(tabs)/" />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className="w-full py-10">
					<Text className="text-dark uppercase font-BebasNeue text-6xl">
						Add New
					</Text>
				</View>

				<TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
					<View className="w-full">
						<Controller
							control={control}
							name="name"
							render={({ field: { onChange, value } }) => (
								<InputField
									label="Name"
									placeholder="Website / App Name"
									// readOnly={isPending}
									error={!!errors?.name}
									errorMessage={errors?.name?.message}
									onChangeText={onChange}
									value={value}
								/>
							)}
						/>

						<Controller
							control={control}
							name="url"
							render={({ field: { onChange, value } }) => (
								<InputField
									label="Url"
									placeholder="Website / App Link"
									// readOnly={isPending}
									error={!!errors?.url}
									errorMessage={errors?.url?.message}
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
									placeholder="Email"
									// readOnly={isPending}
									error={!!errors?.email}
									errorMessage={errors?.email?.message}
									onChangeText={onChange}
									value={value}
								/>
							)}
						/>

						<Controller
							control={control}
							name="username"
							render={({ field: { onChange, value } }) => (
								<InputField
									label="Username"
									placeholder="Username"
									// readOnly={isPending}
									error={!!errors?.username}
									errorMessage={errors?.username?.message}
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
									// readOnly
									error={!!errors?.password}
									errorMessage={errors?.password?.message}
									onChangeText={onChange}
									value={value}
									showPasswordStrength={!!value}
								/>
							)}
						/>

						<View className="flex flex-row items-center justify-end w-full pt-2.5 ">
							<Button
								title="Generate new"
								variant="outline"
								className="max-w-[157px] w-full"
								// disabled={isPending}
								// isLoading={isPending}
								// onPress={handleSubmit(onSubmit)}
							/>
						</View>

						<View className="w-full py-12">
							<Button
								title="Add Password"
								variant="primary"
								activeOpacity={0.9}
								// disabled={isPending}
								// isLoading={isPending}
								onPress={handleSubmit(onSubmit)}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
		</SafeAreaView>
	)
}

export default NewPassword

import * as z from 'zod'

export const schema = {
	signUp: z.object({
		email: z.string().email({
			message: 'Email is required',
		}),
		password: z.string().min(6, {
			message: 'Minimum 6 characters required',
		}),
		name: z.string().min(1, {
			message: 'Name is required',
		}),
	}),

	signIn: z.object({
		email: z.string().email({
			message: 'Email is required',
		}),
		password: z.string().min(1, {
			message: 'Password required',
		}),
	}),

	addPassword: z.object({
		name: z.string().trim().min(1, {
			message: 'Name is required',
		}),
		url: z.union([z.literal(''), z.string().url()]),
		email: z.union([z.literal(''), z.string().email()]),
		username: z.optional(z.string().trim()),
		password: z.string().min(1, {
			message: 'Password is required',
		}),
	}),
}

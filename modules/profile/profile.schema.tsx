import { z } from 'zod'

export const profileSchema = z.object({
	login: z.string().min(2, 'Минимум 2 символа').max(30, 'Максимум 30 символов'),
	password: z
		.string()
		.min(8, 'Пароль должен быть не менее 8 символов')
		.max(64, 'Максимум 64 символа')
		.regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
		.regex(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
		.regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
		.regex(/[^A-Za-z0-9]/, 'Пароль должен содержать хотя бы один спецсимвол')
		.optional()
		.or(z.literal('')),
	isAdmin: z.boolean().default(false)
})

export type ProfileSchema = z.infer<typeof profileSchema>

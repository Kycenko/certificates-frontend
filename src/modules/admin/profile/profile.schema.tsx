import { z } from 'zod'

export const adminProfileSchema = z.object({
	login: z
		.string()
		.min(5, 'Минимум 5 символов')
		.max(20, 'Максимум 20 символов'),
	password: z
		.string()
		.min(8, 'Пароль должен быть не менее 8 символов')
		.max(64, 'Максимум 64 символа')
		.regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
		.regex(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
		.regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
		.regex(/[^A-Za-z0-9]/, 'Пароль должен содержать хотя бы один спецсимвол')
		.optional(),
	role: z.enum(['ADMIN', 'TEACHER']).optional()
})

export type AdminProfileSchema = z.infer<typeof adminProfileSchema>

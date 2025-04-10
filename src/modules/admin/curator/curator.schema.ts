import { z } from 'zod'

export const adminSchema = z.object({
	login: z.string({ message: 'Обязательное поле' }),
	password: z
		.string()
		.min(8, 'Пароль должен быть не менее 8 символов')
		.max(64, 'Максимум 64 символа')
		.regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
		.regex(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
		.regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
		.regex(/[^A-Za-z0-9]/, 'Пароль должен содержать хотя бы один спецсимвол')
})

export const curatorSchema = adminSchema.extend({
	displayedName: z
		.string({ message: 'Обязательное поле' })
		.min(5, 'Минимум 5 символов')
		.max(50, 'Максимум 50 символов'),
	groupId: z.string({ message: 'Обязательное поле' })
})

export type CuratorSchema = z.infer<typeof curatorSchema>

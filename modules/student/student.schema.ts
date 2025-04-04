import { z } from 'zod'

export const studentSchema = z.object({
	firstName: z
		.string({ message: 'Обязательное поле' })
		.min(2, 'Минимум 2 символа')
		.max(50, 'Максимум 50 символов'),
	lastName: z
		.string({ message: 'Обязательное поле' })
		.min(2, 'Минимум 2 символа')
		.max(50, 'Максимум 50 символов'),
	secondName: z.string().max(50, 'Максимум 50 символов').optional(),
	birthDate: z.date({ message: 'Обязательное поле' }),
	isExpelled: z.boolean().default(false),
	groupId: z.string().optional()
})

export type StudentSchema = z.infer<typeof studentSchema>

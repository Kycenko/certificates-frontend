import { z } from 'zod'

export const groupSchema = z.object({
	title: z
		.string({ message: 'Обязательное поле' })
		.min(5, 'Минимум 5 символов')
		.max(5, 'Максимум 5 символов'),
	courseId: z.string({ message: 'Обязательное поле' })
})

export type GroupSchema = z.infer<typeof groupSchema>

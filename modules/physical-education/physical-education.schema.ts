import { z } from 'zod'

export const physicalEducationSchema = z.object({
	title: z
		.string({ message: 'Обязательное поле' })
		.min(6, 'Минимум 6 символов')
		.max(20, 'Максимум 20 символов')
})

export type PhysicalEducationSchema = z.infer<typeof physicalEducationSchema>

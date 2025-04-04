import { z } from 'zod'

export const healthGroupSchema = z.object({
	title: z
		.string({ message: 'Обязательное поле' })
		.min(6, 'Минимум 6 символов')
		.max(20, 'Максимум 20 символов')
})

export type HealthGroupSchema = z.infer<typeof healthGroupSchema>

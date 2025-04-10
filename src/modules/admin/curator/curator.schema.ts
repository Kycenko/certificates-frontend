import { z } from 'zod'

export const curatorSchema = z.object({
	fullName: z
		.string({ message: 'Обязательное поле' })
		.min(5, 'Минимум 5 символов')
		.max(50, 'Максимум 50 символов'),
	userId: z.string({ message: 'Обязательное поле' }),
	groupId: z.string({ message: 'Обязательное поле' })
})

export type CuratorSchema = z.infer<typeof curatorSchema>

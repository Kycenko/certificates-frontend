import { z } from 'zod'

export const departmentSchema = z.object({
	title: z
		.string({ message: 'Обязательное поле' })
		.min(4, 'Минимум 4 символа')
		.max(50, 'Максимум 50 символов')
})

export type DepartmentSchema = z.infer<typeof departmentSchema>

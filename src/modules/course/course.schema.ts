import { z } from 'zod'

export const courseSchema = z.object({
	number: z.string({ message: 'Обязательное поле' }),
	departmentId: z.string({ message: 'Обязательное поле' })
})

export type CourseSchema = z.infer<typeof courseSchema>

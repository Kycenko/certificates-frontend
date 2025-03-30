import { z } from 'zod'

export const courseSchema = z.object({
	number: z.string().min(1).max(4),
	departmentId: z.string()
})

export type CourseSchema = z.infer<typeof courseSchema>

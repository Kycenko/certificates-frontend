import { z } from 'zod'

export const groupSchema = z.object({
	title: z.string().min(5).max(5),
	courseId: z.string()
})

export type GroupSchema = z.infer<typeof groupSchema>

import { z } from 'zod'

export const groupSchema = z.object({
	title: z.string().min(6).max(20),
	courseId: z.string()
})

export type GroupSchema = z.infer<typeof groupSchema>

import { z } from 'zod'

export const physicalEducationSchema = z.object({
	title: z.string().min(6).max(20)
})

export type PhysicalEducationSchema = z.infer<typeof physicalEducationSchema>

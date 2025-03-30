import { z } from 'zod'

export const healthGroupSchema = z.object({
	title: z.string().min(6).max(20)
})

export type HealthGroupSchema = z.infer<typeof healthGroupSchema>

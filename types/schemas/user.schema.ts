import { z } from 'zod'

export const userSchema = z.object({
	login: z.string().min(6).max(20),
	isAdmin: z.boolean()
})

export type userSchema = z.infer<typeof userSchema>

import { z } from 'zod'

export const userSchema = z.object({
	login: z.string().min(6).max(20),
	password: z.string().min(8),
	isAdmin: z.boolean()
})

export type UserSchema = z.infer<typeof userSchema>

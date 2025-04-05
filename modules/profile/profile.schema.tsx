import { z } from 'zod'

import { loginSchema } from '../auth/login.schema'

export const profileSchema = loginSchema.extend({
	isAdmin: z.boolean().default(true)
})

export type ProfileSchema = z.infer<typeof profileSchema>

import { z } from 'zod'

export const studentSchema = z.object({
	firstName: z.string().min(4),
	lastName: z.string().min(4),
	secondName: z.string().optional(),
	birthDate: z.date(),
	isExpelled: z.boolean(),
	groupId: z.string().optional()
})

export type StudentSchema = z.infer<typeof studentSchema>

import { z } from 'zod'

export const departmentSchema = z.object({
	title: z.string().min(6).max(20)
})

export type DepartmentSchema = z.infer<typeof departmentSchema>

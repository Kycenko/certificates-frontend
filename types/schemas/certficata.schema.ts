import { z } from 'zod'

export const certificateSchema = z.object({
	startDate: z.date(),
	finishDate: z.date(),
	studentId: z.string(),
	healthGroupId: z.string(),
	physicalEducationId: z.string()
})

export type CertificateSchema = z.infer<typeof certificateSchema>

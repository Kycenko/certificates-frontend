import { z } from 'zod'

export const certificateSchema = z
	.object({
		startDate: z.date(),
		finishDate: z.date(),
		studentId: z.string(),
		healthGroupId: z.string(),
		physicalEducationId: z.string()
	})
	.refine(data => data.finishDate > data.startDate, {
		message: 'Дата окончания не может быть меньше даты начала',
		path: ['finishDate']
	})

export type CertificateSchema = z.infer<typeof certificateSchema>

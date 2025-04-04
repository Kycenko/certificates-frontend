import { z } from 'zod'

export const certificateSchema = z
	.object({
		startDate: z.date({ message: 'Обязательное поле' }),
		finishDate: z.date({ message: 'Обязательное поле' }),
		studentId: z.string({ message: 'Обязательное поле' }),
		healthGroupId: z.string({ message: 'Обязательное поле' }),
		physicalEducationId: z.string({ message: 'Обязательное поле' })
	})
	.refine(data => data.finishDate > data.startDate, {
		message: 'Дата окончания не может быть меньше даты начала',
		path: ['finishDate']
	})

export type CertificateSchema = z.infer<typeof certificateSchema>

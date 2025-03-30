import { Certificate } from '@modules/certificate/certificate.types'

export type HealthGroup = {
	id: string
	title: string
	certificates?: Certificate[]
}

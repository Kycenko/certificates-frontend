import { Certificate } from './certificate.types'

export type HealthGroup = {
	id: string
	title: string
	certificates?: Certificate[]
}

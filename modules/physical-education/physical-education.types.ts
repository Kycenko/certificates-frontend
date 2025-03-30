import { Certificate } from './certificate.types'

export type PhysicalEducation = {
	id: string
	title: string
	certificates?: Certificate[]
}

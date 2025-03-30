import { Certificate } from './certificate.types'
import { Group } from './group.types'

export type Student = {
	id: string
	firstName: string
	lastName: string
	secondName: string
	birthDate: Date
	isExpelled: boolean
	group: Group
	certificates: Certificate[]
}

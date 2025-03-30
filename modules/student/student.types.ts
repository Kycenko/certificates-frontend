import { Group } from '@modules/group/group.types'

import { Certificate } from '../certificate/certificate.types'

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

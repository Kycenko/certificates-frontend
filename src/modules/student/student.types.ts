import { Certificate } from '../certificate/certificate.types'

import { Group } from '@/modules/group/group.types'

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

export type StudentFieldsProps = {
	data: {
		id: string
		title: string
	}[]
	isLoading: boolean
}

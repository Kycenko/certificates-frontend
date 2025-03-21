import { Group } from './group.types'

export type Student = {
	firstName: string
	lastName: string
	secondName: string
	birthDate: Date
	isExpelled: boolean
	group: Group
	certificates: any[]
}

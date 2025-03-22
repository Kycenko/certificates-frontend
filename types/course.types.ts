import { Department } from './department.types'
import { Group } from './group.types'

export type Course = {
	id: string
	number: number
	groups: Group[]
	department: Department
}

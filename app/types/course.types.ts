import { Department } from './department.types'
import { Group } from './group.types'

export type Course = {
	number: number
	groups: Group[]
	department: Department
}

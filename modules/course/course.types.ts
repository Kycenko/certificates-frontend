import { Group } from '../group/group.types'

import { Department } from './department.types'

export type Course = {
	id: string
	number: number
	groups: Group[]
	department: Department
}

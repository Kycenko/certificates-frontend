import { Department } from '../department/department.types'
import { Group } from '../group/group.types'

export type Course = {
	id: string
	number: number
	groups: Group[]
	department: Department
}

export type CourseFieldsProps = {
	data: { id: string; title: string }[]
	isLoading: boolean
}

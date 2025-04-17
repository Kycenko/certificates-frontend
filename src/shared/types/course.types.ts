import { Department } from './department.types'
import { Group } from './group.types'

export type Course = {
	id: string
	number: string
	groups: Group[]
	department: Department
}

export type CourseFieldsProps = {
	data: { id: string; title: string }[]
	isLoading: boolean
}

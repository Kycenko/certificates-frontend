import { Course } from './course.types'
import { Student } from './student.types'

export type Group = {
	id: string
	title: string
	course: Course
	students: Student[]
}

export type GroupFieldsProps = {
	data: {
		id: string
		number: string
		department: { title: string }
	}[]
	isLoading: boolean
}

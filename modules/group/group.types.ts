import { Course } from '@modules/course/course.types'

import { Student } from '../student/student.types'

export type Group = {
	id: string
	title: string
	course: Course
	students: Student[]
}

export type GroupFieldsProps = {
	data: {
		id: string
		number: number
		department: { title: string }
	}[]

	isLoading: boolean
}

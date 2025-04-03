import { Course } from '@modules/course/course.types'

export type Department = {
	id: string
	title: string
	courses: Course[]
}



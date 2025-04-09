import { Course } from './course.types'

export type Department = {
	id: string
	title: string
	courses: Course[]
}

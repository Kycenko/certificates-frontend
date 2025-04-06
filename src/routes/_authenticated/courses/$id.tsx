import { createFileRoute } from '@tanstack/react-router'

import CourseDetailsComponent from '@/modules/course/details/course-details.component'

export const Route = createFileRoute('/_authenticated/courses/$id')({
	component: () => <CourseDetailsComponent />
})

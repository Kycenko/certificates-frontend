import { createFileRoute } from '@tanstack/react-router'

import CourseDetailsComponent from '@/modules/admin/course/details/CourseDetailsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/courses/$id'
)({
	component: () => <CourseDetailsComponent />
})

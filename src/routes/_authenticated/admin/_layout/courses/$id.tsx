import { createFileRoute } from '@tanstack/react-router'

import CourseDetailsComponent from '@/modules/admin/course/details/course-details.component'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/courses/$id'
)({
	component: () => <CourseDetailsComponent />
})

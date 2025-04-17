import { createFileRoute } from '@tanstack/react-router'

import StudentDetailsComponent from '@/modules/admin/student/details/StudentDetailsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/students/$id'
)({
	component: () => <StudentDetailsComponent />
})

import { createFileRoute } from '@tanstack/react-router'

import StudentDetailsComponent from '@/modules/admin/student/details/student-details.component'

export const Route = createFileRoute('/_authenticated/students/$id')({
	component: () => <StudentDetailsComponent />
})

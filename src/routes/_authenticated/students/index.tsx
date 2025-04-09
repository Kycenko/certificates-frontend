import { createFileRoute } from '@tanstack/react-router'

import StudentsComponent from '@/modules/admin/student/students.component'

export const Route = createFileRoute('/_authenticated/students/')({
	component: () => <StudentsComponent />
})

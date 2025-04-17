import { createFileRoute } from '@tanstack/react-router'

import StudentsComponent from '@/modules/admin/student/StudentsComponent'

export const Route = createFileRoute('/_authenticated/admin/_layout/students/')(
	{
		component: () => <StudentsComponent />
	}
)

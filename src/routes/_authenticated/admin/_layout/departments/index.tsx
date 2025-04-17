import { createFileRoute } from '@tanstack/react-router'

import DepartmentsComponent from '@/modules/admin/department/DepartmentsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/departments/'
)({
	component: DepartmentsComponent
})

import { createFileRoute } from '@tanstack/react-router'

import DepartmentDetailsComponent from '@/modules/admin/department/details/DepartmentDetailsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/departments/$id'
)({
	component: DepartmentDetailsComponent
})

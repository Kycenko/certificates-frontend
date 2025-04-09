import { createFileRoute } from '@tanstack/react-router'

import DepartmentsComponent from '@/modules/admin/department/departments.component'

export const Route = createFileRoute('/_authenticated/departments/')({
	component: DepartmentsComponent
})

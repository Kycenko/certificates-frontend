import { createFileRoute } from '@tanstack/react-router'

import DepartmentsComponent from '@/modules/department/departments.component'

export const Route = createFileRoute('/_authenticated/departments/')({
	component: DepartmentsComponent
})

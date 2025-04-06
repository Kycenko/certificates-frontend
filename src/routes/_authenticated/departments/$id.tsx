import { createFileRoute } from '@tanstack/react-router'

import DepartmentDetailsComponent from '@/modules/department/details/department-details.component'

export const Route = createFileRoute('/_authenticated/departments/$id')({
	component: () => <DepartmentDetailsComponent />
})

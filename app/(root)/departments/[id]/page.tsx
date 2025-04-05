'use client'

import dynamic from 'next/dynamic'

const DepartmentDetailsComponent = dynamic(
	() => import('@/modules/department/details/department-details.component')
)

export default function DepartmentsDetailsPage() {
	return <DepartmentDetailsComponent />
}

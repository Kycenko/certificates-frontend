'use client'

import dynamic from 'next/dynamic'

const DepartmentsComponent = dynamic(
	() => import('@/modules/department/departments.component')
)

export default function DepartmentsPage() {
	return <DepartmentsComponent />
}

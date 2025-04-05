'use client'

import dynamic from 'next/dynamic'

const StudentsComponent = dynamic(
	() => import('@/modules/student/students.component')
)

export default function StudentsPage() {
	return <StudentsComponent />
}

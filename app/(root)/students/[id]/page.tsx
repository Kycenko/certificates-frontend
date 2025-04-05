'use client'

import dynamic from 'next/dynamic'

const StudentDetailsComponent = dynamic(
	() => import('@/modules/student/details/student-details.component')
)

export default function StudentDetailsPage() {
	return <StudentDetailsComponent />
}

'use client'

import dynamic from 'next/dynamic'

const CoursesComponent = dynamic(
	() => import('@/modules/course/courses.component')
)

export default function CoursesPage() {
	return <CoursesComponent />
}

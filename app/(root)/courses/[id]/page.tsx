'use client'

import dynamic from 'next/dynamic'

const CourseDetailsComponent = dynamic(
	() => import('@/modules/course/details/course-details.component')
)

export default function CoursesDetailsPage() {
	return <CourseDetailsComponent />
}

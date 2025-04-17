import { createFileRoute } from '@tanstack/react-router'

import CoursesComponent from '@/modules/admin/course/CoursesComponent'

export const Route = createFileRoute('/_authenticated/admin/_layout/courses/')({
	component: () => <CoursesComponent />
})

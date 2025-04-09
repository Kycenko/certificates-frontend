import { createFileRoute } from '@tanstack/react-router'

import CoursesComponent from '@/modules/admin/course/courses.component'

export const Route = createFileRoute('/_authenticated/courses/')({
	component: () => <CoursesComponent />
})

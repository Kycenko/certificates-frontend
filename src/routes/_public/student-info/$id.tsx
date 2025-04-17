import { createFileRoute } from '@tanstack/react-router'

import StudentInfoComponent from '@/modules/public/student-info/StudentInfoComponent'

export const Route = createFileRoute('/_public/student-info/$id')({
	component: StudentInfoComponent
})

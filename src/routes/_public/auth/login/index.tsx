import { createFileRoute } from '@tanstack/react-router'

import LoginComponent from '@/modules/public/auth/login.component'

export const Route = createFileRoute('/_public/auth/login/')({
	component: LoginComponent
})

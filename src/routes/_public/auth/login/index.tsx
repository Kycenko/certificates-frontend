import { createFileRoute } from '@tanstack/react-router'

import PageTransition from '@/shared/components/motions/PageTransition'

import LoginComponent from '@/modules/public/auth/LoginComponent'

export const Route = createFileRoute('/_public/auth/login/')({
	component: () => (
		<PageTransition>
			<LoginComponent />
		</PageTransition>
	)
})

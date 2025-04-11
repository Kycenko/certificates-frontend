import { createFileRoute } from '@tanstack/react-router'

import PageTransition from '@/shared/components/motions/PageTransition'

import LandingComponent from '@/modules/public/landing/LandingComponent'

export const Route = createFileRoute('/_public/')({
	component: () => (
		<PageTransition>
			<LandingComponent />
		</PageTransition>
	)
})

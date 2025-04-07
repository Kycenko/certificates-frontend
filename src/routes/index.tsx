import { createFileRoute } from '@tanstack/react-router'

import LandingComponent from '@/modules/landing/landing.component'

export const Route = createFileRoute('/')({
	component: () => <LandingComponent />
})

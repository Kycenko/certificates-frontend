import { createFileRoute } from '@tanstack/react-router'

import LandingComponent from '@/modules/public/landing/landing.component'

export const Route = createFileRoute('/_public/')({
	component: () => <LandingComponent />
})

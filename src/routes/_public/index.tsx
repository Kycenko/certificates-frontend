import { createFileRoute } from '@tanstack/react-router'

import LandingComponent from '@/modules/public/landing/LandingComponent'

export const Route = createFileRoute('/_public/')({
	component: LandingComponent
})

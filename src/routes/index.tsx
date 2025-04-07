import { createFileRoute, redirect } from '@tanstack/react-router'
import Cookies from 'js-cookie'

import LandingComponent from '@/modules/landing/landing.component'

export const Route = createFileRoute('/')({
	beforeLoad: async () => {
		const token = Cookies.get('accessToken')

		if (token)
			throw redirect({
				to: '/statistics'
			})
	},
	component: () => <LandingComponent />
})

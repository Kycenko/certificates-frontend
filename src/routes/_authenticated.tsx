import { createFileRoute, redirect } from '@tanstack/react-router'
import Cookies from 'js-cookie'

import RootLayout from '@/shared/components/root-layout'

export const Route = createFileRoute('/_authenticated')({
	beforeLoad: async ({ location }) => {
		const token = Cookies.get('accessToken')

		if (!token)
			throw redirect({
				to: '/auth/login',
				search: { redirect: location.href }
			})
	},
	component: () => <RootLayout />
})

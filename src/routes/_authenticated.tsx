import { Outlet, createFileRoute } from '@tanstack/react-router'

import { checkAuth } from '@/shared/lib/auth'

export const Route = createFileRoute('/_authenticated')({
	beforeLoad: async ({ context }) => {
		await checkAuth(context.auth)
	},
	component: Outlet
})

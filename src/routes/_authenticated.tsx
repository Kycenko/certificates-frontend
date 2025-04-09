import { createFileRoute, redirect } from '@tanstack/react-router'

import AdminLayout from '@/shared/components/admin-layout'
import { checkAuth } from '@/shared/lib/auth'

export const Route = createFileRoute('/_authenticated')({
	beforeLoad: async ({ context }) => {
		try {
			const user = await checkAuth(context.auth)
			return { user }
		} catch {
			throw redirect({
				to: '/auth/login',
				search: { redirect: location.href }
			})
		}
	},
	component: () => <AdminLayout />
})

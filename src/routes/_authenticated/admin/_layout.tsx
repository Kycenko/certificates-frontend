import { createFileRoute } from '@tanstack/react-router'

import AdminLayout from '@/shared/components/layouts/admin-layout'
import { checkRole } from '@/shared/lib'
import { UserRole } from '@/shared/types'

export const Route = createFileRoute('/_authenticated/admin/_layout')({
	beforeLoad: async ({ context }) => {
		checkRole(context.auth.user!, UserRole.ADMIN)
	},

	component: AdminLayout
})

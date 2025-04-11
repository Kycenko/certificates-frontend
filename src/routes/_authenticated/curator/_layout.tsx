import { createFileRoute } from '@tanstack/react-router'

import CuratorLayout from '@/shared/components/layouts/curator-layout'
import { checkRole } from '@/shared/lib/auth'
import { UserRole } from '@/shared/types/user.types'

export const Route = createFileRoute('/_authenticated/curator/_layout')({
	beforeLoad: async ({ context }) => {
		checkRole(context.auth.user!, UserRole.CURATOR)
	},
	component: CuratorLayout
})

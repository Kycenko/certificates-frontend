import { createFileRoute } from '@tanstack/react-router'

import { checkRole } from '@/shared/lib/auth'
import { UserRole } from '@/shared/types'

export const Route = createFileRoute('/_authenticated/_admin')({
	component: () => <div>Admin</div>,
	beforeLoad: ({ context }) => {
		checkRole(context.user, UserRole.ADMIN)
	}
})

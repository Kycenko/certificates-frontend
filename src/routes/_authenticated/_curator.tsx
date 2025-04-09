import { createFileRoute } from '@tanstack/react-router'

import { checkRole } from '@/shared/lib/auth'
import { UserRole } from '@/shared/types/user.types'

export const Route = createFileRoute('/_authenticated/_curator')({
	component: () => <div>Curator</div>,
	beforeLoad: ({ context }) => {
		checkRole(context.user, UserRole.ADMIN)
	}
})

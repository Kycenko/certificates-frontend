import { createFileRoute } from '@tanstack/react-router'

import EditProfileForm from '@/modules/admin/profile/EditAdminProfileForm'

export const Route = createFileRoute('/_authenticated/admin/_layout/profile/')({
	component: () => <EditProfileForm />
})

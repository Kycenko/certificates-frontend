import { createFileRoute } from '@tanstack/react-router'

import EditProfileForm from '@/modules/admin/profile/edit-admin-profile-form'

export const Route = createFileRoute('/_authenticated/profile/')({
	component: () => <EditProfileForm />
})

import { createFileRoute } from '@tanstack/react-router'

import EditProfileForm from '@/modules/profile/edit-profile-form'

export const Route = createFileRoute('/_authenticated/profile/')({
	component: () => <EditProfileForm />
})

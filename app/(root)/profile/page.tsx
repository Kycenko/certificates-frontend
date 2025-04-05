'use client'

import dynamic from 'next/dynamic'

const EditProfileForm = dynamic(
	() => import('@/modules/profile/edit-profile-form')
)

export default function ProfilePage() {
	return <EditProfileForm />
}

'use client'

import dynamic from 'next/dynamic'

const GroupDetailsComponent = dynamic(
	() => import('@/modules/group/details/group-details.component')
)

export default function GroupDetailsPage() {
	return <GroupDetailsComponent />
}

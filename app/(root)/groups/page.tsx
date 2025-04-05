'use client'

import dynamic from 'next/dynamic'

const GroupsComponent = dynamic(
	() => import('@/modules/group/groups.component')
)

export default function GroupsPage() {
	return <GroupsComponent />
}

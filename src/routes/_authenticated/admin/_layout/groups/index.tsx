import { createFileRoute } from '@tanstack/react-router'

import GroupsComponent from '@/modules/admin/group/GroupsComponent'

export const Route = createFileRoute('/_authenticated/admin/_layout/groups/')({
	component: () => <GroupsComponent />
})

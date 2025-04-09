import { createFileRoute } from '@tanstack/react-router'

import GroupsComponent from '@/modules/admin/group/groups.component'

export const Route = createFileRoute('/_authenticated/groups/')({
	component: () => <GroupsComponent />
})

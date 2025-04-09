import { createFileRoute } from '@tanstack/react-router'

import GroupDetailsComponent from '@/modules/admin/group/details/group-details.component'

export const Route = createFileRoute('/_authenticated/groups/$id')({
	component: () => <GroupDetailsComponent />
})

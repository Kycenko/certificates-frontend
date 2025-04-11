import { createFileRoute } from '@tanstack/react-router'

import GroupDetailsComponent from '@/modules/admin/group/details/GroupDetailsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/groups/$id'
)({
	component: () => <GroupDetailsComponent />
})

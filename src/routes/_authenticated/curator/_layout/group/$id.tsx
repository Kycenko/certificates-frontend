import { createFileRoute } from '@tanstack/react-router'

import CuratorGroupComponent from '@/modules/curator/group/curator-group.component'

export const Route = createFileRoute(
	'/_authenticated/curator/_layout/group/$id'
)({
	component: CuratorGroupComponent
})

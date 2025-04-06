import { createFileRoute } from '@tanstack/react-router'

import HealthGroupsComponent from '@/modules/health-group/health-groups.component'

export const Route = createFileRoute(
	'/_authenticated/groups-management/health-groups/'
)({
	component: () => <HealthGroupsComponent />
})

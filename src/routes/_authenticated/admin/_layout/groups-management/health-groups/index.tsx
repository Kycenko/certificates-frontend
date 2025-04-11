import { createFileRoute } from '@tanstack/react-router'

import HealthGroupsComponent from '@/modules/admin/health-group/HealthGroupsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/groups-management/health-groups/'
)({
	component: () => <HealthGroupsComponent />
})

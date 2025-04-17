import { createFileRoute } from '@tanstack/react-router'

import HealthGroupDetailsComponent from '@/modules/admin/health-group/details/HealthGroupDetailsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/groups-management/health-groups/$id'
)({
	component: () => <HealthGroupDetailsComponent />
})

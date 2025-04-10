import { createFileRoute } from '@tanstack/react-router'

import PhysicalEducationsComponent from '@/modules/admin/physical-education/physical-educations.component'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/groups-management/physical-educations/'
)({
	component: () => <PhysicalEducationsComponent />
})

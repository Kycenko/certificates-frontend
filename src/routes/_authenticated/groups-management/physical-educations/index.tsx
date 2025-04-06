import { createFileRoute } from '@tanstack/react-router'

import PhysicalEducationsComponent from '@/modules/physical-education/physical-educations.component'

export const Route = createFileRoute(
	'/_authenticated/groups-management/physical-educations/'
)({
	component: () => <PhysicalEducationsComponent />
})

import { createFileRoute } from '@tanstack/react-router'

import PhysicalEducationDetailsComponent from '@/modules/physical-education/details/physical-education-details.component'

export const Route = createFileRoute(
	'/_authenticated/groups-management/physical-educations/$id'
)({
	component: () => <PhysicalEducationDetailsComponent />
})

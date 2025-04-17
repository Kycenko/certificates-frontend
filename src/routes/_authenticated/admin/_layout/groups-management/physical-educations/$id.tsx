import { createFileRoute } from '@tanstack/react-router'

import PhysicalEducationDetailsComponent from '@/modules/admin/physical-education/details/PhysicalEducationDetailsComponent'

export const Route = createFileRoute(
	'/_authenticated/admin/_layout/groups-management/physical-educations/$id'
)({
	component: () => <PhysicalEducationDetailsComponent />
})

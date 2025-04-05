'use client'

import dynamic from 'next/dynamic'

const PhysicalEducationDetailsComponent = dynamic(
	() =>
		import(
			'@/modules/physical-education/details/physical-education-details.component'
		)
)

export default function PhysicalEducationDetailsPage() {
	return <PhysicalEducationDetailsComponent />
}

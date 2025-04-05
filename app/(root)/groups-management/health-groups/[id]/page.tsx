'use client'

import dynamic from 'next/dynamic'

const HealthGroupDetailsComponent = dynamic(
	() => import('@/modules/health-group/details/health-group-details.component')
)

export default function HealthGroupDetailsPage() {
	return <HealthGroupDetailsComponent />
}

import { createFileRoute } from '@tanstack/react-router'

import StatisticsComponent from '@/modules/statistics/statistics.component'

export const Route = createFileRoute('/_authenticated/statistics/')({
	component: () => <StatisticsComponent />
})

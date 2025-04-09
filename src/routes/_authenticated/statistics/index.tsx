import { createFileRoute } from '@tanstack/react-router'

import StatisticsComponent from '@/modules/admin/statistics/statistics.component'

export const Route = createFileRoute('/_authenticated/statistics/')({
	component: () => <StatisticsComponent />
})

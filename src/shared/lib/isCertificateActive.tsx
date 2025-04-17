import { differenceInDays } from 'date-fns'

import { Badge } from '@/shared/ui/badge'

export function isCertificateActive(finishDate: Date | null) {
	if (!finishDate) {
		return (
			<Badge variant={'outline'}>
				<span className='text-gray-400'>Справка отсутствует</span>
			</Badge>
		)
	}

	const now = new Date()
	const endDate = new Date(finishDate)
	const isActive = endDate > now
	const daysRemaining = differenceInDays(endDate, now)
	const isExpiringSoon = daysRemaining <= 30 && daysRemaining > 0

	return (
		<Badge variant={'outline'}>
			<span
				className={
					isActive
						? isExpiringSoon
							? 'text-yellow-600'
							: 'text-green-600'
						: 'text-red-600'
				}
			>
				{isActive ? (isExpiringSoon ? 'Остался месяц' : 'Активна') : 'Истекла'}
			</span>
		</Badge>
	)
}

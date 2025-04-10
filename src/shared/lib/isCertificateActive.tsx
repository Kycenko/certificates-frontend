import { Badge } from '../ui'

export function isCertificateActive(finishDate: Date) {
	const isActive = new Date(finishDate) > new Date()

	return (
		<Badge variant={'outline'}>
			<span className={isActive ? 'text-green-600' : 'text-red-600'}>
				{isActive ? 'Активен' : 'Истек'}
			</span>
		</Badge>
	)
}

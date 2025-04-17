import { AlertTriangle, CheckCircle2, Clock, FileText } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Skeleton } from '@/shared/ui/skeleton'

import { useGetAllCertificatesQuery } from '@/app/graphql/generated'

function CertificatesStatistics() {
	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const certificates = data?.getAllCertificates || []

	const total = certificates.length
	const active = certificates.filter(
		({ startDate, finishDate }) =>
			new Date(startDate) <= new Date() && new Date(finishDate) >= new Date()
	).length
	const expired = certificates.filter(
		({ finishDate }) => new Date(finishDate) < new Date()
	).length
	const expiringSoon = certificates.filter(({ finishDate }) => {
		const daysLeft = Math.floor(
			(new Date(finishDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
		)
		return daysLeft > 0 && daysLeft <= 30
	}).length

	const stats = [
		{
			title: 'Всего справок',
			value: total,
			icon: <FileText className='h-6 w-6' />,
			color: 'bg-blue-100 text-blue-600',
			trend: null
		},
		{
			title: 'Активные',
			value: active,
			icon: <CheckCircle2 className='h-6 w-6' />,
			color: 'bg-green-100 text-green-600',
			trend: total > 0 ? ((active / total) * 100).toFixed(0) + '%' : '0%'
		},
		{
			title: 'Скоро истекут',
			value: expiringSoon,
			icon: <Clock className='h-6 w-6' />,
			color: 'bg-amber-100 text-amber-600',
			trend: `${expiringSoon} (${total > 0 ? ((expiringSoon / total) * 100).toFixed(0) : 0}%)`
		},
		{
			title: 'Просроченные',
			value: expired,
			icon: <AlertTriangle className='h-6 w-6' />,
			color: 'bg-red-100 text-red-600',
			trend: expired > 0 ? 'Требуют внимания' : null
		}
	]

	if (loading) {
		return (
			<div className='space-y-6'>
				<Skeleton className='h-8 w-64' />
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
					{[...Array(4)].map((_, i) => (
						<Skeleton
							key={i}
							className='h-32 rounded-xl'
						/>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className='mt-4 space-y-6'>
			<h2 className='text-2xl font-bold tracking-tight'>
				Статистика медицинских справок
			</h2>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
				{stats.map(stat => (
					<Card
						key={stat.title}
						className='relative overflow-hidden'
					>
						<CardHeader className='pb-2'>
							<div className='flex items-center justify-between'>
								<CardTitle className='text-muted-foreground text-sm font-medium'>
									{stat.title}
								</CardTitle>
								<div className={`rounded-lg p-2 ${stat.color}`}>
									{stat.icon}
								</div>
							</div>
						</CardHeader>

						<CardContent>
							<div className='flex items-baseline justify-between'>
								<span className='text-3xl font-bold'>{stat.value}</span>
								{stat.trend && (
									<span
										className={`text-sm ${
											stat.title === 'Просроченные'
												? 'text-red-600'
												: 'text-muted-foreground'
										}`}
									>
										{stat.trend}
									</span>
								)}
							</div>

							{stat.title === 'Скоро истекут' && expiringSoon > 0 && (
								<div className='mt-2 h-1.5 w-full rounded-full bg-gray-200'>
									<div
										className='h-1.5 rounded-full bg-amber-500'
										style={{ width: `${(expiringSoon / total) * 100}%` }}
									/>
								</div>
							)}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}

export default CertificatesStatistics

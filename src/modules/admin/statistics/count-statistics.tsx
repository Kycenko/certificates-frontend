import { Building2, GraduationCap, Layers, Users } from 'lucide-react'

import { Card } from '@/shared/ui/card'
import { Skeleton } from '@/shared/ui/skeleton'

import { useGetCountStatisticsQuery } from '@/app/graphql/generated'

function CountStatistics() {
	const { data, loading } = useGetCountStatisticsQuery()
	const { departments, courses, groups, curators, students } =
		data?.getCountStatistics || {}

	const statistics = [
		{
			title: 'Количество отделений',
			value: departments,
			icon: <Building2 className='h-6 w-6' />,
			color: 'bg-blue-100 text-blue-600'
		},
		{
			title: 'Количество курсов',
			value: courses,
			icon: <GraduationCap className='h-6 w-6' />,
			color: 'bg-green-100 text-green-600'
		},
		{
			title: 'Количество групп',
			value: groups,
			icon: <Layers className='h-6 w-6' />,
			color: 'bg-purple-100 text-purple-600'
		},
		{
			title: 'Количество кураторов',
			value: curators,
			icon: <Users className='h-6 w-6' />,
			color: 'bg-orange-100 text-orange-600'
		},
		{
			title: 'Количество студентов',
			value: students,
			icon: <GraduationCap className='h-6 w-6' />,
			color: 'bg-pink-100 text-pink-600',
			highlight: true
		}
	]

	if (loading) {
		return (
			<div className='space-y-6'>
				<Skeleton className='h-8 w-64' />
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
					{[...Array(5)].map((_, i) => (
						<Skeleton
							key={i}
							className='h-36 rounded-xl'
						/>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className='space-y-6'>
			<h2 className='text-3xl font-bold tracking-tight'>Общая статистика</h2>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
				{statistics.map(stat => (
					<Card
						key={stat.title}
						className='relative overflow-hidden rounded-xl p-6'
					>
						<div className='flex items-start justify-between'>
							<div className='space-y-4'>
								<div
									className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color}`}
								>
									{stat.icon}
								</div>
								<div className='space-y-1'>
									<h3 className='text-muted-foreground text-sm font-medium'>
										{stat.title}
									</h3>
									<p className='text-3xl font-bold'>{stat.value}</p>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}

export default CountStatistics

import { useParams } from '@tanstack/react-router'

import { Badge } from '@/shared/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

import { useGetGroupByIdQuery } from '@/app/graphql/generated'

import { curatorGroupColumns } from './curator-group.columns'
import CuratorGroupTable from './curator-group.table'

function CuratorGroupComponent() {
	const { id } = useParams({
		from: '/_authenticated/curator/_layout/group/$id'
	})

	const { data } = useGetGroupByIdQuery({
		variables: { id }
	})

	const { students, curator, title } = data?.getGroupById || {}

	console.log(data)

	return (
		<div className='space-y-6'>
			<Card>
				<CardHeader>
					<CardTitle>Информация о группе</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='flex items-center space-x-4'>
						<div className='space-y-1'>
							<div className='flex items-center space-x-2'>
								<h2 className='text-xl font-semibold'>{title}</h2>
								<Badge variant='outline'>
									{students?.length || 0} студентов
								</Badge>
							</div>
							<p className='text-muted-foreground text-sm'>
								Куратор:{' '}
								<span className='font-medium'>{curator?.fullName}</span>
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Список студентов</CardTitle>
				</CardHeader>
				<CardContent>
					<CuratorGroupTable
						data={students || []}
						columns={curatorGroupColumns}
					/>
				</CardContent>
			</Card>
		</div>
	)
}

export default CuratorGroupComponent

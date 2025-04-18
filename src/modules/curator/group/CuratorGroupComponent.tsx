import { useParams } from '@tanstack/react-router'

import { Badge } from '@/shared/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

import { useGetGroupByIdQuery } from '@/app/graphql/generated'

import CuratorGroupTable from './CuratorGroupTable'
import { curatorGroupTableColumns } from './CuratorGroupTableColumns'

function CuratorGroupComponent() {
	const { id } = useParams({
		from: '/_authenticated/curator/_layout/group/$id'
	})

	const { data } = useGetGroupByIdQuery({
		variables: { id }
	})

	const { students, curator, title } = data?.getGroupById || {}

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
								<span className='font-medium'>
									{curator?.displayedName || 'Не назначен'}
								</span>
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
						columns={curatorGroupTableColumns}
					/>
				</CardContent>
			</Card>
		</div>
	)
}

export default CuratorGroupComponent

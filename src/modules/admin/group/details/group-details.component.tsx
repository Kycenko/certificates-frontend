import { useParams } from '@tanstack/react-router'
import { User, Users } from 'lucide-react'

import EditSheet from '@/shared/components/edit-sheet'
import { DetailsTableSkeleton } from '@/shared/components/skeletons/details-table-skeleton'
import { DetailsDataTable } from '@/shared/components/tables/details-data-table'
import { Badge } from '@/shared/ui/badge'

import GroupFields from '../group.fields'
import { groupSchema } from '../group.schema'
import { useGroupOperations } from '../useGroupOperations'
import { groupDetailsColumns } from './group-details.columns'

function GroupDetailsComponent() {
	const { id } = useParams({ from: '/_authenticated/admin/_layout/groups/$id' })
	const {
		entity: { data, loading },
		courses: { data: courses, loading: loadingCourses, fetchCourses },
		handleUpdate
	} = useGroupOperations(id)

	const { title, course, students, curator } = data?.getGroupById || {}

	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div>
						<h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
						<div className='mt-1 flex items-center gap-3'>
							<div className='text-muted-foreground flex items-center gap-2 text-sm'>
								<User className='h-4 w-4' />
								<span>Куратор: {curator?.displayedName || 'Не назначен'}</span>
							</div>

							<div className='flex items-center gap-2 text-sm'>
								<Users className='text-muted-foreground h-4 w-4' />
								<Badge
									variant='outline'
									className='font-medium'
								>
									{students?.length || 0} студентов
								</Badge>
							</div>
						</div>
					</div>
				</div>

				<EditSheet
					title='Редактирование группы'
					fields={
						<GroupFields
							data={courses?.getAllCourses || []}
							isLoading={loadingCourses}
						/>
					}
					onSubmit={data => handleUpdate(id, data)}
					defaultValues={{
						title,
						courseId: course?.id
					}}
					schema={groupSchema}
					onOpenChange={fetchCourses}
				/>
			</div>

			<DetailsDataTable
				title='Связанные студенты'
				data={students}
				columns={groupDetailsColumns}
			/>
		</div>
	)
}

export default GroupDetailsComponent

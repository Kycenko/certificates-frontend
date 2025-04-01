'use client'

import { useParams } from 'next/navigation'

import GroupFields from '../group.fields'
import { groupSchema } from '../group.schema'
import { useGroupOperations } from '../useGroupOperations'

import { groupDetailsColumns } from './group-details.columns'
import { DetailsDataTable } from '@/shared/components/details-data-table'
import { DetailsTableSkeleton } from '@/shared/components/details-table-skeleton'
import EditSheet from '@/shared/components/edit-sheet'

export default function GroupDetailsComponent() {
	const { id } = useParams<{ id: string }>()
	const {
		entity: { data, loading },
		courses: { data: courses, loading: loadingCourses, fetchCourses },
		handleUpdate
	} = useGroupOperations(id)

	const { title, course, students } = data?.getGroupById || {}

	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{title}</h1>

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
				title='Связанные группы'
				data={students}
				columns={groupDetailsColumns}
			/>
		</div>
	)
}

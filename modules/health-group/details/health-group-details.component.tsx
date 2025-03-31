'use client'

import { healthGroupSchema } from '@modules/health-group/health-group.schema'
import { useParams } from 'next/navigation'

import { HealthGroupFields } from '../health-group.fields'
import { useHealthGroupOperations } from '../useHealthGroupOperations'

import { healthGroupDetailsColumns } from '@/modules/health-group/details/health-group-details.columns'
import { DetailsDataTable } from '@/shared/components/details-data-table'
import { DetailsTableSkeleton } from '@/shared/components/details-table-skeleton'
import EditSheet from '@/shared/components/edit-sheet'

export default function HealthGroupDetailsComponent() {
	const { id } = useParams<{ id: string }>()

	const {
		entity: { data, loading },
		handleUpdate
	} = useHealthGroupOperations(id)

	const title = data?.getHealthGroupById.title as string
	const certificates = data?.getHealthGroupById?.certificates || []

	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{title}</h1>

				<EditSheet
					title='Редактирование группы здоровья'
					fields={<HealthGroupFields />}
					onSubmit={data => handleUpdate(id, data)}
					defaultValues={{
						title
					}}
					schema={healthGroupSchema}
				/>
			</div>

			<DetailsDataTable
				title='Связанные справки'
				data={certificates}
				columns={healthGroupDetailsColumns}
			/>
		</div>
	)
}

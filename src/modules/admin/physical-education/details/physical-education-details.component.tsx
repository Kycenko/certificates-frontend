import { useParams } from '@tanstack/react-router'

import { DetailsDataTable } from '@/shared/components/details-data-table'
import { DetailsTableSkeleton } from '@/shared/components/details-table-skeleton'
import EditSheet from '@/shared/components/edit-sheet'

import { PhysicalEducationFields } from '../physical-education.fields'
import { physicalEducationSchema } from '../physical-education.schema'
import { usePhysicalEducationOperations } from '../usePhysicalEducationOperations'
import { physicalEducationDetailsColumns } from './physical-education-details.columns'

function PhysicalEducationDetailsComponent() {
	const { id } = useParams({
		from: '/_authenticated/admin/_layout/groups-management/physical-educations/$id'
	})

	const {
		entity: { data, loading },
		handleUpdate
	} = usePhysicalEducationOperations(id)

	const title = data?.getPhysicalEducationById?.title as string
	const certificates = data?.getPhysicalEducationById?.certificates || []

	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{title}</h1>

				<EditSheet
					title='Редактирование группы по физической культуре'
					fields={<PhysicalEducationFields />}
					onSubmit={data => handleUpdate(id, data)}
					defaultValues={{
						title
					}}
					schema={physicalEducationSchema}
				/>
			</div>

			<DetailsDataTable
				title='Связанные справки'
				data={certificates}
				columns={physicalEducationDetailsColumns}
			/>
		</div>
	)
}

export default PhysicalEducationDetailsComponent

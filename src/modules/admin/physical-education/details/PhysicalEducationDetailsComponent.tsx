import { useParams } from '@tanstack/react-router'

import EditSheet from '@/shared/components/EditSheet'
import { DetailsTableSkeleton } from '@/shared/components/skeletons/DetailsTableSkeleton'
import { DetailsDataTable } from '@/shared/components/tables/DetailsDataTable'

import { PhysicalEducationFields } from '../PhysicalEducationFields'
import { physicalEducationSchema } from '../physicalEducation.schema'
import { usePhysicalEducationOperations } from '../usePhysicalEducationOperations'
import { physicalEducationDetailsTableColumns } from './physicalEducationDetailsTableColumns'

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
				columns={physicalEducationDetailsTableColumns}
			/>
		</div>
	)
}

export default PhysicalEducationDetailsComponent

import { useParams } from '@tanstack/react-router'

import EditSheet from '@/shared/components/EditSheet'
import { DetailsTableSkeleton } from '@/shared/components/skeletons/DetailsTableSkeleton'
import { DetailsDataTable } from '@/shared/components/tables/DetailsDataTable'

import HealthGroupFields from '../HealthGroupFields'
import { healthGroupSchema } from '../healthGroupSchema'
import { useHealthGroupOperations } from '../useHealthGroupOperations'
import { healthGroupDetailsTableColumns } from './healthGroupDetailsTableColumns'

function HealthGroupDetailsComponent() {
	const { id } = useParams({
		from: '/_authenticated/admin/_layout/groups-management/health-groups/$id'
	})

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
				columns={healthGroupDetailsTableColumns}
			/>
		</div>
	)
}
export default HealthGroupDetailsComponent

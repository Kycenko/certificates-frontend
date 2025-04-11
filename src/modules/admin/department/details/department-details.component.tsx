import { useParams } from '@tanstack/react-router'

import EditSheet from '@/shared/components/edit-sheet'
import { DetailsTableSkeleton } from '@/shared/components/skeletons/details-table-skeleton'
import { DetailsDataTable } from '@/shared/components/tables/details-data-table'

import DepartmentFields from '../department-fields'
import { departmentSchema } from '../department.schema'
import { useDepartmentOperations } from '../useDepartmentOperations'
import { departmentDetailsColumns } from './department-details.columns'

function DepartmentDetailsComponent() {
	const { id } = useParams({
		from: '/_authenticated/admin/_layout/departments/$id'
	})
	const {
		entity: { data, loading },
		handleUpdate
	} = useDepartmentOperations(id)

	const { title, courses } = data?.getDepartmentById || {}

	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{title}</h1>

				<EditSheet
					title='Редактирование отделения'
					fields={<DepartmentFields />}
					onSubmit={data => handleUpdate(id, data)}
					defaultValues={{
						title
					}}
					schema={departmentSchema}
				/>
			</div>

			<DetailsDataTable
				title='Связанные курсы'
				data={courses}
				columns={departmentDetailsColumns}
			/>
		</div>
	)
}

export default DepartmentDetailsComponent

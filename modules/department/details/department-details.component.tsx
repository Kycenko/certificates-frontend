'use client'

import { useParams } from 'next/navigation'

import DepartmentFields from '../department-fields'
import { DepartmentSchema, departmentSchema } from '../department.schema'
import { useDepartmentOperations } from '../hooks/useDepartmentOperations'

import { departmentDetailsColumns } from './department-details-columns'
import { DetailsDataTable } from '@/shared/components/details-data-table'
import { DetailsTableSkeleton } from '@/shared/components/details-table-skeleton'
import EditSheet from '@/shared/components/edit-sheet'

export default function DepartmentDetailsComponent() {
	const { id } = useParams<{ id: string }>()
	const {
		department: { data, loading, refetch },
		handleUpdate
	} = useDepartmentOperations(id)

	const title = data?.getDepartmentById.title as string
	const courses = data?.getDepartmentById?.courses || []

	async function handleSubmit(values: DepartmentSchema) {
		await handleUpdate(id, values)
		await refetch()
	}
	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{title}</h1>

				<EditSheet
					title='Редактирование отделения'
					fields={<DepartmentFields />}
					onSubmit={handleSubmit}
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

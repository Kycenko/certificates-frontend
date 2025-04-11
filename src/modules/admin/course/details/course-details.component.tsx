import { useParams } from '@tanstack/react-router'

import EditSheet from '@/shared/components/edit-sheet'
import { DetailsTableSkeleton } from '@/shared/components/skeletons/details-table-skeleton'
import { DetailsDataTable } from '@/shared/components/tables/details-data-table'

import CourseFields from '../course.fields'
import { CourseSchema, courseSchema } from '../course.schema'
import { useCourseOperations } from '../useCourseOperations'
import { courseDetailsColumns } from './course-details.columns'

function CourseDetailsComponent() {
	const { id } = useParams({
		from: '/_authenticated/admin/_layout/courses/$id'
	})
	const {
		entity: { data, loading, refetch },
		departments: { data: departments, loading: isLoading, fetchDepartments },
		handleUpdate
	} = useCourseOperations(id)

	const { number, department, groups } = data?.getCourseById || {}

	async function handleSubmit(values: CourseSchema) {
		await handleUpdate(id, values)
		await refetch()
	}
	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{number}-й курс</h1>

				<EditSheet
					title='Редактирование курса'
					fields={
						<CourseFields
							data={departments?.getAllDepartments || []}
							isLoading={isLoading}
						/>
					}
					onOpenChange={fetchDepartments}
					onSubmit={handleSubmit}
					defaultValues={{
						number,
						departmentId: department?.id
					}}
					schema={courseSchema}
				/>
			</div>

			<DetailsDataTable
				title='Связанные группы'
				data={groups}
				columns={courseDetailsColumns}
			/>
		</div>
	)
}
export default CourseDetailsComponent

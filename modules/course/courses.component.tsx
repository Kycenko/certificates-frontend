'use client'

import { courseSchema } from '@modules/course/course.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { TableSettings } from '@shared/components/table-settings'

import { useTableSettingsStore } from '@/store/table-settings.store'

import CourseFields from './course.fields'
import { useCourseOperations } from './useCourseOperations'
import { useGetAllCoursesQuery } from '@/app/graphql/generated'
import { courseColumns } from '@/modules/course/course.columns'
import { TableSkeleton } from '@/shared/components/table-skeleton'

export default function CoursesComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const {
		departments: { data: departments, loading: isLoading, fetchDepartments },
		handleInfo,
		handleCreate,
		handleRemove,
		handleRemoveMany
	} = useCourseOperations()

	const { data, loading } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={courseSchema}
					title='Добавление курса'
					defaultValues={{ departmentId: '', number: '' }}
					fields={
						<CourseFields
							isLoading={isLoading}
							data={departments?.getAllDepartments || []}
						/>
					}
					onOpenChange={fetchDepartments}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				isLoading={loading}
				data={data?.getAllCourses || []}
				columns={courseColumns}
				search={search}
				filterable={true}
				searchParam='department.title'
				pagination={pagination}
				visibility={columnVisibility}
				onInfo={handleInfo}
				onRemove={handleRemove}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

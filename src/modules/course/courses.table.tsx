import { useTableSettingsStore } from '@/store/table-settings.store'

import { courseColumns } from './course.columns'
import { useCourseOperations } from './useCourseOperations'
import { useGetAllCoursesQuery } from '@/app/graphql/generated'
import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

export function CoursesTable() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleInfo, handleRemove, handleRemoveMany } = useCourseOperations()

	const { data, loading } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
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
	)
}

import { useTableSettingsStore } from '@/store/table-settings.store'

import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

import { GetAllCoursesQuery } from '@/app/graphql/generated'

import { courseColumns } from './course.columns'
import { useCourseOperations } from './useCourseOperations'

interface CourseTableProps {
	data: GetAllCoursesQuery | undefined
	loading: boolean
}

export function CoursesTable({ data, loading }: CourseTableProps) {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleInfo, handleRemove, handleRemoveMany } = useCourseOperations()

	if (loading) return <TableSkeleton />

	return (
		<div>
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

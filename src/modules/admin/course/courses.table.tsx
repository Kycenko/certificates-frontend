import { TableSkeleton } from '@/shared/components/skeletons/table-skeleton'
import { DataTable } from '@/shared/components/tables/data-table'

import { GetAllCoursesQuery } from '@/app/graphql/generated'

import { courseColumns } from './course.columns'
import { useCourseOperations } from './useCourseOperations'

interface CourseTableProps {
	data: GetAllCoursesQuery | undefined
	loading: boolean
}

export function CoursesTable({ data, loading }: CourseTableProps) {
	const { handleInfo, handleRemove, handleRemoveMany } = useCourseOperations()

	if (loading) return <TableSkeleton />

	return (
		<div>
			<DataTable
				isLoading={loading}
				data={data?.getAllCourses || []}
				columns={courseColumns}
				searchParam='department.title'
				onInfo={handleInfo}
				onRemove={handleRemove}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

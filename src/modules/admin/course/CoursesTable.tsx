import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { DataTable } from '@/shared/components/tables/DataTable'

import { GetAllCoursesQuery } from '@/app/graphql/generated'

import { courseTableColumns } from './courseTableColumns'
import { useCourseOperations } from './useCourseOperations'

interface CourseTableProps {
	data: GetAllCoursesQuery | undefined
	loading: boolean
}

export function CoursesTable({ data, loading }: CourseTableProps) {
	const { handleInfo, handleRemove, handleRemoveMany } = useCourseOperations()

	if (loading) return <DataTableSkeleton />

	return (
		<div>
			<DataTable
				isLoading={loading}
				data={data?.getAllCourses || []}
				columns={courseTableColumns}
				searchParam='department.title'
				onInfo={handleInfo}
				onRemove={handleRemove}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

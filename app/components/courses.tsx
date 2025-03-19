'use client'

import { DataTable } from './data-table'
import { courseColumns } from './table-columns/course-columns'
import {
	useGetAllCoursesQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function CoursesComponent() {
	const { data, loading } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [remove] = useRemoveManyDepartmentsMutation()

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	if (!data || loading) return <div>Loading...</div>

	return (
		<div>
			<DataTable
				columns={courseColumns}
				visibility={true}
				onRemoveMany={handleRemoveMany}
				data={data?.getAllCourses}
			/>
		</div>
	)
}

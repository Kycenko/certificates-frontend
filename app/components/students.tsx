'use client'

import { DataTable } from './data-table'
import { studentColumns } from './table-columns/student-columns'
import {
	useGetAllStudentsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function StudentsComponent() {
	const { data, loading } = useGetAllStudentsQuery({
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
				data={data?.getAllStudents}
				columns={studentColumns}
				filter={true}
				filterParam='lastName'
				visibility={true}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

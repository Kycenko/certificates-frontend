'use client'

import { DataTable } from './data-table'
import { departmentColumns } from './table-columns/department-columns'
import {
	useGetAllDepartmentsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function DepartmentsComponent() {
	const { data, loading } = useGetAllDepartmentsQuery({
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
				data={data?.getAllDepartments}
				columns={departmentColumns}
				filter={true}
				visibility={true}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

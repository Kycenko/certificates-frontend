'use client'

import { DataTable } from '@/components/data-table'
import { studentColumns } from '@/components/table-columns/student-columns'

import { useTableSettingsStore } from '@/store/table-setting.store'

import {
	useGetAllStudentsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function StudentsComponent() {
	const { search, pagination, columnVisibility } = useTableSettingsStore()
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
				search={search}
				searchParam='lastName'
				visibility={columnVisibility}
				pagination={pagination}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

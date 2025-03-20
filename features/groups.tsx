'use client'

import { DataTable } from '@/components/data-table'
import { groupColumns } from '@/components/table-columns/group-columns'

import { useTableSettingsStore } from '@/store/table-setting.store'

import {
	useGetAllGroupsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function GroupsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { data, loading } = useGetAllGroupsQuery({
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
				data={data?.getAllGroups}
				columns={groupColumns}
				onRemoveMany={handleRemoveMany}
				search={search}
				pagination={pagination}
				visibility={columnVisibility}
				searchParam='title'
			/>
		</div>
	)
}

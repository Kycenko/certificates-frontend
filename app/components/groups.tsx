'use client'

import { DataTable } from './data-table'
import { groupColumns } from './table-columns/group-columns'
import {
	useGetAllGroupsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function GroupsComponent() {
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
				columns={groupColumns}
				filter={true}
				filterParam='title'
				visibility={true}
				onRemoveMany={handleRemoveMany}
				data={data?.getAllGroups}
			/>
		</div>
	)
}

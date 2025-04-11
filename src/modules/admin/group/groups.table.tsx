import { TableSkeleton } from '@/shared/components/skeletons/table-skeleton'
import { DataTable } from '@/shared/components/tables/data-table'

import { useGetAllGroupsQuery } from '@/app/graphql/generated'

import { groupColumns } from './group.columns'
import { useGroupOperations } from './useGroupOperations'

function GroupsTable() {
	const { handleInfo, handleRemove, handleRemoveMany } = useGroupOperations()

	const { data, loading } = useGetAllGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
		<DataTable
			onInfo={handleInfo}
			onRemove={handleRemove}
			isLoading={loading}
			data={data?.getAllGroups || []}
			columns={groupColumns}
			onRemoveMany={handleRemoveMany}
			searchParam='title'
		/>
	)
}

export default GroupsTable

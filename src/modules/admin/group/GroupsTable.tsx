import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { DataTable } from '@/shared/components/tables/DataTable'

import { useGetAllGroupsQuery } from '@/app/graphql/generated'

import { groupTableColumns } from './groupTableColumns'
import { useGroupOperations } from './useGroupOperations'

function GroupsTable() {
	const { handleInfo, handleRemove, handleRemoveMany } = useGroupOperations()

	const { data, loading } = useGetAllGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />

	return (
		<DataTable
			onInfo={handleInfo}
			onRemove={handleRemove}
			isLoading={loading}
			data={data?.getAllGroups || []}
			columns={groupTableColumns}
			onRemoveMany={handleRemoveMany}
			searchParam='title'
		/>
	)
}

export default GroupsTable

import { useTableSettingsStore } from '@/store/table-settings.store'

import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

import { useGetAllGroupsQuery } from '@/app/graphql/generated'

import { groupColumns } from './group.columns'
import { useGroupOperations } from './useGroupOperations'

function GroupsTable() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
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
			search={search}
			filterable={true}
			pagination={pagination}
			visibility={columnVisibility}
			searchParam='title'
		/>
	)
}

export default GroupsTable

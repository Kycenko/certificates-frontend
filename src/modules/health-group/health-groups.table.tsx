import { useTableSettingsStore } from '@/store/table-settings.store'

import { healthGroupColumns } from './health-group.columns'
import { useHealthGroupOperations } from './useHealthGroupOperations'
import { useGetAllHealthGroupsQuery } from '@/app/graphql/generated'
import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

function HealthGroupsTable() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleRemove, handleInfo, handleRemoveMany } =
		useHealthGroupOperations()

	const { data, loading } = useGetAllHealthGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
		<DataTable
			data={data?.getAllHealthGroups || []}
			columns={healthGroupColumns}
			search={search}
			pagination={pagination}
			visibility={columnVisibility}
			searchParam='title'
			onInfo={handleInfo}
			onRemove={handleRemove}
			isLoading={loading}
			onRemoveMany={handleRemoveMany}
		/>
	)
}
export default HealthGroupsTable

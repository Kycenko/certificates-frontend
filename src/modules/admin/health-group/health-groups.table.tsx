import { TableSkeleton } from '@/shared/components/skeletons/table-skeleton'
import { DataTable } from '@/shared/components/tables/data-table'

import { useGetAllHealthGroupsQuery } from '@/app/graphql/generated'

import { healthGroupColumns } from './health-group.columns'
import { useHealthGroupOperations } from './useHealthGroupOperations'

function HealthGroupsTable() {
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
			searchParam='title'
			onInfo={handleInfo}
			onRemove={handleRemove}
			isLoading={loading}
			onRemoveMany={handleRemoveMany}
		/>
	)
}
export default HealthGroupsTable

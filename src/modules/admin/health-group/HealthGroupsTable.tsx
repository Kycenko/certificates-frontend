import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { DataTable } from '@/shared/components/tables/DataTable'

import { useGetAllHealthGroupsQuery } from '@/app/graphql/generated'

import { healthGroupTableColumns } from './healthGroupTableColumns'
import { useHealthGroupOperations } from './useHealthGroupOperations'

function HealthGroupsTable() {
	const { handleRemove, handleInfo, handleRemoveMany } =
		useHealthGroupOperations()

	const { data, loading } = useGetAllHealthGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />

	return (
		<DataTable
			data={data?.getAllHealthGroups || []}
			columns={healthGroupTableColumns}
			searchParam='title'
			onInfo={handleInfo}
			onRemove={handleRemove}
			isLoading={loading}
			onRemoveMany={handleRemoveMany}
		/>
	)
}
export default HealthGroupsTable

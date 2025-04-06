import { useTableSettingsStore } from '@/store/table-settings.store'

import { physicalEducationColumns } from './physical-education.columns'
import { usePhysicalEducationOperations } from './usePhysicalEducationOperations'
import { useGetAllPhysicalEducationsQuery } from '@/app/graphql/generated'
import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

function PhysicalEducationsTable() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleRemove, handleInfo, handleRemoveMany } =
		usePhysicalEducationOperations()

	const { data, loading } = useGetAllPhysicalEducationsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
		<DataTable
			data={data?.getAllPhysicalEducations || []}
			columns={physicalEducationColumns}
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

export default PhysicalEducationsTable

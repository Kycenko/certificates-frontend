import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { DataTable } from '@/shared/components/tables/DataTable'

import { useGetAllPhysicalEducationsQuery } from '@/app/graphql/generated'

import { physicalEducationTableColumns } from './physicalEducationTableColumns'
import { usePhysicalEducationOperations } from './usePhysicalEducationOperations'

function PhysicalEducationsTable() {
	const { handleRemove, handleInfo, handleRemoveMany } =
		usePhysicalEducationOperations()

	const { data, loading } = useGetAllPhysicalEducationsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />

	return (
		<DataTable
			data={data?.getAllPhysicalEducations || []}
			columns={physicalEducationTableColumns}
			searchParam='title'
			onInfo={handleInfo}
			onRemove={handleRemove}
			isLoading={loading}
			onRemoveMany={handleRemoveMany}
		/>
	)
}

export default PhysicalEducationsTable

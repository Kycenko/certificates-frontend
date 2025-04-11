import { TableSkeleton } from '@/shared/components/skeletons/table-skeleton'
import { DataTable } from '@/shared/components/tables/data-table'

import { useGetAllPhysicalEducationsQuery } from '@/app/graphql/generated'

import { physicalEducationColumns } from './physical-education.columns'
import { usePhysicalEducationOperations } from './usePhysicalEducationOperations'

function PhysicalEducationsTable() {
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
			searchParam='title'
			onInfo={handleInfo}
			onRemove={handleRemove}
			isLoading={loading}
			onRemoveMany={handleRemoveMany}
		/>
	)
}

export default PhysicalEducationsTable

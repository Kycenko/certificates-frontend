import { DataTableSkeleton } from '@/shared/components/skeletons'
import { DataTable } from '@/shared/components/tables/DataTable'

import { useGetAllCertificatesQuery } from '@/app/graphql/generated'

import { certificateTableColumns } from './certificateTableColumns'
import { useCertificateOperations } from './useCertificateOperations'

function CertificatesTable() {
	const { handleRemove, handleInfo, handleRemoveMany } =
		useCertificateOperations()

	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />

	return (
		<DataTable
			isLoading={loading}
			data={data?.getAllCertificates || []}
			columns={certificateTableColumns}
			searchParam='student.lastName'
			onInfo={handleInfo}
			onRemoveMany={handleRemoveMany}
			onRemove={handleRemove}
		/>
	)
}

export default CertificatesTable

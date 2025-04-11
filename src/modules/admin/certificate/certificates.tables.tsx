import { TableSkeleton } from '@/shared/components/skeletons/table-skeleton'
import { DataTable } from '@/shared/components/tables/data-table'

import { useGetAllCertificatesQuery } from '@/app/graphql/generated'

import { certificateColumns } from './certificate.columns'
import { useCertificateOperations } from './useCertificateOperations'

function CertificatesTable() {
	const { handleRemove, handleInfo, handleRemoveMany } =
		useCertificateOperations()

	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
		<DataTable
			isLoading={loading}
			data={data?.getAllCertificates || []}
			columns={certificateColumns}
			searchParam='student.lastName'
			onInfo={handleInfo}
			onRemoveMany={handleRemoveMany}
			onRemove={handleRemove}
		/>
	)
}

export default CertificatesTable

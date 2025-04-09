import { useTableSettingsStore } from '@/store/table-settings.store'

import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

import { useGetAllCertificatesQuery } from '@/app/graphql/generated'

import { certificateColumns } from './certificate.columns'
import { useCertificateOperations } from './useCertificateOperations'

function CertificatesTable() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
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
			search={search}
			searchParam='student.lastName'
			pagination={pagination}
			visibility={columnVisibility}
			onInfo={handleInfo}
			onRemoveMany={handleRemoveMany}
			onRemove={handleRemove}
		/>
	)
}

export default CertificatesTable

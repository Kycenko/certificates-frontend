import { useState } from 'react'

import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { DataTable } from '@/shared/components/tables/DataTable'
import { Card, CardContent } from '@/shared/ui/card'

import { useGetAllCertificatesQuery } from '@/app/graphql/generated'

import CreateCertificateForm from './CreateCertificateForm'
import { EditCertificateForm } from './EditCertificateForm'
import { certificateTableColumns } from './certificateTableColumns'
import { useCertificateOperations } from './useCertificateOperations'

function CertificatesComponent() {
	const [editingId, setEditingId] = useState<string>('')

	const { handleRemove, handleRemoveMany } = useCertificateOperations()

	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />

	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateCertificateForm />
				</div>

				<DataTable
					isLoading={loading}
					data={data?.getAllCertificates || []}
					columns={certificateTableColumns}
					searchParam='student.lastName'
					onRemoveMany={handleRemoveMany}
					onRemove={handleRemove}
					onEdit={id => setEditingId(id)}
				/>

				{editingId && <EditCertificateForm id={editingId} />}
			</CardContent>
		</Card>
	)
}

export default CertificatesComponent

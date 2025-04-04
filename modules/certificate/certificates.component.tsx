'use client'

import { useGetAllCertificatesQuery } from '@app/graphql/generated'
import { certificateSchema } from '@modules/certificate/certficate.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { TableSettings } from '@shared/components/table-settings'

import { useTableSettingsStore } from '@/store/table-settings.store'

import { CertificateFields } from './certificate.fields'
import { useCertificateOperations } from './useCertificateOperations'
import { certificateColumns } from '@/modules/certificate/certificate.columns'
import { TableSkeleton } from '@/shared/components/table-skeleton'

export default function CertificatesComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const {
		students: { data: students, fetchStudents },
		healthGroups: { data: healthGroups, fetchHealthGroups },
		physicalEducations: { data: physicalEducations, fetchPhysicalEducations },
		handleCreate,
		handleRemove,
		handleRemoveMany
	} = useCertificateOperations()

	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	async function fetchLazyData() {
		fetchStudents()
		fetchHealthGroups()
		fetchPhysicalEducations()
	}

	if (loading) return <TableSkeleton />

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={certificateSchema}
					title='Добавление справки'
					onOpenChange={fetchLazyData}
					fields={
						<CertificateFields
							students={students?.getAllStudents || []}
							healthGroups={healthGroups?.getAllHealthGroups || []}
							physicalEducations={
								physicalEducations?.getAllPhysicalEducations || []
							}
						/>
					}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				isLoading={loading}
				data={data?.getAllCertificates || []}
				columns={certificateColumns}
				search={search}
				searchParam='student.lastName'
				pagination={pagination}
				visibility={columnVisibility}
				onRemoveMany={handleRemoveMany}
				onRemove={handleRemove}
			/>
		</div>
	)
}

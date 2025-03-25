'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { GlobalSpinner } from '@/components/global-spinnner'
import { courseColumns } from '@/components/table-columns/course-columns'
import { TableSettings } from '@/components/table-settings'

import {
	CertificateSchema,
	certificateSchema
} from '@/types/schemas/certficate.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateCourseMutation,
	useGetAllCertificatesQuery,
	useGetAllStudentsQuery,
	useRemoveManyCertificatesMutation
} from '@/app/graphql/generated'

export default function CertificatesComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const { data: students } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateCourseMutation({
		refetchQueries: ['getAllCertificates']
	})
	const [remove] = useRemoveManyCertificatesMutation({
		refetchQueries: ['getAllCertificates']
	})

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	async function handleCreate(data: CertificateSchema) {
		await create()
	}

	if (loading) return <GlobalSpinner />

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={certificateSchema}
					headers={{
						triggerTitle: 'Добавить',
						dialogTitle: 'Добавление справки',
						submitTitle: 'Добавить'
					}}
					fields={
						<CertificateFields studentData={data?.getAllCertificates || []} />
					}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				data={data?.getAllCertificates || []}
				columns={courseColumns}
				search={search}
				searchParam='student.lastName'
				pagination={pagination}
				visibility={columnVisibility}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

function CertificateFields({ studentData }: { studentData: any[] }) {
	const { control } = useFormContext<CertificateSchema>()

	return <></>
}

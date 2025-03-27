'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { DatePicker } from '@/components/date-picker'
import { GlobalSpinner } from '@/components/global-spinnner'
import { SelectCombobox } from '@/components/select-combobox'
import { certificateColumns } from '@/components/table-columns/certificate-columns'
import { TableSettings } from '@/components/table-settings'
import { FormField, FormItem, FormMessage } from '@/components/ui/form'

import {
	CertificateSchema,
	certificateSchema
} from '@/types/schemas/certficate.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateCertificateMutation,
	useGetAllCertificatesQuery,
	useGetAllHealthGroupsLazyQuery,
	useGetAllPhysicalEducationsLazyQuery,
	useGetAllStudentsLazyQuery,
	useRemoveManyCertificatesMutation
} from '@/app/graphql/generated'

export default function CertificatesComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const [fetchStudents, { data: students }] = useGetAllStudentsLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})
	const [fetchHealthGroups, { data: healthGroups }] =
		useGetAllHealthGroupsLazyQuery({
			variables: { params: { orderBy: 'asc' } }
		})

	const [fetchPhysicalEducations, { data: physicalEducations }] =
		useGetAllPhysicalEducationsLazyQuery({
			variables: { params: { orderBy: 'asc' } }
		})

	const { data, loading } = useGetAllCertificatesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateCertificateMutation({
		refetchQueries: ['getAllCertificates']
	})
	const [remove] = useRemoveManyCertificatesMutation({
		refetchQueries: ['getAllCertificates']
	})

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	async function handleCreate(data: CertificateSchema) {
		await create({ variables: { data } })
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
					onOpenChange={() => {
						fetchStudents()
						fetchHealthGroups()
						fetchPhysicalEducations()
					}}
					fields={
						<CertificateFields
							studentData={students?.getAllStudents || []}
							healthGroupData={healthGroups?.getAllHealthGroups || []}
							physicalEducationData={
								physicalEducations?.getAllPhysicalEducations || []
							}
						/>
					}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				data={data?.getAllCertificates || []}
				columns={certificateColumns}
				search={search}
				searchParam='student.lastName'
				pagination={pagination}
				visibility={columnVisibility}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

function CertificateFields({
	studentData,
	healthGroupData,
	physicalEducationData
}: {
	studentData: any[]
	healthGroupData: any[]
	physicalEducationData: any[]
}) {
	const { control } = useFormContext<CertificateSchema>()

	return (
		<>
			<FormField
				name='startDate'
				control={control}
				render={({ field }) => (
					<FormItem>
						<DatePicker
							selected={field.value}
							onSelect={field.onChange}
							label='Выберите дату начала'
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='finishDate'
				control={control}
				render={({ field }) => (
					<FormItem>
						<DatePicker
							selected={field.value}
							onSelect={field.onChange}
							label='Выберите дату окончания'
						/>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='studentId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={studentData}
							valueKey={'id'}
							labelKey={item =>
								`${item.lastName} ${item.firstName} ${item.middleName || ''} `
							}
							placeholder='Выберите студента'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='healthGroupId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={healthGroupData}
							valueKey={'id'}
							labelKey={'title'}
							placeholder='Выберите группу здоровья'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='physicalEducationId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={physicalEducationData}
							valueKey={'id'}
							labelKey={'title'}
							placeholder='Выберите группу по физкультуре'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { GlobalSpinner } from '@/components/global-spinnner'
import { departmentColumns } from '@/components/table-columns/department-columns'
import { TableSettings } from '@/components/table-settings'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
	DepartmentSchema,
	departmentSchema
} from '@/types/schemas/department.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateDepartmentMutation,
	useGetAllDepartmentsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function DepartmentsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const { data, loading } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateDepartmentMutation({
		refetchQueries: ['getAllDepartments']
	})
	const [remove] = useRemoveManyDepartmentsMutation({
		refetchQueries: ['getAllDepartments']
	})

	async function handleCreate(data: DepartmentSchema) {
		await create({ variables: { data } })
	}
	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	if (!data || loading) return <GlobalSpinner />

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={departmentSchema}
					headers={{
						triggerTitle: 'Добавить',
						dialogTitle: 'Добавление отделения',
						submitTitle: 'Добавить'
					}}
					fields={<DepartmentFields />}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>

			<DataTable
				data={data?.getAllDepartments}
				columns={departmentColumns}
				search={search}
				pagination={pagination}
				visibility={columnVisibility}
				searchParam='title'
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

function DepartmentFields() {
	const { control } = useFormContext<DepartmentSchema>()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Отделение</FormLabel>
					<Input
						placeholder='Название отделения'
						onChange={field.onChange}
						value={field.value}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

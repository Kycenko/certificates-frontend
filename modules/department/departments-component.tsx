'use client'

import { useFormContext } from 'react-hook-form'

import { useTableSettingsStore } from '@/store/table-settings.store'

import { useGetAllDepartmentsQuery } from '@/app/graphql/generated'
import { departmentColumns } from '@/modules/department/department-columns'
import {
	DepartmentSchema,
	departmentSchema
} from '@/modules/department/department.schema'
import { useDepartmentsOperations } from '@/modules/department/hooks/useDepartmentsOperations'
import { DataDialog } from '@/shared/components/data-dialog'
import { DataTable } from '@/shared/components/data-table'
import { TableSettings } from '@/shared/components/table-settings'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

export default function DepartmentsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleInfo, handleCreate, handleRemove, handleRemoveMany } =
		useDepartmentsOperations()

	const { data, loading } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return (
		<>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={departmentSchema}
					defaultValues={{ title: '' }}
					title='Добавление отделения'
					fields={<DepartmentFields />}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>

			<DataTable
				isLoading={loading}
				data={data?.getAllDepartments || []}
				columns={departmentColumns}
				search={search}
				pagination={pagination}
				visibility={columnVisibility}
				filterable={true}
				searchParam='title'
				onInfo={handleInfo}
				onRemove={handleRemove}
				onRemoveMany={handleRemoveMany}
			/>
		</>
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
						{...field}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

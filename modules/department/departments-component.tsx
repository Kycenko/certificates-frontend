'use client'

import { useTableSettingsStore } from '@/store/table-settings.store'

import DepartmentFields from './department-fields'
import { useDepartmentOperations } from './hooks/useDepartmentOperations'
import { departmentColumns } from '@/modules/department/department-columns'
import { departmentSchema } from '@/modules/department/department.schema'
import { DataDialog } from '@/shared/components/data-dialog'
import { DataTable } from '@/shared/components/data-table'
import { TableSettings } from '@/shared/components/table-settings'

export default function DepartmentsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const {
		departments: { data, loading },
		handleInfo,
		handleCreate,
		handleRemove,
		handleRemoveMany
	} = useDepartmentOperations()

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

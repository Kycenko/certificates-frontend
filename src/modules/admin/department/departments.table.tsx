import { useTableSettingsStore } from '@/store/table-settings.store'

import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

import { useGetAllDepartmentsQuery } from '@/app/graphql/generated'

import { departmentColumns } from './department.columns'
import { useDepartmentOperations } from './useDepartmentOperations'

function DepartmentsTable() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleInfo, handleRemove, handleRemoveMany } =
		useDepartmentOperations()

	const { data, loading } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />
	return (
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
	)
}

export default DepartmentsTable

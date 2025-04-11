import { DataTable } from '@/shared/components/tables/DataTable'

import { GetAllDepartmentsQuery } from '@/app/graphql/generated'

import { departmentTableColumns } from './departmentTableColumns'
import { useDepartmentOperations } from './useDepartmentOperations'

function DepartmentsTable({
	data
}: {
	data: GetAllDepartmentsQuery['getAllDepartments']
}) {
	const { handleInfo, handleRemove, handleRemoveMany } =
		useDepartmentOperations()

	return (
		<DataTable
			data={data}
			columns={departmentTableColumns}
			searchParam='title'
			onInfo={handleInfo}
			onRemove={handleRemove}
			onRemoveMany={handleRemoveMany}
		/>
	)
}

export default DepartmentsTable

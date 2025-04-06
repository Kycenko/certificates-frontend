import { useTableSettingsStore } from '@/store/table-settings.store'

import { studentColumns } from './student.columns'
import { useStudentOperations } from './useStudentOperations'
import { useGetAllStudentsQuery } from '@/app/graphql/generated'
import { DataTable } from '@/shared/components/data-table'
import { TableSkeleton } from '@/shared/components/table-skeleton'

function StudentsTable() {
	const { search, pagination, columnVisibility } = useTableSettingsStore()
	const { handleInfo, handleRemove, handleRemoveMany } = useStudentOperations()
	const { data, loading } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
		<DataTable
			isLoading={loading}
			filterable={true}
			data={data?.getAllStudents || []}
			columns={studentColumns}
			search={search}
			searchParam='lastName'
			visibility={columnVisibility}
			pagination={pagination}
			onRemoveMany={handleRemoveMany}
			onInfo={handleInfo}
			onRemove={handleRemove}
		/>
	)
}

export default StudentsTable

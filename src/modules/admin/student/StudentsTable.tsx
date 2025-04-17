import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { DataTable } from '@/shared/components/tables/DataTable'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'

import { studentTableColumns } from './studentTableColumns'
import { useStudentOperations } from './useStudentOperations'

function StudentsTable() {
	const { handleInfo, handleRemove, handleRemoveMany } = useStudentOperations()
	const { data, loading } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />

	return (
		<DataTable
			isLoading={loading}
			data={data?.getAllStudents || []}
			columns={studentTableColumns}
			searchParam='lastName'
			onRemoveMany={handleRemoveMany}
			onInfo={handleInfo}
			onRemove={handleRemove}
		/>
	)
}

export default StudentsTable

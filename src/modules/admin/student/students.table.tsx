import { TableSkeleton } from '@/shared/components/skeletons/table-skeleton'
import { DataTable } from '@/shared/components/tables/data-table'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'

import { studentColumns } from './student.columns'
import { useStudentOperations } from './useStudentOperations'

function StudentsTable() {
	const { handleInfo, handleRemove, handleRemoveMany } = useStudentOperations()
	const { data, loading } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

	return (
		<DataTable
			isLoading={loading}
			data={data?.getAllStudents || []}
			columns={studentColumns}
			searchParam='lastName'
			onRemoveMany={handleRemoveMany}
			onInfo={handleInfo}
			onRemove={handleRemove}
		/>
	)
}

export default StudentsTable

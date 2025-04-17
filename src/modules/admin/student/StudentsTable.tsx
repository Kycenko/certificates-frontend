import { DataTable } from '@/shared/components/tables/DataTable'

import { GetAllStudentsQuery } from '@/app/graphql/generated'

import { studentTableColumns } from './studentTableColumns'
import { useStudentOperations } from './useStudentOperations'

function StudentsTable({
	data
}: {
	data: GetAllStudentsQuery['getAllStudents']
}) {
	const { handleInfo, handleRemove, handleRemoveMany } = useStudentOperations()

	return (
		<DataTable
			data={data}
			columns={studentTableColumns}
			searchParam='lastName'
			onRemoveMany={handleRemoveMany}
			onInfo={handleInfo}
			onRemove={handleRemove}
		/>
	)
}

export default StudentsTable

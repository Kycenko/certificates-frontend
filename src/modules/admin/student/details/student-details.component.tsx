import { useParams } from '@tanstack/react-router'

import { DetailsDataTable } from '@/shared/components/details-data-table'
import { DetailsTableSkeleton } from '@/shared/components/details-table-skeleton'
import EditSheet from '@/shared/components/edit-sheet'

import StudentFields from '../student.fields'
import { studentSchema } from '../student.schema'
import { useStudentOperations } from '../useStudentOperations'
import { studentDetailsColumns } from './student-details.columns'

function StudentDetailsComponent() {
	const { id } = useParams({ from: '/_authenticated/students/$id' })
	const {
		entity: { data, loading },
		groups: { data: groups, loading: loadingGroups, fetchGroups },
		handleUpdate
	} = useStudentOperations(id)

	const {
		lastName,
		firstName,
		secondName,
		birthDate,
		groupId,
		isExpelled,
		certificates
	} = data?.getStudentById || {}

	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>
					{lastName} {firstName}
				</h1>

				<EditSheet
					title='Редактирование студента'
					fields={
						<StudentFields
							data={groups?.getAllGroups || []}
							isLoading={loadingGroups}
						/>
					}
					onSubmit={data => handleUpdate(id, data)}
					defaultValues={{
						lastName,
						firstName,
						secondName,
						birthDate: new Date(birthDate),
						groupId,
						isExpelled: isExpelled
					}}
					schema={studentSchema}
					onOpenChange={fetchGroups}
				/>
			</div>

			<DetailsDataTable
				title='Связанные справки'
				data={certificates}
				columns={studentDetailsColumns}
			/>
		</div>
	)
}
export default StudentDetailsComponent

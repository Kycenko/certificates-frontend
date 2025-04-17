import { useParams } from '@tanstack/react-router'

import EditSheet from '@/shared/components/EditSheet'
import { DetailsTableSkeleton } from '@/shared/components/skeletons/DetailsTableSkeleton'
import { DetailsDataTable } from '@/shared/components/tables/DetailsDataTable'

import StudentFields from '../StudentFields'
import { studentSchema } from '../student.schema'
import { useStudentOperations } from '../useStudentOperations'
import { studentDetailsTableColumns } from './studentDetailsTableColumns'

function StudentDetailsComponent() {
	const { id } = useParams({
		from: '/_authenticated/admin/_layout/students/$id'
	})
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
				columns={studentDetailsTableColumns}
			/>
		</div>
	)
}
export default StudentDetailsComponent

import { DataDialog } from '@/shared/components/DataDialog'

import StudentFields from './StudentFields'
import { studentSchema } from './student.schema'
import { useStudentOperations } from './useStudentOperations'

function CreateStudentForm() {
	const {
		groups: { data: groupsData, loading: isLoading, fetchGroups },
		handleCreate
	} = useStudentOperations()

	return (
		<DataDialog
			defaultValues={{
				firstName: '',
				lastName: '',
				secondName: '',
				birthDate: new Date(),
				isExpelled: false
			}}
			title='Добавление студента'
			fields={
				<StudentFields
					isLoading={isLoading}
					data={groupsData?.getAllGroups || []}
				/>
			}
			schema={studentSchema}
			onOpenChange={fetchGroups}
			onSubmit={handleCreate}
		/>
	)
}

export default CreateStudentForm

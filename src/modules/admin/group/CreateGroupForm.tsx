import { DataDialog } from '@/shared/components/DataDialog'

import GroupFields from './GroupFields'
import { groupSchema } from './group.schema'
import { useGroupOperations } from './useGroupOperations'

function CreateGroupForm() {
	const {
		courses: { data: courses, loading: isLoading, fetchCourses },
		handleCreate
	} = useGroupOperations()

	return (
		<DataDialog
			defaultValues={{
				title: '',
				courseId: ''
			}}
			schema={groupSchema}
			title='Добавление группы'
			fields={
				<GroupFields
					isLoading={isLoading}
					data={courses?.getAllCourses || []}
				/>
			}
			onOpenChange={fetchCourses}
			onSubmit={handleCreate}
		/>
	)
}

export default CreateGroupForm

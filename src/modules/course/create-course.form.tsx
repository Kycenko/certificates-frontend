import CourseFields from './course.fields'
import { courseSchema } from './course.schema'
import { useCourseOperations } from './useCourseOperations'
import { DataDialog } from '@/shared/components/data-dialog'

function CreateCourseForm() {
	const {
		departments: { loading: isLoading, data: departments, fetchDepartments },
		handleCreate
	} = useCourseOperations()

	return (
		<DataDialog
			schema={courseSchema}
			title='Добавление курса'
			defaultValues={{ departmentId: '', number: '' }}
			fields={
				<CourseFields
					isLoading={isLoading}
					data={departments?.getAllDepartments || []}
				/>
			}
			onOpenChange={fetchDepartments}
			onSubmit={handleCreate}
		/>
	)
}
export default CreateCourseForm

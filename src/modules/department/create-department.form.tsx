import DepartmentFields from './department-fields'
import { useDepartmentOperations } from './useDepartmentOperations'
import { departmentSchema } from '@/modules/department/department.schema'
import { DataDialog } from '@/shared/components/data-dialog'

function CreateDepartmentForm() {
	const { handleCreate } = useDepartmentOperations()

	return (
		<DataDialog
			schema={departmentSchema}
			defaultValues={{ title: '' }}
			title='Добавление отделения'
			fields={<DepartmentFields />}
			onSubmit={handleCreate}
		/>
	)
}

export default CreateDepartmentForm

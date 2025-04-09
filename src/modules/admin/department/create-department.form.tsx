import { DataDialog } from '@/shared/components/data-dialog'

import DepartmentFields from './department-fields'
import { departmentSchema } from './department.schema'
import { useDepartmentOperations } from './useDepartmentOperations'

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

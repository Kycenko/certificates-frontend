import { DataDialog } from '@/shared/components/DataDialog'

import DepartmentFields from './DepartmentFields'
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

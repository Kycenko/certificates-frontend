import { DataDialog } from '@/shared/components/DataDialog'

import HealthGroupFields from './HealthGroupFields'
import { healthGroupSchema } from './healthGroupSchema'
import { useHealthGroupOperations } from './useHealthGroupOperations'

function CreateHealthGroupForm() {
	const { handleCreate } = useHealthGroupOperations()

	return (
		<DataDialog
			schema={healthGroupSchema}
			defaultValues={{ title: '' }}
			title='Добавление группы здоровья'
			fields={<HealthGroupFields />}
			onSubmit={handleCreate}
		/>
	)
}

export default CreateHealthGroupForm

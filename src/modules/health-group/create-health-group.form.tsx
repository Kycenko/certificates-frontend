import HealthGroupFields from './health-group.fields'
import { healthGroupSchema } from './health-group.schema'
import { useHealthGroupOperations } from './useHealthGroupOperations'
import { DataDialog } from '@/shared/components/data-dialog'

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

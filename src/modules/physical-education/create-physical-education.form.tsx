import { PhysicalEducationFields } from './physical-education.fields'
import { physicalEducationSchema } from './physical-education.schema'
import { usePhysicalEducationOperations } from './usePhysicalEducationOperations'
import { DataDialog } from '@/shared/components/data-dialog'

function CreatePhysicalEducationForm() {
	const { handleCreate } = usePhysicalEducationOperations()

	return (
		<DataDialog
			schema={physicalEducationSchema}
			defaultValues={{ title: '' }}
			title='Добавление группы по физкультуре'
			fields={<PhysicalEducationFields />}
			onSubmit={handleCreate}
		/>
	)
}

export default CreatePhysicalEducationForm

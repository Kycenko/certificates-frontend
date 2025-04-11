import { DataDialog } from '@/shared/components/DataDialog'

import { PhysicalEducationFields } from './PhysicalEducationFields'
import { physicalEducationSchema } from './physicalEducation.schema'
import { usePhysicalEducationOperations } from './usePhysicalEducationOperations'

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

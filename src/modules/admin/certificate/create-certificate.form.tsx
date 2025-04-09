import { DataDialog } from '@/shared/components/data-dialog'

import { CertificateFields } from './certificate.fields'
import { certificateSchema } from './certificate.schema'
import { useCertificateOperations } from './useCertificateOperations'

function CreateCertificateForm() {
	const {
		students: { data: students, fetchStudents },
		healthGroups: { data: healthGroups, fetchHealthGroups },
		physicalEducations: { data: physicalEducations, fetchPhysicalEducations },
		handleCreate
	} = useCertificateOperations()

	async function fetchLazyData() {
		fetchStudents()
		fetchHealthGroups()
		fetchPhysicalEducations()
	}
	return (
		<DataDialog
			schema={certificateSchema}
			title='Добавление справки'
			onOpenChange={fetchLazyData}
			fields={
				<CertificateFields
					students={students?.getAllStudents || []}
					healthGroups={healthGroups?.getAllHealthGroups || []}
					physicalEducations={
						physicalEducations?.getAllPhysicalEducations || []
					}
				/>
			}
			onSubmit={handleCreate}
		/>
	)
}

export default CreateCertificateForm

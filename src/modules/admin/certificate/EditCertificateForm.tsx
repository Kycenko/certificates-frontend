import EditSheet from '@/shared/components/EditSheet'

import { GetCertificateByIdQuery } from '@/app/graphql/generated'

import { CertificateFields } from './CertificateFields'
import { certificateSchema } from './certificate.schema'
import { useCertificateOperations } from './useCertificateOperations'

type EditCertificateFormProps = {
	id: string
}

export function EditCertificateForm({ id }: EditCertificateFormProps) {
	const {
		entity: { data },
		healthGroups: { data: healthGroups, fetchHealthGroups },
		physicalEducations: { data: physicalEducations, fetchPhysicalEducations },
		handleUpdate
	} = useCertificateOperations(id)

	const certificate =
		data?.getCertificateById as GetCertificateByIdQuery['getCertificateById']

	async function fetchLazyData() {
		fetchHealthGroups()
		fetchPhysicalEducations()
	}

	if (!certificate) return null

	const {
		startDate,
		finishDate,
		studentId,
		healthGroupId,
		physicalEducationId
	} = certificate

	return (
		<EditSheet
			onOpenChange={fetchLazyData}
			title='Редактирование медицинской справки'
			fields={
				<CertificateFields
					healthGroups={healthGroups?.getAllHealthGroups || []}
					physicalEducations={
						physicalEducations?.getAllPhysicalEducations || []
					}
				/>
			}
			onSubmit={data => handleUpdate(id, data)}
			defaultValues={{
				startDate,
				finishDate,
				studentId,
				healthGroupId,
				physicalEducationId
			}}
			schema={certificateSchema}
		/>
	)
}

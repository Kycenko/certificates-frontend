import { useParams } from '@tanstack/react-router'

import { CertificateFields } from '../certificate.fields'
import { certificateSchema } from '../certificate.schema'
import { useCertificateOperations } from '../useCertificateOperations'

import { certificateDetailsColumns } from './certificate-details.columns'
import { DetailsDataTable } from '@/shared/components/details-data-table'
import { DetailsTableSkeleton } from '@/shared/components/details-table-skeleton'
import EditSheet from '@/shared/components/edit-sheet'

function CertificateDetailsComponent() {
	const { id } = useParams({ from: '/_authenticated/certificates/$id' })
	const {
		entity: { data, loading },
		students: { data: students, fetchStudents },
		healthGroups: { data: healthGroups, fetchHealthGroups },
		physicalEducations: { data: physicalEducations, fetchPhysicalEducations },
		handleUpdate
	} = useCertificateOperations(id)

	const {
		startDate,
		finishDate,
		healthGroupId,
		physicalEducationId,
		studentId,
		student
	} = data?.getCertificateById || {}

	if (loading) return <DetailsTableSkeleton />

	async function fetchLazyData() {
		fetchStudents()
		fetchHealthGroups()
		fetchPhysicalEducations()
	}
	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>
					{student.lastName} {student.firstName}
				</h1>

				<EditSheet
					title='Редактирование медицинской справки'
					fields={
						<CertificateFields
							students={students?.getAllStudents || []}
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
					onOpenChange={fetchLazyData}
				/>
			</div>

			<DetailsDataTable
				title='Справки'
				data={data}
				columns={certificateDetailsColumns}
			/>
		</div>
	)
}

export default CertificateDetailsComponent

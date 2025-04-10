import CreatePhysicalEducationForm from './create-physical-education.form'
import PhysicalEducationsTable from './physical-educations.table'
import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

function PhysicalEducationsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreatePhysicalEducationForm />

					{/* <PdfExportButton
				element={<PdfTableExporter />}
				fileName={'departments'}
			/> */}
					<TableSettings />
				</div>

				<PhysicalEducationsTable />
			</CardContent>
		</Card>
	)
}
export default PhysicalEducationsComponent

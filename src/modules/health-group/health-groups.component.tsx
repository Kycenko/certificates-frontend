import CreateHealthGroupForm from './create-health-group.form'
import HealthGroupTable from './health-groups.table'
import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

function HealthGroupsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateHealthGroupForm />

					{/* <PdfExportButton
					element={<PdfTableExporter />}
					fileName={'departments'}
				/> */}
					<TableSettings />
				</div>

				<HealthGroupTable />
			</CardContent>
		</Card>
	)
}
export default HealthGroupsComponent

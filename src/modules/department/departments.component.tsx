import CreateDepartmentForm from './create-department.form'
import DepartmentsTable from './departments.table'
import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

function DepartmentsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateDepartmentForm />

					{/* <PdfExportButton
						element={<PdfTableExporter />}
						fileName={'departments'}
					/> */}
					<TableSettings />
				</div>

				<DepartmentsTable />
			</CardContent>
		</Card>
	)
}
export default DepartmentsComponent

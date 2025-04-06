import CreateStudentForm from './create-student.form'
import StudentsTable from './students.table'
import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

function StudentsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateStudentForm />

					{/* <PdfExportButton
					element={<PdfTableExporter />}
					fileName={'departments'}
				/> */}
					<TableSettings />
				</div>

				<StudentsTable />
			</CardContent>
		</Card>
	)
}

export default StudentsComponent

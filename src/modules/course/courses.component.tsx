import { CoursesTable } from './courses.table'
import CreateCourseForm from './create-course.form'
import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

function CoursesComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateCourseForm />

					{/* <PdfExportButton
						element={<PdfTableExporter />}
						fileName={'departments'}
					/> */}
					<TableSettings />
				</div>

				<CoursesTable />
			</CardContent>
		</Card>
	)
}

export default CoursesComponent

import { Card, CardContent } from '@/shared/ui/card'

import CreateStudentForm from './create-student.form'
import StudentsTable from './students.table'

function StudentsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateStudentForm />
				</div>

				<StudentsTable />
			</CardContent>
		</Card>
	)
}

export default StudentsComponent

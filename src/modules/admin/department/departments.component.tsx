import { Card, CardContent } from '@/shared/ui/card'

import CreateDepartmentForm from './create-department.form'
import DepartmentsTable from './departments.table'

function DepartmentsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateDepartmentForm />
				</div>

				<DepartmentsTable />
			</CardContent>
		</Card>
	)
}
export default DepartmentsComponent

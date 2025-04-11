import { Card, CardContent } from '@/shared/ui/card'

import CreateGroupForm from './create-group.form'
import GroupsTable from './groups.table'

function GroupsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateGroupForm />

					{/* <PdfExportButton
					element={<PdfTableExporter />}
					fileName={'departments'}
				/> */}
				</div>

				<GroupsTable />
			</CardContent>
		</Card>
	)
}

export default GroupsComponent

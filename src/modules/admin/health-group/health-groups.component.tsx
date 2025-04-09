import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

import CreateHealthGroupForm from './create-health-group.form'
import HealthGroupTable from './health-groups.table'

function HealthGroupsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateHealthGroupForm />

					<TableSettings />
				</div>

				<HealthGroupTable />
			</CardContent>
		</Card>
	)
}
export default HealthGroupsComponent

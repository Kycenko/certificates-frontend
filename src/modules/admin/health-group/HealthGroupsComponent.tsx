import { Card, CardContent } from '@/shared/ui/card'

import CreateHealthGroupForm from './CreateHealthGroupForm'
import HealthGroupTable from './HealthGroupsTable'

function HealthGroupsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateHealthGroupForm />
				</div>

				<HealthGroupTable />
			</CardContent>
		</Card>
	)
}
export default HealthGroupsComponent

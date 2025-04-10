import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

import CreateCuratorForm from './create-curator-form'
import CuratorsTable from './curators.table'

function CuratorsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateCuratorForm />
					<TableSettings />
				</div>

				<CuratorsTable />
			</CardContent>
		</Card>
	)
}

export default CuratorsComponent

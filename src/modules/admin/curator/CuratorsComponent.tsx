import { Card, CardContent } from '@/shared/ui/card'

import CreateCuratorForm from './CreateCuratorForm'
import CuratorsTable from './CuratorsTable'

function CuratorsComponent() {
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateCuratorForm />
				</div>

				<CuratorsTable />
			</CardContent>
		</Card>
	)
}

export default CuratorsComponent

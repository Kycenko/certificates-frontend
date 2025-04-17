import AnimatedContent from '@/shared/components/motions/AnimatedContent'
import { DataTableSkeleton } from '@/shared/components/skeletons'
import { Card, CardContent } from '@/shared/ui/card'

import { useGetAllDepartmentsQuery } from '@/app/graphql/generated'

import CreateDepartmentForm from './CreateDepartmentForm'
import DepartmentsTable from './DepartmentsTable'

function DepartmentsComponent() {
	const { data, loading } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})
	return (
		<AnimatedContent
			isLoading={loading}
			skeleton={<DataTableSkeleton />}
		>
			<Card>
				<CardContent className='p-4 md:p-6'>
					<div className='flex justify-end gap-3'>
						<CreateDepartmentForm />
					</div>

					<DepartmentsTable data={data?.getAllDepartments || []} />
				</CardContent>
			</Card>
		</AnimatedContent>
	)
}
export default DepartmentsComponent

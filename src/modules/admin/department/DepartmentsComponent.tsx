import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { Card, CardContent } from '@/shared/ui/card'

import { useGetAllDepartmentsQuery } from '@/app/graphql/generated'

import CreateDepartmentForm from './CreateDepartmentForm'
import DepartmentsTable from './DepartmentsTable'

function DepartmentsComponent() {
	const { data, loading } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />
	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateDepartmentForm />
				</div>

				<DepartmentsTable data={data?.getAllDepartments || []} />
			</CardContent>
		</Card>
	)
}
export default DepartmentsComponent

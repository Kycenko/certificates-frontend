import { DataTableSkeleton } from '@/shared/components/skeletons/DataTableSkeleton'
import { Card, CardContent } from '@/shared/ui/card'

import { useGetAllStudentsQuery } from '@/app/graphql/generated'

import CreateStudentForm from './CreateStudentForm'
import StudentsTable from './StudentsTable'

function StudentsComponent() {
	const { data, loading } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <DataTableSkeleton />

	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateStudentForm />
				</div>

				<StudentsTable data={data?.getAllStudents || []} />
			</CardContent>
		</Card>
	)
}

export default StudentsComponent

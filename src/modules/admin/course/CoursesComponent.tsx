import { Card, CardContent } from '@/shared/ui/card'

import { useGetAllCoursesQuery } from '@/app/graphql/generated'

import { CoursesTable } from './CoursesTable'
import CreateCourseForm from './CreateCourseForm'

function CoursesComponent() {
	const { data, loading } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateCourseForm />
				</div>

				<CoursesTable
					data={data}
					loading={loading}
				/>
			</CardContent>
		</Card>
	)
}

export default CoursesComponent

import { TableSettings } from '@/shared/components/table-settings'
import { Card, CardContent } from '@/shared/ui/card'

import { useGetAllCoursesQuery } from '@/app/graphql/generated'

import { CoursesTable } from './courses.table'
import CreateCourseForm from './create-course.form'

function CoursesComponent() {
	const { data, loading } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return (
		<Card>
			<CardContent className='p-4 md:p-6'>
				<div className='flex justify-end gap-3'>
					<CreateCourseForm />

					<TableSettings />
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

import { createFileRoute } from '@tanstack/react-router'

import { checkAuth } from './__root'
import { useGetAllCoursesQuery } from '@/graphql/generated'

export const Route = createFileRoute('/')({
	component: Index,
	beforeLoad: checkAuth
})

function Index() {
	const { data } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return (
		<div>
			{data?.getAllCourses.map(course => (
				<div key={course.id}>
					<p>{course.number}</p>
					<p>{course.department.title}</p>
				</div>
			))}
		</div>
	)
}

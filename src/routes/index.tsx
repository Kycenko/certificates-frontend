import { createFileRoute } from '@tanstack/react-router'

import { useGetAllCoursesQuery } from '@/graphql/generated'

export const Route = createFileRoute('/')({
	component: Index
})

function Index() {
	const { data } = useGetAllCoursesQuery()

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

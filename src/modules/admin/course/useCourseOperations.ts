import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

import {
	useCreateCourseMutation,
	useGetAllDepartmentsLazyQuery,
	useGetCourseByIdQuery,
	useRemoveCourseMutation,
	useRemoveManyCoursesMutation,
	useUpdateCourseMutation
} from '@/app/graphql/generated'

import { CourseSchema } from './course.schema'

export function useCourseOperations(id?: string) {
	const courses = useEntityOperations<CourseSchema>({
		useGetByIdQuery: useGetCourseByIdQuery,
		useCreateMutation: useCreateCourseMutation,
		useUpdateMutation: useUpdateCourseMutation,
		useRemoveMutation: useRemoveCourseMutation,
		useRemoveManyMutation: useRemoveManyCoursesMutation,
		refetchKeys: ['getAllCourses'],
		infoHref: '/admin/courses',
		id
	})

	const [fetchDepartments, { data, loading }] = useGetAllDepartmentsLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return {
		...courses,
		departments: { data, loading, fetchDepartments }
	}
}

import { StudentSchema } from './student.schema'
import {
	useCreateStudentMutation,
	useGetAllGroupsLazyQuery,
	useGetStudentByIdQuery,
	useRemoveManyStudentsMutation,
	useRemoveStudentMutation,
	useUpdateStudentMutation
} from '@/app/graphql/generated'
import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

export function useStudentOperations(id?: string) {
	const students = useEntityOperations<StudentSchema>({
		useGetByIdQuery: useGetStudentByIdQuery,
		useCreateMutation: useCreateStudentMutation,
		useUpdateMutation: useUpdateStudentMutation,
		useRemoveMutation: useRemoveStudentMutation,
		useRemoveManyMutation: useRemoveManyStudentsMutation,
		refetchKeys: ['getAllStudents'],
		infoHref: '/students',
		id
	})

	const [fetchGroups, { data, loading }] = useGetAllGroupsLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return {
		...students,
		groups: { data, loading, fetchGroups }
	}
}

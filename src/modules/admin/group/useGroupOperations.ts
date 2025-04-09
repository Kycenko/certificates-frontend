import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

import {
	useCreateGroupMutation,
	useGetAllCoursesLazyQuery,
	useGetGroupByIdQuery,
	useRemoveGroupMutation,
	useRemoveManyGroupsMutation,
	useUpdateGroupMutation
} from '@/app/graphql/generated'

import { GroupSchema } from './group.schema'

export function useGroupOperations(id?: string) {
	const groups = useEntityOperations<GroupSchema>({
		useGetByIdQuery: useGetGroupByIdQuery,
		useCreateMutation: useCreateGroupMutation,
		useUpdateMutation: useUpdateGroupMutation,
		useRemoveMutation: useRemoveGroupMutation,
		useRemoveManyMutation: useRemoveManyGroupsMutation,
		refetchKeys: ['getAllGroups'],
		infoHref: '/groups',
		id
	})

	const [fetchCourses, { data, loading }] = useGetAllCoursesLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return {
		...groups,
		courses: { data, loading, fetchCourses }
	}
}

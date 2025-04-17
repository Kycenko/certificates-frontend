import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

import {
	useCreateHealthGroupMutation,
	useGetHealthGroupByIdQuery,
	useRemoveHealthGroupMutation,
	useRemoveManyHealthGroupsMutation,
	useUpdateHealthGroupMutation
} from '@/app/graphql/generated'

import { HealthGroupSchema } from './healthGroupSchema'

export function useHealthGroupOperations(id?: string) {
	return useEntityOperations<HealthGroupSchema>({
		useGetByIdQuery: useGetHealthGroupByIdQuery,
		useCreateMutation: useCreateHealthGroupMutation,
		useUpdateMutation: useUpdateHealthGroupMutation,
		useRemoveMutation: useRemoveHealthGroupMutation,
		useRemoveManyMutation: useRemoveManyHealthGroupsMutation,
		refetchKeys: ['getAllHealthGroups'],
		infoHref: '/admin/groups-management/health-groups',
		id
	})
}

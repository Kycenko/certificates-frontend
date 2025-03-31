import { HealthGroupSchema } from './health-group.schema'
import {
	useCreateHealthGroupMutation,
	useGetHealthGroupByIdQuery,
	useRemoveHealthGroupMutation,
	useRemoveManyHealthGroupsMutation,
	useUpdateHealthGroupMutation
} from '@/app/graphql/generated'
import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

export function useHealthGroupOperations(id?: string) {
	return useEntityOperations<HealthGroupSchema>({
		useGetByIdQuery: useGetHealthGroupByIdQuery,
		useCreateMutation: useCreateHealthGroupMutation,
		useUpdateMutation: useUpdateHealthGroupMutation,
		useRemoveMutation: useRemoveHealthGroupMutation,
		useRemoveManyMutation: useRemoveManyHealthGroupsMutation,
		refetchKeys: ['getAllHealthGroups'],
		infoHref: '/groups-management/health-groups',
		id
	})
}

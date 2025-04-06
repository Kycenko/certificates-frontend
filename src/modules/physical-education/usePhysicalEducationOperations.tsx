import { PhysicalEducationSchema } from './physical-education.schema'
import {
	useCreatePhysicalEducationMutation,
	useGetPhysicalEducationByIdQuery,
	useRemoveManyPhysicalEducationsMutation,
	useRemovePhysicalEducationMutation,
	useUpdatePhysicalEducationMutation
} from '@/app/graphql/generated'
import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

export function usePhysicalEducationOperations(id?: string) {
	return useEntityOperations<PhysicalEducationSchema>({
		useGetByIdQuery: useGetPhysicalEducationByIdQuery,
		useCreateMutation: useCreatePhysicalEducationMutation,
		useUpdateMutation: useUpdatePhysicalEducationMutation,
		useRemoveMutation: useRemovePhysicalEducationMutation,
		useRemoveManyMutation: useRemoveManyPhysicalEducationsMutation,
		refetchKeys: ['getAllPhysicalEducations'],
		infoHref: '/groups-management/physical-educations',
		id
	})
}

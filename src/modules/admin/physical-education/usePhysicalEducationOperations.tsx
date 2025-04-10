import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

import {
	useCreatePhysicalEducationMutation,
	useGetPhysicalEducationByIdQuery,
	useRemoveManyPhysicalEducationsMutation,
	useRemovePhysicalEducationMutation,
	useUpdatePhysicalEducationMutation
} from '@/app/graphql/generated'

import { PhysicalEducationSchema } from './physical-education.schema'

export function usePhysicalEducationOperations(id?: string) {
	return useEntityOperations<PhysicalEducationSchema>({
		useGetByIdQuery: useGetPhysicalEducationByIdQuery,
		useCreateMutation: useCreatePhysicalEducationMutation,
		useUpdateMutation: useUpdatePhysicalEducationMutation,
		useRemoveMutation: useRemovePhysicalEducationMutation,
		useRemoveManyMutation: useRemoveManyPhysicalEducationsMutation,
		refetchKeys: ['getAllPhysicalEducations'],
		infoHref: '/admin/groups-management/physical-educations',
		id
	})
}

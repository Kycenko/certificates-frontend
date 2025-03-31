import { DepartmentSchema } from './department.schema'
import {
	useCreateDepartmentMutation,
	useGetDepartmentByIdQuery,
	useRemoveDepartmentMutation,
	useRemoveManyDepartmentsMutation,
	useUpdateDepartmentMutation
} from '@/app/graphql/generated'
import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

export function useDepartmentOperations(id?: string) {
	return useEntityOperations<DepartmentSchema>({
		useGetByIdQuery: useGetDepartmentByIdQuery,
		useCreateMutation: useCreateDepartmentMutation,
		useUpdateMutation: useUpdateDepartmentMutation,
		useRemoveMutation: useRemoveDepartmentMutation,
		useRemoveManyMutation: useRemoveManyDepartmentsMutation,
		refetchKeys: ['getAllDepartments'],
		infoHref: '/departments',
		id
	})
}

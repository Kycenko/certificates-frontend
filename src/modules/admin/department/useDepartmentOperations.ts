import { useEntityOperations } from '@/shared/hooks/useEntityOperations'

import {
	useCreateDepartmentMutation,
	useGetDepartmentByIdQuery,
	useRemoveDepartmentMutation,
	useRemoveManyDepartmentsMutation,
	useUpdateDepartmentMutation
} from '@/app/graphql/generated'

import { DepartmentSchema } from './department.schema'

export function useDepartmentOperations(id?: string) {
	return useEntityOperations<DepartmentSchema>({
		useGetByIdQuery: useGetDepartmentByIdQuery,
		useCreateMutation: useCreateDepartmentMutation,
		useUpdateMutation: useUpdateDepartmentMutation,
		useRemoveMutation: useRemoveDepartmentMutation,
		useRemoveManyMutation: useRemoveManyDepartmentsMutation,
		refetchKeys: ['getAllDepartments'],
		infoHref: '/admin/departments',
		id
	})
}

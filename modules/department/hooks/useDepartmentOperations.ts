'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
	useCreateDepartmentMutation,
	useGetDepartmentByIdQuery,
	useRemoveDepartmentMutation,
	useRemoveManyDepartmentsMutation,
	useUpdateDepartmentMutation
} from '@/app/graphql/generated'
import { DepartmentSchema } from '@/modules/department/department.schema'

export function useDepartmentOperations(id?: string) {
	const router = useRouter()

	const {
		data: departmentData,
		loading: departmentLoading,
		refetch: refetchDepartment
	} = useGetDepartmentByIdQuery({
		variables: { id: id || '' },
		skip: !id
	})

	const [create] = useCreateDepartmentMutation({
		refetchQueries: ['getAllDepartments']
	})

	const [update] = useUpdateDepartmentMutation({
		refetchQueries: ['getAllDepartments']
	})

	const [remove] = useRemoveDepartmentMutation({
		refetchQueries: ['getAllDepartments']
	})

	const [removeMany] = useRemoveManyDepartmentsMutation({
		refetchQueries: ['getAllDepartments']
	})

	function handleInfo(id: string) {
		router.push(`departments/${id}`)
	}

	async function handleCreate(data: DepartmentSchema) {
		try {
			await create({ variables: { data } })
			toast.success('Отделение успешно добавлено')
		} catch {
			toast.error('Произошла ошибка при создании отделения')
		}
	}

	async function handleUpdate(id: string, data: DepartmentSchema) {
		try {
			await update({
				variables: { id, data }
			})

			toast.success('Отделение успешно обновлено')
		} catch {
			toast.error('Произошла ошибка при обновлении отделения')
		}
	}

	async function handleRemove(id: string) {
		try {
			await remove({ variables: { id } })
			toast.success('Отделение успешно удалено')
		} catch {
			toast.error('Произошла ошибка при удалении отделения')
		}
	}

	async function handleRemoveMany(selectedIds: Set<string>) {
		try {
			await removeMany({ variables: { ids: Array.from(selectedIds) } })
			toast.success('Отделения успешно удалены')
		} catch {
			toast.error('Произошла ошибка при удалении отделений')
		}
	}

	return {
		department: {
			data: departmentData,
			loading: departmentLoading,
			refetch: refetchDepartment
		},
		handleInfo,
		handleCreate,
		handleUpdate,
		handleRemove,
		handleRemoveMany
	}
}

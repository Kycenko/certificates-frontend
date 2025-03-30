'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
	useCreateDepartmentMutation,
	useRemoveDepartmentMutation,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'
import { DepartmentSchema } from '@/modules/department/department.schema'

export function useDepartmentsOperations() {
	const router = useRouter()

	const [create] = useCreateDepartmentMutation({
		refetchQueries: ['getAllDepartments']
	})

	const [removeMany] = useRemoveManyDepartmentsMutation({
		refetchQueries: ['getAllDepartments']
	})

	const [remove] = useRemoveDepartmentMutation({
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
		handleInfo,
		handleCreate,
		handleRemove,
		handleRemoveMany
	}
}

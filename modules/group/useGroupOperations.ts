import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { GroupSchema } from './group.schema'
import {
	useCreateGroupMutation,
	useGetAllCoursesLazyQuery,
	useGetGroupByIdQuery,
	useRemoveGroupMutation,
	useRemoveManyGroupsMutation,
	useUpdateGroupMutation
} from '@/app/graphql/generated'

export function useGroupOperations(id?: string) {
	const router = useRouter()

	const {
		data: groupData,
		loading: groupLoading,
		refetch: refetchGroup
	} = useGetGroupByIdQuery({
		variables: { id: id || '' },
		skip: !id
	})

	const [fetchCourses, { data: coursesData, loading: loadingCourses }] =
		useGetAllCoursesLazyQuery({
			variables: { params: { orderBy: 'asc' } }
		})

	const [create] = useCreateGroupMutation({
		refetchQueries: ['getAllGroups']
	})

	const [update] = useUpdateGroupMutation({
		refetchQueries: ['getAllGroups']
	})

	const [remove] = useRemoveGroupMutation({
		refetchQueries: ['getAllGroups']
	})

	const [removeMany] = useRemoveManyGroupsMutation({
		refetchQueries: ['getAllGroups']
	})

	function handleInfo(id: string) {
		router.push(`groups/${id}`)
	}

	async function handleCreate(data: GroupSchema) {
		try {
			await create({
				variables: { data }
			})
			toast.success('Группа успешно добавлена')
		} catch {
			toast.error('Произошла ошибка при добавлении группы')
		}
	}

	async function handleUpdate(id: string, data: GroupSchema) {
		try {
			await update({
				variables: { id, data }
			})
			toast.success('Группа успешно обновлёна')
		} catch {
			toast.error('Произошла ошибка при обновлении группы')
		}
	}

	async function handleRemove(id: string) {
		try {
			await remove({ variables: { id } })
			toast.success('Группа успешно удалена')
		} catch {
			toast.error('Произошла ошибка при удалении группы')
		}
	}

	async function handleRemoveMany(selectedIds: Set<string>) {
		try {
			await removeMany({ variables: { ids: Array.from(selectedIds) } })
			toast.success('Группы успешно удалены')
		} catch {
			toast.error('Произошла ошибка при удалении групп')
		}
	}

	return {
		group: {
			data: groupData,
			loading: groupLoading,
			refetch: refetchGroup
		},

		courses: {
			data: coursesData,
			loading: loadingCourses,
			fetchCourses
		},
		handleInfo,
		handleCreate,
		handleUpdate,
		handleRemove,
		handleRemoveMany
	}
}

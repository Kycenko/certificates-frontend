import { useRouter } from '@tanstack/react-router'
import { toast } from 'sonner'

interface UseEntityOperationsProps<T> {
	useGetByIdQuery: any
	useCreateMutation: () => [
		(options: {
			variables: { data: T }
			refetchQueries: string[]
		}) => Promise<any>,
		any
	]
	useUpdateMutation: () => [
		(options: {
			variables: { id: string; data: T }
			refetchQueries: string[]
		}) => Promise<any>,
		any
	]
	useRemoveMutation: () => [
		(options: {
			variables: { id: string }
			refetchQueries: string[]
		}) => Promise<any>,
		any
	]
	useRemoveManyMutation: () => [
		(options: {
			variables: { ids: string[] }
			refetchQueries: string[]
		}) => Promise<any>,
		any
	]
	refetchKeys: string[]
	infoHref: string
	id?: string
}
export function useEntityOperations<T>({
	useGetByIdQuery,
	useCreateMutation,
	useUpdateMutation,
	useRemoveMutation,
	useRemoveManyMutation,
	refetchKeys,
	infoHref,
	id
}: UseEntityOperationsProps<T>) {
	const router = useRouter()
	const { data, loading, refetch } = useGetByIdQuery({
		variables: { id: id || '' },
		skip: !id
	})
	const [create] = useCreateMutation()
	const [update] = useUpdateMutation()
	const [remove] = useRemoveMutation()
	const [removeMany] = useRemoveManyMutation()
	function handleInfo(id: string) {
		router.navigate({ to: `${infoHref}/${id}` })
	}
	async function handleCreate(data: T) {
		try {
			await create({ variables: { data }, refetchQueries: refetchKeys })
			toast.success('Операция добавления выполнена успешно')
		} catch {
			toast.error('Ошибка при добавлении')
		}
	}
	async function handleUpdate(id: string, data: T) {
		try {
			await update({ variables: { id, data }, refetchQueries: refetchKeys })
			toast.success('Операция обновления выполнена успешно')
		} catch {
			toast.error('Ошибка при обновлении')
		}
	}
	async function handleRemove(id: string) {
		try {
			await remove({ variables: { id }, refetchQueries: refetchKeys })
			toast.success('Операция удаления выполнена успешно')
		} catch {
			toast.error('Ошибка при удалении')
		}
	}
	async function handleRemoveMany(selectedIds: Set<string>) {
		try {
			await removeMany({
				variables: { ids: Array.from(selectedIds) },
				refetchQueries: refetchKeys
			})
			toast.success('Операция удаления выполнена успешно')
		} catch {
			toast.error('Ошибка при удалении')
		}
	}
	return {
		entity: { data, loading, refetch },
		handleInfo,
		handleCreate,
		handleUpdate,
		handleRemove,
		handleRemoveMany
	}
}

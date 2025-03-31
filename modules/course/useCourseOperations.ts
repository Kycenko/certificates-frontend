import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { CourseSchema } from './course.schema'
import {
	useCreateCourseMutation,
	useGetAllDepartmentsLazyQuery,
	useGetCourseByIdQuery,
	useRemoveCourseMutation,
	useRemoveManyCoursesMutation,
	useUpdateCourseMutation
} from '@/app/graphql/generated'

export function useCourseOperations(id?: string) {
	const router = useRouter()

	const {
		data: courseData,
		loading: courseLoading,
		refetch: refetchCourse
	} = useGetCourseByIdQuery({
		variables: { id: id || '' },
		skip: !id
	})

	const [
		fetchDepartments,
		{ data: departmentsData, loading: loadingDepartments }
	] = useGetAllDepartmentsLazyQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateCourseMutation({
		refetchQueries: ['getAllCourses']
	})

	const [update] = useUpdateCourseMutation({
		refetchQueries: ['getAllCourses']
	})

	const [remove] = useRemoveCourseMutation({
		refetchQueries: ['getAllCourses']
	})

	const [removeMany] = useRemoveManyCoursesMutation({
		refetchQueries: ['getAllCourses']
	})

	function handleInfo(id: string) {
		router.push(`courses/${id}`)
	}

	async function handleCreate(data: CourseSchema) {
		try {
			await create({ variables: { data: { ...data, number: +data.number } } })
			toast.success('Курс успешно добавлен')
		} catch {
			toast.error('Произошла ошибка при добавлении курса')
		}
	}

	async function handleUpdate(id: string, data: CourseSchema) {
		try {
			await update({
				variables: { id, data: { ...data, number: +data.number } }
			})

			toast.success('Курс успешно обновлён')
		} catch {
			toast.error('Произошла ошибка при обновлении курса')
		}
	}

	async function handleRemove(id: string) {
		try {
			await remove({ variables: { id } })
			toast.success('Курс успешно удален')
		} catch {
			toast.error('Произошла ошибка при удалении курса')
		}
	}

	async function handleRemoveMany(selectedIds: Set<string>) {
		try {
			await removeMany({ variables: { ids: Array.from(selectedIds) } })
			toast.success('Курсы успешно удалены')
		} catch {
			toast.error('Произошла ошибка при удалении курсов')
		}
	}

	return {
		course: {
			data: courseData,
			loading: courseLoading,
			refetch: refetchCourse
		},

		departments: {
			data: departmentsData,
			loading: loadingDepartments,
			fetchDepartments
		},
		handleInfo,
		handleCreate,
		handleUpdate,
		handleRemove,
		handleRemoveMany
	}
}

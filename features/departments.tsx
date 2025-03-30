'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { toast } from 'sonner'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { departmentColumns } from '@/components/table-columns/department-columns'
import { TableSettings } from '@/components/table-settings'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
	DepartmentSchema,
	departmentSchema
} from '@/types/schemas/department.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateDepartmentMutation,
	useGetAllDepartmentsQuery,
	useRemoveDepartmentMutation,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function DepartmentsComponent() {
	const router = useRouter()
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const { data, loading } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateDepartmentMutation({
		refetchQueries: ['getAllDepartments']
	})

	const [removeMany] = useRemoveManyDepartmentsMutation({
		refetchQueries: ['getAllDepartments']
	})

	const [remove] = useRemoveDepartmentMutation({
		refetchQueries: ['getAllDepartments']
	})

	const handleInfo = (id: string) => {
		router.push(`/departments/${id}`)
	}

	async function handleCreate(data: DepartmentSchema) {
		try {
			await create({ variables: { data } })
			toast.success('Отделение успешно добавлено')
		} catch {
			toast.error('Произошла ошибка при добавлении отделения')
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

	return (
		<>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={departmentSchema}
					defaultValues={{ title: '' }}
					title='Добавление отделения'
					fields={<DepartmentFields />}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>

			<DataTable
				isLoading={loading}
				data={data?.getAllDepartments || []}
				columns={departmentColumns}
				search={search}
				pagination={pagination}
				visibility={columnVisibility}
				filterable={true}
				searchParam='title'
				onInfo={handleInfo}
				onRemove={handleRemove}
				onRemoveMany={handleRemoveMany}
			/>
		</>
	)
}

function DepartmentFields() {
	const { control } = useFormContext<DepartmentSchema>()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Отделение</FormLabel>
					<Input
						placeholder='Название отделения'
						onChange={field.onChange}
						value={field.value}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

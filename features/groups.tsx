'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { SelectCombobox } from '@/components/select-combobox'
import { groupColumns } from '@/components/table-columns/group-columns'
import { TableSettings } from '@/components/table-settings'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { GroupSchema, groupSchema } from '@/types/schemas/group.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateGroupMutation,
	useGetAllCoursesLazyQuery,
	useGetAllGroupsQuery,
	useRemoveManyGroupsMutation
} from '@/app/graphql/generated'

export default function GroupsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const { data, loading } = useGetAllGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [fetchCourses, { data: courses, loading: isLoading }] =
		useGetAllCoursesLazyQuery({
			variables: { params: { orderBy: 'asc' } }
		})

	const [create] = useCreateGroupMutation({
		refetchQueries: ['getAllGroups']
	})

	const [remove] = useRemoveManyGroupsMutation({
		refetchQueries: ['getAllGroups']
	})

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	async function handleCreate(data: GroupSchema) {
		await create({ variables: { data } })
	}

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					defaultValues={{
						title: '',
						courseId: ''
					}}
					schema={groupSchema}
					title='Добавление группы'
					fields={
						<GroupFields
							isLoading={isLoading}
							data={courses?.getAllCourses || []}
						/>
					}
					onOpenChange={fetchCourses}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				isLoading={loading}
				data={data?.getAllGroups || []}
				columns={groupColumns}
				onRemoveMany={handleRemoveMany}
				search={search}
				filterable={true}
				pagination={pagination}
				visibility={columnVisibility}
				searchParam='title'
			/>
		</div>
	)
}

function GroupFields({
	data,
	isLoading
}: {
	data: {
		id: string
		number: number
		department: { title: string }
	}[]
	isLoading: boolean
}) {
	const { control } = useFormContext<GroupSchema>()

	return (
		<>
			<FormField
				control={control}
				name='title'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Группа</FormLabel>
						<Input
							placeholder='Название группы'
							onChange={field.onChange}
							value={field.value}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='courseId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={data}
							disabled={isLoading}
							valueKey={'id'}
							labelKey={item =>
								`${item.number}-й курс (${item.department.title})`
							}
							placeholder='Выберите курс'
							value={field.value}
							onValueChange={field.onChange}
						/>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

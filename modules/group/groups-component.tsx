'use client'

import { useFormContext } from 'react-hook-form'

import { groupColumns } from '@modules/group/group-columns'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { GroupSchema, groupSchema } from '@modules/group/group.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateGroupMutation,
	useGetAllCoursesLazyQuery,
	useGetAllGroupsQuery,
	useRemoveManyGroupsMutation
} from '@/app/graphql/generated'
import { DataDialog } from '@/shared/components/data-dialog'
import { DataTable } from '@/shared/components/data-table'
import { SelectCombobox } from '@/shared/components/select-combobox'
import { TableSettings } from '@/shared/components/table-settings'

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

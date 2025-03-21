'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { GlobalSpinner } from '@/components/global-spinnner'
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
	useGetAllCoursesQuery,
	useGetAllGroupsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function GroupsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { data, loading } = useGetAllGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const { data: courses } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateGroupMutation({
		refetchQueries: ['getAllGroups']
	})

	const [remove] = useRemoveManyDepartmentsMutation({
		refetchQueries: ['getAllGroups']
	})

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	async function handleCreate(data: GroupSchema) {
		await create({ variables: { data } })
	}

	if (!data || loading) return <GlobalSpinner />

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					defaultValues={{
						title: '',
						courseId: ''
					}}
					schema={groupSchema}
					headers={{
						triggerTitle: 'Добавить',
						dialogTitle: 'Добавление группы',
						submitTitle: 'Добавить'
					}}
					fields={<GroupFields coursesData={courses?.getAllCourses || []} />}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				data={data?.getAllGroups}
				columns={groupColumns}
				onRemoveMany={handleRemoveMany}
				search={search}
				pagination={pagination}
				visibility={columnVisibility}
				searchParam='title'
			/>
		</div>
	)
}

function GroupFields({
	coursesData
}: {
	coursesData: {
		id: string
		number: number
		department: { title: string }
	}[]
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
							data={coursesData}
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

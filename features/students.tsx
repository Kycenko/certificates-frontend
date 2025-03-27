'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { DatePicker } from '@/components/date-picker'
import { GlobalSpinner } from '@/components/global-spinnner'
import { SelectCombobox } from '@/components/select-combobox'
import { studentColumns } from '@/components/table-columns/student-columns'
import { TableSettings } from '@/components/table-settings'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { StudentSchema, studentSchema } from '@/types/schemas/student.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateStudentMutation,
	useGetAllGroupsLazyQuery,
	useGetAllStudentsQuery,
	useRemoveManyStudentsMutation
} from '@/app/graphql/generated'

export default function StudentsComponent() {
	const { search, pagination, columnVisibility } = useTableSettingsStore()

	const { data, loading } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [fetchGroups, { data: groupsData, loading: isLoading }] =
		useGetAllGroupsLazyQuery({
			variables: { params: { orderBy: 'asc' } }
		})

	const [create] = useCreateStudentMutation({
		refetchQueries: ['getAllStudents']
	})

	const [remove] = useRemoveManyStudentsMutation({
		refetchQueries: ['getAllStudents']
	})

	async function handleCreate(data: StudentSchema) {
		await create({ variables: { data } })
	}

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	if (loading) return <GlobalSpinner />

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					defaultValues={{
						firstName: '',
						lastName: '',
						secondName: '',
						birthDate: new Date(),
						isExpelled: false
					}}
					headers={{
						triggerTitle: 'Добавить',
						dialogTitle: 'Добавление студента',
						submitTitle: 'Добавить'
					}}
					fields={
						<StudentFields
							isLoading={isLoading}
							data={groupsData?.getAllGroups || []}
						/>
					}
					schema={studentSchema}
					onOpenChange={fetchGroups}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				filterable={true}
				data={data?.getAllStudents || []}
				columns={studentColumns}
				search={search}
				searchParam='lastName'
				visibility={columnVisibility}
				pagination={pagination}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}
function StudentFields({
	data,
	isLoading
}: {
	data: {
		id: string
		title: string
	}[]
	isLoading: boolean
}) {
	const { control } = useFormContext<StudentSchema>()

	return (
		<>
			<FormField
				control={control}
				name='firstName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Имя</FormLabel>
						<Input
							placeholder='Введите имя...'
							onChange={field.onChange}
							value={field.value}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='lastName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Фамилия</FormLabel>
						<Input
							placeholder='Введите фамилию...'
							onChange={field.onChange}
							value={field.value}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='secondName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Отчество</FormLabel>
						<Input
							placeholder='Введите отчество...'
							onChange={field.onChange}
							value={field.value}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='birthDate'
				control={control}
				render={({ field }) => (
					<FormItem>
						<DatePicker
							selected={field.value}
							onSelect={field.onChange}
							label='Выберите дату рождения'
						/>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='groupId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							disabled={isLoading}
							data={data}
							valueKey={'id'}
							labelKey={'title'}
							placeholder='Выберите группу'
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

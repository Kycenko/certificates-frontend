'use client'

import {
	useCreateStudentMutation,
	useGetAllGroupsLazyQuery,
	useGetAllStudentsQuery,
	useRemoveManyStudentsMutation
} from '@app/graphql/generated'
import { studentColumns } from '@modules/student/student-columns'
import { StudentSchema, studentSchema } from '@modules/student/student.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { DatePicker } from '@shared/components/date-picker'
import { SelectCombobox } from '@shared/components/select-combobox'
import { TableSettings } from '@shared/components/table-settings'
import { FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/form'
import { Input } from '@shared/ui/input'
import { useFormContext } from 'react-hook-form'

import { useTableSettingsStore } from '@/store/table-settings.store'

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
					title='Добавление студента'
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
				isLoading={loading}
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
							{...field}
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
							{...field}
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
							{...field}
							placeholder='Введите отчество...'
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

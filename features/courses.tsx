'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { SelectCombobox } from '@/components/select-combobox'
import { SelectData } from '@/components/select-data'
import { courseColumns } from '@/components/table-columns/course-columns'
import { TableSettings } from '@/components/table-settings'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { SelectItem } from '@/components/ui/select'

import { CourseSchema, courseSchema } from '@/types/schemas/course.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateCourseMutation,
	useGetAllCoursesQuery,
	useGetAllDepartmentsLazyQuery,
	useRemoveManyCoursesMutation
} from '@/app/graphql/generated'

export default function CoursesComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const [fetchDepartments, { data: departments, loading: isLoading }] =
		useGetAllDepartmentsLazyQuery({
			variables: { params: { orderBy: 'asc' } }
		})

	const { data, loading } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateCourseMutation({
		refetchQueries: ['getAllCourses']
	})
	const [remove] = useRemoveManyCoursesMutation({
		refetchQueries: ['getAllCourses']
	})

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	async function handleCreate(data: CourseSchema) {
		await create({
			variables: {
				data: {
					...data,
					number: +data.number
				}
			}
		})
	}

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={courseSchema}
					title='Добавление курса'
					defaultValues={{ departmentId: '', number: '' }}
					fields={
						<CourseFields
							isLoading={isLoading}
							data={departments?.getAllDepartments || []}
						/>
					}
					onOpenChange={fetchDepartments}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				isLoading={loading}
				data={data?.getAllCourses || []}
				columns={courseColumns}
				search={search}
				filterable={true}
				searchParam='department.title'
				pagination={pagination}
				visibility={columnVisibility}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

function CourseFields({
	data,
	isLoading
}: {
	data: { id: string; title: string }[]
	isLoading: boolean
}) {
	const { control } = useFormContext<CourseSchema>()

	return (
		<>
			<FormField
				control={control}
				name='number'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Номер</FormLabel>
						<SelectData
							value={field.value}
							onValueChange={field.onChange}
							label='Номер курса'
							placeholder='Выберите номер курса'
						>
							<SelectItem value='1'>1-й курс</SelectItem>
							<SelectItem value='2'>2-й курс</SelectItem>
							<SelectItem value='3'>3-й курс</SelectItem>
							<SelectItem value='4'>4-й курс</SelectItem>
						</SelectData>

						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				name='departmentId'
				control={control}
				render={({ field }) => (
					<FormItem>
						<SelectCombobox
							data={data}
							disabled={isLoading}
							valueKey='id'
							labelKey='title'
							placeholder='Выберите отделение'
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

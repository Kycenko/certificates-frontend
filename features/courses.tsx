'use client'

import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { SelectCombobox } from '@/components/select-combobox'
import { courseColumns } from '@/components/table-columns/course-columns'
import { TableSettings } from '@/components/table-settings'

import { CourseSchema, courseSchema } from '@/types/schemas/course.schema'

import { useTableSettingsStore } from '@/store/table-setting.store'

import {
	useCreateCourseMutation,
	useGetAllCoursesQuery,
	useGetAllDepartmentsQuery,
	useRemoveManyDepartmentsMutation
} from '@/app/graphql/generated'

export default function CoursesComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const { data: departments } = useGetAllDepartmentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const { data, loading } = useGetAllCoursesQuery({
		variables: { params: { orderBy: 'asc', departmentTitle: '' } }
	})

	const [create] = useCreateCourseMutation({
		refetchQueries: ['getAllCourses']
	})
	const [remove] = useRemoveManyDepartmentsMutation({
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

	if (!data || loading) return <div>Loading...</div>

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={courseSchema}
					headers={{
						triggerTitle: 'Добавить',
						dialogTitle: 'Добавление отделения',
						submitTitle: 'Добавить'
					}}
					fields={
						<CourseFields
							departmentData={departments?.getAllDepartments || []}
						/>
					}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>
			<DataTable
				data={data?.getAllCourses}
				columns={courseColumns}
				search={search}
				searchParam='department.title'
				pagination={pagination}
				visibility={columnVisibility}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

function CourseFields({ departmentData }: { departmentData: any[] }) {
	const {
		register,
		formState: { errors }
	} = useFormContext<CourseSchema>()

	return (
		<>
			{/* <Label
				htmlFor='title'
				className='text-right'
			>
				Номер
			</Label>
			<Input
				{...register('number')}
				id='number'
				className='col-span-3'
			/> */}
			<select {...register('number')}>
				<option value={1}>1</option>
			</select>
			{errors.number && <span>{errors.number.message}</span>}
			<SelectCombobox
				{...register('departmentId')}
				data={departmentData}
			/>
		</>
	)
}

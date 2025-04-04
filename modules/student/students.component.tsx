'use client'

import { useGetAllStudentsQuery } from '@app/graphql/generated'
import { studentSchema } from '@modules/student/student.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { TableSettings } from '@shared/components/table-settings'

import { useTableSettingsStore } from '@/store/table-settings.store'

import { StudentFields } from './student.fields'
import { useStudentOperations } from './useStudentOperations'
import { studentColumns } from '@/modules/student/student.columns'
import { TableSkeleton } from '@/shared/components/table-skeleton'

export default function StudentsComponent() {
	const { search, pagination, columnVisibility } = useTableSettingsStore()
	const {
		groups: { data: groupsData, loading: isLoading, fetchGroups },
		handleInfo,
		handleCreate,
		handleRemove,
		handleRemoveMany
	} = useStudentOperations()
	const { data, loading } = useGetAllStudentsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	if (loading) return <TableSkeleton />

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
				onInfo={handleInfo}
				onRemove={handleRemove}
			/>
		</div>
	)
}

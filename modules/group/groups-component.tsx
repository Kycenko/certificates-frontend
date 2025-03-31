'use client'

import { useGetAllGroupsQuery } from '@app/graphql/generated'
import { groupColumns } from '@modules/group/group-columns'
import { groupSchema } from '@modules/group/group.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { TableSettings } from '@shared/components/table-settings'

import { useTableSettingsStore } from '@/store/table-settings.store'

import GroupFields from './group-fields'
import { useGroupOperations } from './useGroupOperations'

export default function GroupsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const {
		courses: { data: courses, loading: isLoading, fetchCourses },
		handleInfo,
		handleCreate,
		handleRemove,
		handleRemoveMany
	} = useGroupOperations()

	const { data, loading } = useGetAllGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

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
				onInfo={handleInfo}
				onRemove={handleRemove}
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

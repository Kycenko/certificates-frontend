'use client'

import { useGetAllHealthGroupsQuery } from '@app/graphql/generated'
import { healthGroupColumns } from '@modules/health-group/health-group.columns'
import { healthGroupSchema } from '@modules/health-group/health-group.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { TableSettings } from '@shared/components/table-settings'

import { useTableSettingsStore } from '@/store/table-settings.store'

import { HealthGroupFields } from './health-group.fields'
import { useHealthGroupOperations } from './useHealthGroupOperations'

export default function HealthGroupsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleCreate, handleRemove, handleInfo, handleRemoveMany } =
		useHealthGroupOperations()

	const { data, loading } = useGetAllHealthGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={healthGroupSchema}
					defaultValues={{ title: '' }}
					title='Добавление группы здоровья'
					fields={<HealthGroupFields />}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>

			<DataTable
				data={data?.getAllHealthGroups || []}
				columns={healthGroupColumns}
				search={search}
				pagination={pagination}
				visibility={columnVisibility}
				searchParam='title'
				onInfo={handleInfo}
				onRemove={handleRemove}
				isLoading={loading}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

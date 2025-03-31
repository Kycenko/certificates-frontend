'use client'

import { useGetAllPhysicalEducationsQuery } from '@app/graphql/generated'
import { physicalEducationColumns } from '@modules/physical-education/physical-education.columns'
import { physicalEducationSchema } from '@modules/physical-education/physical-education.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { TableSettings } from '@shared/components/table-settings'

import { useTableSettingsStore } from '@/store/table-settings.store'

import { PhysicalEducationFields } from './physical-education.fields'
import { usePhysicalEducationOperations } from './usePhysicalEducationOperations'

export default function PhysicalEducationsComponent() {
	const { pagination, columnVisibility, search } = useTableSettingsStore()
	const { handleCreate, handleRemove, handleInfo, handleRemoveMany } =
		usePhysicalEducationOperations()

	const { data, loading } = useGetAllPhysicalEducationsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	return (
		<div>
			<div className='flex justify-end gap-3'>
				<DataDialog
					schema={physicalEducationSchema}
					defaultValues={{ title: '' }}
					title='Добавление группы по физкультуре'
					fields={<PhysicalEducationFields />}
					onSubmit={handleCreate}
				/>
				<TableSettings />
			</div>

			<DataTable
				data={data?.getAllPhysicalEducations || []}
				columns={physicalEducationColumns}
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

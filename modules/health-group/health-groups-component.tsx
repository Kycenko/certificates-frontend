'use client'

import {
	useCreateHealthGroupMutation,
	useGetAllHealthGroupsQuery,
	useRemoveManyHealthGroupsMutation
} from '@app/graphql/generated'
import { healthGroupColumns } from '@modules/health-group/health-group.columns'
import {
	HealthGroupSchema,
	healthGroupSchema
} from '@modules/health-group/health-group.schema'
import { DataDialog } from '@shared/components/data-dialog'
import { DataTable } from '@shared/components/data-table'
import { TableSettings } from '@shared/components/table-settings'
import { FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/form'
import { Input } from '@shared/ui/input'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

import { useTableSettingsStore } from '@/store/table-settings.store'

export default function HealthGroupsComponent() {
	const router = useRouter()
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const { data, loading } = useGetAllHealthGroupsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreateHealthGroupMutation({
		refetchQueries: ['getAllHealthGroups']
	})
	const [remove] = useRemoveManyHealthGroupsMutation({
		refetchQueries: ['getAllHealthGroups']
	})

	async function handleCreate(data: HealthGroupSchema) {
		await create({
			variables: { data }
		})
	}

	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	function OnInfo(id: string) {
		router.push(`/groups-management/hg/${id}`)
	}

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
				onInfo={OnInfo}
				isLoading={loading}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

function HealthGroupFields() {
	const { control } = useFormContext<HealthGroupSchema>()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Группа здоровья</FormLabel>
					<Input
						placeholder='Название группы здоровья'
						onChange={field.onChange}
						value={field.value}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

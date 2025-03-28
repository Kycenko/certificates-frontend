'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { healthGroupColumns } from '@/components/table-columns/health-group.columns'
import { TableSettings } from '@/components/table-settings'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
	HealthGroupSchema,
	healthGroupSchema
} from '@/types/schemas/health-group.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreateHealthGroupMutation,
	useGetAllHealthGroupsQuery,
	useRemoveManyHealthGroupsMutation
} from '@/app/graphql/generated'

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
					headers={{
						triggerTitle: 'Добавить',
						dialogTitle: 'Добавление группы здоровья',
						submitTitle: 'Добавить'
					}}
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

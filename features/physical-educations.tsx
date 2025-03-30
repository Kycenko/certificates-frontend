'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

import { DataDialog } from '@/components/data-dialog'
import { DataTable } from '@/components/data-table'
import { physicalEducationColumns } from '@/components/table-columns/physical-education.columns'
import { TableSettings } from '@/components/table-settings'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
	PhysicalEducationSchema,
	physicalEducationSchema
} from '@/types/schemas/physical-education.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreatePhysicalEducationMutation,
	useGetAllPhysicalEducationsQuery,
	useRemoveManyPhysicalEducationsMutation
} from '@/app/graphql/generated'

export default function PhysicalEducationsComponent() {
	const router = useRouter()
	const { pagination, columnVisibility, search } = useTableSettingsStore()

	const { data, loading } = useGetAllPhysicalEducationsQuery({
		variables: { params: { orderBy: 'asc' } }
	})

	const [create] = useCreatePhysicalEducationMutation({
		refetchQueries: ['getAllPhysicalEducations']
	})
	const [remove] = useRemoveManyPhysicalEducationsMutation({
		refetchQueries: ['getAllPhysicalEducations']
	})

	async function handleCreate(data: PhysicalEducationSchema) {
		await create({ variables: { data } })
	}
	async function handleRemoveMany(selectedIds: Set<string>) {
		await remove({ variables: { ids: Array.from(selectedIds) } })
	}

	function OnInfo(id: string) {
		router.push(`/groups-management/pe/${id}`)
	}

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
				onInfo={OnInfo}
				isLoading={loading}
				onRemoveMany={handleRemoveMany}
			/>
		</div>
	)
}

function PhysicalEducationFields() {
	const { control } = useFormContext<PhysicalEducationSchema>()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Группа по физкультуре</FormLabel>
					<Input
						placeholder='Название группы по физкультуре'
						onChange={field.onChange}
						value={field.value}
					/>

					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

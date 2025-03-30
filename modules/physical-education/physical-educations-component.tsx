'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

import { physicalEducationColumns } from '@modules/physical-education/physical-education.columns'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import {
	PhysicalEducationSchema,
	physicalEducationSchema
} from '@modules/physical-education/physical-education.schema'

import { useTableSettingsStore } from '@/store/table-settings.store'

import {
	useCreatePhysicalEducationMutation,
	useGetAllPhysicalEducationsQuery,
	useRemoveManyPhysicalEducationsMutation
} from '@/app/graphql/generated'
import { DataDialog } from '@/shared/components/data-dialog'
import { DataTable } from '@/shared/components/data-table'
import { TableSettings } from '@/shared/components/table-settings'

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

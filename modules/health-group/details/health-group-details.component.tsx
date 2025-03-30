'use client'

import {
	HealthGroupSchema,
	healthGroupSchema
} from '@modules/health-group/health-group.schema'
import { useParams } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { toast } from 'sonner'

import {
	useGetHealthGroupByIdQuery,
	useUpdateHealthGroupMutation
} from '@/app/graphql/generated'
import { healthGroupDetailsColumns } from '@/modules/health-group/details/health-group-details.columns'
import { DetailsDataTable } from '@/shared/components/details-data-table'
import { DetailsTableSkeleton } from '@/shared/components/details-table-skeleton'
import EditSheet from '@/shared/components/edit-sheet'
import { FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

export default function HealthGroupDetailsComponent() {
	const { id } = useParams<{ id: string }>()
	const { data, loading, refetch } = useGetHealthGroupByIdQuery({
		variables: { id }
	})

	const title = data?.getHealthGroupById.title as string
	const certificates = data?.getHealthGroupById?.certificates || []

	const [updateHealthGroup] = useUpdateHealthGroupMutation()

	const handleUpdate = async (data: HealthGroupSchema) => {
		try {
			await updateHealthGroup({
				variables: {
					id,
					data
				}
			})
			await refetch()
			toast.success('Группа здоровья успешно обновлена')
		} catch (error) {
			toast.error('Произошла ошибка при обновлении группы здоровья')
		}
	}

	if (loading) return <DetailsTableSkeleton />

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{title}</h1>

				<EditSheet
					title='Редактирование группы здоровья'
					fields={<HealthGroupFields />}
					onSubmit={handleUpdate}
					defaultValues={{
						title
					}}
					schema={healthGroupSchema}
				/>
			</div>

			<DetailsDataTable
				title='Связанные справки'
				data={certificates}
				columns={healthGroupDetailsColumns}
			/>
		</div>
	)
}

function HealthGroupFields() {
	const { control } = useFormContext<HealthGroupSchema>()

	return (
		<>
			<FormField
				control={control}
				name='title'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Название</FormLabel>
						<Input
							placeholder='Введите название...'
							{...field}
						/>

						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

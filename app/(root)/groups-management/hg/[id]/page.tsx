'use client'

import { useParams } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { toast } from 'sonner'

import { DetailsDataTable } from '@/components/details-data-table'
import EditSheet from '@/components/edit-sheet'
import { healthGroupDetailsColumns } from '@/components/table-columns/health-group-details.columns'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'

import {
	HealthGroupSchema,
	healthGroupSchema
} from '@/types/schemas/health-group.schema'

import {
	useGetHealthGroupByIdQuery,
	useUpdateHealthGroupMutation
} from '@/app/graphql/generated'

export default function HealthGroupDetailsPage() {
	const { id } = useParams<{ id: string }>()
	const { data, loading, refetch } = useGetHealthGroupByIdQuery({
		variables: { id }
	})

	const title = data?.getHealthGroupById.title as string
	const certificates = data?.getHealthGroupById?.certificates || []

	const [updateHealthGroup] = useUpdateHealthGroupMutation()

	const handleSave = async (data: HealthGroupSchema) => {
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

	if (loading)
		return (
			<div className='space-y-6 p-4'>
				<Skeleton className='h-8 w-64' />
				<div className='space-y-4'>
					<Skeleton className='h-[300px] w-full' />
				</div>
			</div>
		)

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{title}</h1>

				<EditSheet
					title='Редактирование группы здоровья'
					fields={<HealthGroupFields />}
					onSubmit={handleSave}
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

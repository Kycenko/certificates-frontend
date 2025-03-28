'use client'

import { Edit } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'

import {
	useGetHealthGroupByIdQuery,
	useUpdateHealthGroupMutation
} from '@/app/graphql/generated'

export default function HealthGroupDetailsPage() {
	const { id } = useParams()
	const { data, loading, refetch } = useGetHealthGroupByIdQuery({
		variables: { id: id as string }
	})

	const [updateHealthGroup] = useUpdateHealthGroupMutation()

	const form = useForm({
		defaultValues: {
			title: data?.getHealthGroupById?.title || ''
		}
	})

	useEffect(() => {
		form.reset({
			title: data?.getHealthGroupById?.title || ''
		})
	}, [data])

	const handleSave = async (values: { title: string }) => {
		try {
			await updateHealthGroup({
				variables: {
					id: id as string,
					data: values
				}
			})
			await refetch()
			toast.success('Группа здоровья успешно обновлена')
		} catch (error) {
			toast.error('Произошла ошибка при обновлении группы здоровья')
		}
	}

	if (loading) {
		return (
			<div className='space-y-6 p-4'>
				<Skeleton className='h-8 w-64' />
				<div className='space-y-4'>
					<Skeleton className='h-[300px] w-full' />
				</div>
			</div>
		)
	}

	return (
		<div className='space-y-6 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>
					{data?.getHealthGroupById?.title}
				</h1>

				<Sheet>
					<SheetTrigger asChild>
						<Button variant='outline'>
							<Edit className='mr-2 h-4 w-4' />
							Редактировать
						</Button>
					</SheetTrigger>

					<SheetContent className='w-full sm:max-w-md'>
						<SheetHeader className='mb-6'>
							<SheetTitle>Редактирование группы</SheetTitle>
						</SheetHeader>

						<div className='p-4'>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(handleSave)}
									className='space-y-4'
								>
									<FormField
										control={form.control}
										name='title'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Название группы</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder='Введите название группы'
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button
										type='submit'
										className='w-full'
									>
										Сохранить изменения
									</Button>
								</form>
							</Form>
						</div>
					</SheetContent>
				</Sheet>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className='flex items-center justify-between'>
						<span>Связанные справки</span>
					</CardTitle>
				</CardHeader>

				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Студент</TableHead>
								<TableHead>Дата выдачи</TableHead>
								<TableHead>Действует до</TableHead>
								<TableHead>Статус</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{data?.getHealthGroupById?.certificates?.map(certificate => (
								<TableRow key={certificate.id}>
									<TableCell>
										{certificate.student.lastName}{' '}
										{certificate.student.firstName}
									</TableCell>
									<TableCell>
										{new Date(certificate.startDate).toLocaleDateString()}
									</TableCell>
									<TableCell>
										{new Date(certificate.finishDate).toLocaleDateString()}
									</TableCell>
									<TableCell>
										{new Date(certificate.finishDate) > new Date() ? (
											<span className='text-green-600'>Активен</span>
										) : (
											<span className='text-red-600'>Истек</span>
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	)
}

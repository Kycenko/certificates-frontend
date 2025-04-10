import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, UserCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Skeleton } from '@/shared/ui/skeleton'

import {
	useGetProfileQuery,
	useUpdateAdminMutation
} from '@/app/graphql/generated'

import { AdminProfileSchema, adminProfileSchema } from './profile.schema'

function EditAdminProfileForm() {
	const { data, loading } = useGetProfileQuery()
	const [update] = useUpdateAdminMutation()

	const { id, login, role } = data?.getProfile || {}

	const methods = useForm<AdminProfileSchema>({
		resolver: zodResolver(adminProfileSchema),
		defaultValues: {
			login: '',
			role: 'ADMIN'
		}
	})

	const {
		handleSubmit,
		formState: { isSubmitting },
		control,
		reset
	} = methods

	useEffect(() => {
		if (data?.getProfile) {
			reset({
				login: login || '',
				role: 'ADMIN'
			})
		}
	}, [data, reset, login, role])

	if (loading) return <Skeleton className='w-5xl' />

	async function handleUpdate(
		id: string | undefined,
		data: AdminProfileSchema
	) {
		await update({
			variables: {
				id: id as string,
				data
			},
			onCompleted: () => {
				toast.success('Профиль успешно обновлен')
			},
			onError: () => {
				toast.error('Ошибка при обновлении профиля')
			}
		})
	}

	return (
		<div className='flex justify-center'>
			<Card className='w-5xl'>
				<CardHeader>
					<CardTitle className='text-2xl'>Профиль пользователя</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...methods}>
						<form
							onSubmit={handleSubmit(data => handleUpdate(id, data))}
							className='space-y-8'
						>
							<FormField
								control={control}
								name='login'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='flex items-center gap-2'>
											<UserCircle className='h-4 w-4' />
											Логин
										</FormLabel>
										<FormControl>
											<Input
												placeholder='Ваш логин'
												{...field}
											/>
										</FormControl>
										<FormDescription>
											Это имя будет отображаться в системе
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='flex items-center gap-2'>
											<Lock className='h-4 w-4' />
											Новый пароль
										</FormLabel>
										<FormControl>
											<Input
												type='password'
												placeholder='Оставьте пустым, если не хотите менять'
												{...field}
												value={field.value || ''}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type='submit'
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}

export default EditAdminProfileForm

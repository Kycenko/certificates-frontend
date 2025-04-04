'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Lock, Shield, UserCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	useGetProfileQuery,
	useUpdateUserMutation
} from '@/app/graphql/generated'
import { ProfileSchema, profileSchema } from '@/modules/profile/profile.schema'
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Skeleton
} from '@/shared/ui'
import { Switch } from '@/shared/ui/switch'

export default function EditProfileForm() {
	const { data, loading } = useGetProfileQuery()
	const [update] = useUpdateUserMutation()

	const { id, login, isAdmin } = data?.getProfile || {}

	const methods = useForm<ProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			login: '',
			isAdmin: true
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
				isAdmin: isAdmin || true
			})
		}
	}, [data, reset, login, isAdmin])

	if (loading) return <Skeleton className='w-5xl' />

	async function handleUpdate(id: string | undefined, data: ProfileSchema) {
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

							<Separator />

							{!isAdmin && (
								<FormField
									control={control}
									name='isAdmin'
									render={({ field }) => (
										<FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
											<div className='space-y-0.5'>
												<FormLabel className='flex items-center gap-2'>
													<Shield className='h-4 w-4' />
													Администратор
												</FormLabel>
												<FormDescription>
													Предоставляет полный доступ к системе
												</FormDescription>
											</div>
											<FormControl>
												<Switch
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
							)}

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

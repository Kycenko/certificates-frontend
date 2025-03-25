'use client'

import { Checkbox } from '@radix-ui/react-checkbox'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { UserSchema } from '@/types/schemas/user.schema'

import { GlobalSpinner } from './global-spinnner'
import {
	useGetProfileQuery,
	useUpdateUserMutation
} from '@/app/graphql/generated'

export function EditUserForm() {
	const { data, loading } = useGetProfileQuery()

	const [update] = useUpdateUserMutation()

	const { login, isAdmin, id } = data?.getProfile || {}

	const form = useForm({
		defaultValues: {
			login,
			isAdmin,
			password: ''
		}
	})

	const { control, handleSubmit } = form

	const onSubmit = async (data: UserSchema) => {
		await update({
			variables: {
				data: {
					login: data.login,
					isAdmin: data.isAdmin
				},
				updateUserId: id || '',
				password: data.password
			}
		})
	}

	if (loading) <GlobalSpinner />

	return (
		<Form {...form}>
			<form
				// onSubmit={handleSubmit(onSubmit)}
				className='space-y-8'
			>
				<FormField
					control={control}
					name='login'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Логин</FormLabel>
							<FormControl>
								<Input
									placeholder='Введите логин'
									defaultValue={login}
									value={field.value}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Введите пароль'
									value={field.value}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name='isAdmin'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Администратор?</FormLabel>
							<FormControl>
								<Checkbox
									checked={field.value}
									defaultChecked={isAdmin}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit'>Сохранить изменения</Button>
			</form>
		</Form>
	)
}

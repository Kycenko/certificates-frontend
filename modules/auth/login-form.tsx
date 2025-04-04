'use client'

import { useLoginMutation } from '@app/graphql/generated'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, loginSchema } from '@modules/auth/login.schema'
import { Button } from '@shared/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@shared/ui/card'
import { Input } from '@shared/ui/input'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui'

export default function LoginForm() {
	const router = useRouter()

	const methods = useForm<LoginSchema>({
		defaultValues: {
			login: '',
			password: ''
		},
		resolver: zodResolver(loginSchema)
	})

	const {
		handleSubmit,
		formState: { isSubmitting }
	} = methods

	const [login] = useLoginMutation()

	async function onSubmit(data: LoginSchema) {
		await login({
			variables: {
				data: {
					login: data.login,
					password: data.password
				}
			}
		}).then(response => {
			if (response.data?.login) {
				Cookies.set('accessToken', response.data?.login.accessToken, {
					expiresIn: '15m',
					sameSite: 'strict'
				})
				Cookies.set('refreshToken', response.data?.login.refreshToken, {
					expires: 7
				})
			}
			router.replace('/')
		})
	}

	return (
		<div className={'flex flex-col gap-6'}>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>Авторизация</CardTitle>
					<CardDescription>Введите логин и пароль чтобы войти</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...methods}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='space-y-6'
						>
							<FormField
								control={methods.control}
								name='login'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Логин</FormLabel>
										<FormControl>
											<Input
												placeholder='Введите логин...'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={methods.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Пароль</FormLabel>
										<FormControl>
											<Input
												type='password'
												placeholder='Введите пароль...'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type='submit'
								disabled={isSubmitting}
								className='w-full'
							>
								{isSubmitting ? 'Входим...' : 'Войти'}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}

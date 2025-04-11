import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from '@tanstack/react-router'
import { Eye, EyeOff, Lock, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { setTokens } from '@/shared/lib/tokens'
import { UserRole, User as UserType } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/shared/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { useLoginMutation } from '@/app/graphql/generated'
import { useAuth } from '@/app/providers/auth-provider'

import { LoginSchema, loginSchema } from './login.schema'

export default function LoginForm() {
	const { setUser } = useAuth()
	const router = useRouter()
	const [showPassword, setShowPassword] = useState(false)

	const methods = useForm<LoginSchema>({
		defaultValues: {
			login: '',
			password: ''
		},
		mode: 'onChange',
		resolver: zodResolver(loginSchema)
	})

	const {
		handleSubmit,
		formState: { isSubmitting }
	} = methods

	const [login] = useLoginMutation()

	async function onSubmit(data: LoginSchema) {
		try {
			const response = await login({
				variables: {
					data: {
						login: data.login,
						password: data.password
					}
				}
			})

			const loginData = response.data?.login

			if (loginData) {
				setTokens(loginData)
				setUser(loginData.user as UserType)

				const role = loginData.user.role
				if (role === UserRole.ADMIN) {
					router.navigate({ to: '/admin/statistics', replace: true })
				} else if (role === UserRole.CURATOR) {
					router.navigate({
						to: `/curator/group/${loginData.user.curator?.groupId}`,
						replace: true
					})
				}
			}
		} catch (error) {
			console.error('Ошибка авторизации:', error)
		}
	}

	return (
		<Card className='w-full max-w-md shadow-lg'>
			<CardHeader>
				<CardTitle className='text-center text-2xl'>Вход в систему</CardTitle>
				<CardDescription className='text-center'>
					Укажите логин и пароль для доступа
				</CardDescription>
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
										<div className='relative'>
											<Input
												placeholder='Введите логин...'
												{...field}
												className='pl-10'
											/>
											<User className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
										</div>
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
										<div className='relative'>
											<Input
												type={showPassword ? 'text' : 'password'}
												placeholder='Введите пароль...'
												{...field}
												className='pr-10 pl-10'
											/>
											<Lock className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
											<button
												type='button'
												onClick={() => setShowPassword(prev => !prev)}
												className='text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2'
												aria-label='Показать или скрыть пароль'
											>
												{showPassword ? (
													<EyeOff className='h-4 w-4' />
												) : (
													<Eye className='h-4 w-4' />
												)}
											</button>
										</div>
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

				<div className='text-muted-foreground mt-6 text-center text-sm'>
					Или&nbsp;
					<Link
						to='/'
						className='text-primary font-medium transition-colors hover:underline'
					>
						перейти к поиску студентов
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}

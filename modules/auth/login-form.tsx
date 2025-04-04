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
import { Label } from '@shared/ui/label'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
	const router = useRouter()

	const methods = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema)
	})

	const {
		handleSubmit,
		register,
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
			if (response.data?.login)
				Cookies.set('accessToken', response.data.login.accessToken, {
					httpOnly: true,
					sameSite: 'strict',
					maxAge: 15 * 60
				})

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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Логин</Label>
								<Input
									{...register('login')}
									id='login'
									type='text'
									placeholder='Введите логин...'
								/>
							</div>
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Пароль</Label>
								</div>
								<Input
									{...register('password')}
									id='password'
									type='password'
									placeholder='Введите пароль...'
								/>
							</div>
							<Button
								type='submit'
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Входим...' : 'Войти'}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

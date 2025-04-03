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
	const methods = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema)
	})

	const { handleSubmit, register } = methods
	const router = useRouter()
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
					expiresIn: '15m'
				})
				Cookies.set('refreshToken', response.data?.login.refreshToken, {
					expires: 7
				})
			}
			router.push('/')
		})
	}

	return (
		<div className={'flex flex-col gap-6'}>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Login</Label>
								<Input
									{...register('login')}
									id='login'
									type='login'
									placeholder='user'
								/>
							</div>
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Password</Label>
								</div>
								<Input
									{...register('password')}
									id='password'
									type='password'
									placeholder='password'
								/>
							</div>
							<Button
								type='submit'
								className='w-full'
							>
								Login
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

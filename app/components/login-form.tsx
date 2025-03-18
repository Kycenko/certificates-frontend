'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useLoginMutation } from '@/app/graphql/generated'
import { LoginSchema } from '@/app/types/login.schema'

export default function LoginForm() {
	const methods = useForm<LoginSchema>()

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = methods
	const router = useRouter()
	const [login] = useLoginMutation()

	const onSubmit = (data: LoginSchema) => {
		login({
			variables: {
				data: {
					login: data.login,
					password: data.password
				}
			}
		}).then(response => {
			if (response.data?.login) {
				Cookies.set('accessToken', response.data?.login.accessToken, {
					expires: 7
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
									{/* <a className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
										Forgot your password?
									</a> */}
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
						{/* <div className='mt-4 text-center text-sm'>
							Don&apos;t have an account?{' '}
							<a className='underline underline-offset-4'>Sign up</a>
						</div> */}
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

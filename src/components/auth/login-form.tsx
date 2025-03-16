import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from '@tanstack/react-router'
import Cookies from 'js-cookie'
import { FormProvider, useForm } from 'react-hook-form'

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

import { LoginSchema, loginSchema } from '@/types/login.schema'

import { useLoginMutation } from '@/graphql/generated'
import { cn } from '@/lib/utils'

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	const methods = useForm<LoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema)
	})

	const router = useRouter()

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = methods

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
			router.navigate({ to: '/' })
		})
	}

	return (
		<div
			className={cn('flex flex-col gap-6', className)}
			{...props}
		>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>
						Enter your login below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(data => onSubmit(data))}>
							<div className='flex flex-col gap-6'>
								<div className='grid gap-2'>
									<Label htmlFor='login'>Login</Label>
									<Input
										{...register('login')}
										id='login'
										type='text'
										placeholder='admin'
										required
									/>
									{errors.login && (
										<p className='text-sm text-destructive'>
											{errors.login.message}
										</p>
									)}
								</div>
								<div className='grid gap-2'>
									<div className='flex items-center'>
										<Label htmlFor='password'>Password</Label>
										{/* <a
											href='#'
											className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
										>
											Forgot your password?
										</a> */}
									</div>
									<Input
										{...register('password')}
										id='password'
										type='password'
										required
									/>
									{errors.password && (
										<p className='text-sm text-destructive'>
											{errors.password.message}
										</p>
									)}
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
								<Link
									to='/auth/register'
									className='underline underline-offset-4'
								>
									Sign up
								</Link>
							</div> */}
						</form>
					</FormProvider>
				</CardContent>
			</Card>
		</div>
	)
}

'use client'

import {
	Button,
	Card,
	Flex,
	PasswordInput,
	Text,
	TextInput,
	Title
} from '@mantine/core'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'

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
		<Flex
			direction='column'
			gap='md'
			maw={400}
			mx='auto'
			my='xl'
		>
			<Card
				shadow='sm'
				padding='lg'
				radius='md'
				withBorder
			>
				<Card.Section p='md'>
					<Title order={2}>Login</Title>
					<Text
						size='sm'
						color='dimmed'
					>
						Enter your login below to login to your account
					</Text>
				</Card.Section>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Flex
							direction='column'
							gap='md'
						>
							<TextInput
								{...register('login', { required: 'This field is required' })}
								label='Login'
								placeholder='admin'
								error={errors.login?.message}
							/>
							<PasswordInput
								{...register('password', {
									required: 'This field is required'
								})}
								label='Password'
								placeholder='Your password'
								error={errors.password?.message}
							/>
							<Button
								type='submit'
								fullWidth
							>
								Login
							</Button>
						</Flex>
					</form>
				</FormProvider>
			</Card>
		</Flex>
	)
}

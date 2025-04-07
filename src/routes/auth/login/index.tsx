import { createFileRoute, redirect } from '@tanstack/react-router'
import Cookies from 'js-cookie'

import LoginForm from '@/modules/auth/login-form'

export const Route = createFileRoute('/auth/login/')({
	beforeLoad: async () => {
		const token = Cookies.get('accessToken')

		if (token)
			throw redirect({
				to: '/statistics'
			})
	},

	component: () => (
		<div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
			<div className='w-full max-w-sm'>
				<LoginForm />
			</div>
		</div>
	)
})

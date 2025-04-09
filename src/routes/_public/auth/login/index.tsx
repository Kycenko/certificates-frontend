import { createFileRoute, redirect } from '@tanstack/react-router'
import Cookies from 'js-cookie'

import LoginForm from '@/modules/public/auth/login-form'

export const Route = createFileRoute('/_public/auth/login/')({
	beforeLoad: async ({ context }) => {
		const token = Cookies.get('accessToken')

		const role = context.auth.user?.role

		if (token && role === 'ADMIN')
			throw redirect({
				to: '/statistics'
			})

		if (token && role === 'CURATOR')
			throw redirect({
				to: '/groups'
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

import { createFileRoute } from '@tanstack/react-router'

import LoginForm from '@/modules/auth/login-form'

export const Route = createFileRoute('/auth/login/')({
	component: () => (
		<div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
			<div className='w-full max-w-sm'>
				<LoginForm />
			</div>
		</div>
	)
})

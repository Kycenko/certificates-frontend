'use client'

import { Button } from '../ui'

import { useLogoutMutation } from '@/app/graphql/generated'

export default function Logout() {
	const [logout] = useLogoutMutation()

	async function handleLogout() {
		await logout()
	}

	return (
		<Button
			className='w-full'
			variant={'outline'}
			onClick={handleLogout}
		>
			Выйти
		</Button>
	)
}

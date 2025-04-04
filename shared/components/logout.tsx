'use client'

import { useRouter } from 'next/navigation'

import { Button } from '../ui'
import { removeTokens } from '../utils/tokens'

import { useLogoutMutation } from '@/app/graphql/generated'

export default function Logout() {
	const router = useRouter()

	const [logout] = useLogoutMutation({
		onCompleted: () => {
			removeTokens()
			router.replace('/auth/login')
		}
	})

	return (
		<Button
			className='w-full'
			variant={'outline'}
			onClick={() => logout()}
		>
			Выйти
		</Button>
	)
}
